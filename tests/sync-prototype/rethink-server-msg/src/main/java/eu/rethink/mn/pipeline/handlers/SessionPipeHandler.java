package eu.rethink.mn.pipeline.handlers;

import eu.rethink.mn.pipeline.PipeContext;
import io.vertx.core.Handler;

public class SessionPipeHandler implements Handler<PipeContext> {
	@Override
	public void handle(PipeContext ctx) {
		System.out.println("SessionPipeHandler -> " + ctx.getMessage());
		
		/*
		final JsonObject header = ctx.getHeader();
		final String token = header.getString("token");
		
		if(token == null) {
			ctx.fail(new RuntimeException("No available session token!"));
			return;
		} 
		
		//TODO: validate session token and get resource
		header.remove("token");
		header.put("resource", ctx.getResource().getUid());
		*/
		ctx.next();
	}
}
