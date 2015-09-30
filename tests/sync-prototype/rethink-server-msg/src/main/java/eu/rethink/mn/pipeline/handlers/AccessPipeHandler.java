package eu.rethink.mn.pipeline.handlers;

import io.vertx.core.Handler;
import eu.rethink.mn.pipeline.PipeContext;

public class AccessPipeHandler implements Handler<PipeContext> {
	@Override
	public void handle(PipeContext ctx) {
		//TODO: process access control rules
		
		System.out.println("AccessPipeHandler -> " + ctx.getMessage());
		ctx.next();
	}
}
