package eu.rethink.mn.pipeline.handlers;

import io.vertx.core.Handler;
import io.vertx.core.json.JsonObject;
import eu.rethink.mn.Register;
import eu.rethink.mn.pipeline.PipeContext;
import eu.rethink.mn.pipeline.PipeResource;

public class ValidatorPipeHandler implements Handler<PipeContext> {

	@Override
	public void handle(PipeContext ctx) {
		final JsonObject msg = ctx.getMessage();
		
		//header validation...
		final JsonObject header = msg.getJsonObject("header");
		if(header == null) {
			ctx.fail(new RuntimeException("No mandatory field 'header' in message"));
		} 
		
			if(!header.containsKey("id")) {
				ctx.fail(new RuntimeException("No mandatory field 'id' in header"));
			}
			
			if(!header.containsKey("type")) {
				ctx.fail(new RuntimeException("No mandatory field 'type' in header"));
			}
			
			if(!header.containsKey("comp")) {
				ctx.fail(new RuntimeException("No mandatory field 'comp' in header"));
			}
			
			final String from = header.getString("from");
			if(from == null) {
				ctx.fail(new RuntimeException("No mandatory field 'from' in header"));
			} else {
				//TODO: this address should not be hard coded!
				if(!from.equals("runtime://localhost:8080")) {
					final PipeResource res = Register.getResource(from);
					if(res == null) {
						ctx.fail(new RuntimeException("No address alocated for 'from' field: " + from));
					}
				}
			}
	
			final String to = header.getString("to");
			if(to == null) {
				ctx.fail(new RuntimeException("No mandatory field 'to' in header"));
			} else {
				//TODO: this address should not be hard coded!
				if(!to.equals("bus://localhost:9090")) {
					final PipeResource res = Register.getResource(to);
					if(res == null) {
						ctx.fail(new RuntimeException("No address alocated for 'to' field: " + to));
					}
				}
			}

			
			
		//body validation...
		/*
		if(!msg.containsKey("body")) {
			ctx.fail(new RuntimeException("No mandatory field 'body' in message"));
		}*/
		
		ctx.next();
	}

}
