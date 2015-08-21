package eu.rethink.mn.pipeline.handlers;

import java.util.HashMap;
import java.util.Map;
import java.util.SortedMap;
import java.util.TreeMap;

import io.vertx.core.Handler;
import eu.rethink.mn.pipeline.PipeContext;

public class MsgOrderPipeHandler implements Handler<PipeContext> {
	final Map<String, SortedMap<Integer, PipeContext>> queues = new HashMap<>();
	final Map<String, Integer> lastMsg = new HashMap<>();
	
	@Override
	public void handle(PipeContext ctx) {
		//TODO: stall on message deliver-fail...
		final int id = ctx.getHeader().getInteger("id");
		final String from = ctx.getHeader().getString("from");
		final String type = ctx.getHeader().getString("type");
		
		//reply's do not count for sequence...
		if(type.equals("reply")) {
			ctx.next();
			return;
		}
		
		SortedMap<Integer, PipeContext> queue = queues.get(from);
		if(queue == null) {
			queue = new TreeMap<>();
			queues.put(from, queue);
			
			lastMsg.put(from, 0);
		}
		
		queue.put(id, ctx);
		for(int key: queue.keySet()) {
			int last = lastMsg.get(from);
			if(key == last + 1) {
				final PipeContext nextCtx = queue.get(key);
				nextCtx.next();
				lastMsg.put(from, last + 1);
			}			
		}
	}
}
