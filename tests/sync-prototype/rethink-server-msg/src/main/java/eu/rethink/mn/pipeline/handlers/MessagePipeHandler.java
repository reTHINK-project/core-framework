package eu.rethink.mn.pipeline.handlers;

import io.vertx.core.Handler;
import io.vertx.core.json.JsonObject;
import eu.rethink.mn.Register;
import eu.rethink.mn.pipeline.PipeContext;
import eu.rethink.mn.pipeline.PipeResource;

public class MessagePipeHandler implements Handler<PipeContext> {
	
	@Override
	public void handle(PipeContext ctx) {
		final JsonObject msg = ctx.getMessage();
		final JsonObject header = ctx.getHeader();

		System.out.println("MessagePipeHandler: " + msg);
		final PipeResource res = Register.getResource(header.getString("to"));
		res.sendMessage(msg);
		
		/*
		if(cmd.equals("send")) {
			final String to = header.getString("to");
			if(header.getBoolean("reply", false)) {
				eb.send(to, body, replyHandler -> {				
					final Message<Object> msg = replyHandler.result();
					if(msg != null) {
						ctx.getResource().reply(msgID, (JsonObject) msg.body());
					} else {
						ctx.getResource().replyError(msgID, "Response null!");
					}
				});
			} else {
				eb.send(to, body);
			}
		} else if(cmd.equals("pub")) {
			final String topic = header.getString("topic");
			eb.publish(topic, body);
		}
		*/
		
		ctx.next();
	}
}
