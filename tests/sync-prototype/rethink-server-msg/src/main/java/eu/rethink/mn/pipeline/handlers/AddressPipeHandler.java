package eu.rethink.mn.pipeline.handlers;

import io.vertx.core.Handler;
import io.vertx.core.json.JsonObject;
import eu.rethink.mn.Register;
import eu.rethink.mn.pipeline.PipeContext;

public class AddressPipeHandler implements Handler<PipeContext> {
	@Override
	public void handle(PipeContext ctx) {
		final JsonObject header = ctx.getHeader();
		if(header.getString("to").equals("bus://localhost:9090") && header.getString("comp").equals("address")) {
			final JsonObject body = ctx.getBody();
			final String url = body.getString("res");
			
			Register.addResource(url, ctx.getResource());
			System.out.println("REGISTER: " + url);
		} else {
			ctx.next();
		}
	}

}
