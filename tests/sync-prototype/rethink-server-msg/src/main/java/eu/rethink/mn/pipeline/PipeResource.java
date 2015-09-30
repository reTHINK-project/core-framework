package eu.rethink.mn.pipeline;

import io.vertx.core.eventbus.EventBus;
import io.vertx.core.json.JsonObject;

public class PipeResource {
	final Pipeline pipeline;
	final String uid;
	
	PipeResource(Pipeline pipeline, String uid) {
		this.pipeline = pipeline;
		this.uid = uid;
	}
	
	public String getUid() {return uid;}
	
	public void processMessage(JsonObject msg) {
		pipeline.process(this, msg);
	}
	
	public void reply(int msgID, JsonObject body) {
		final JsonObject header = new JsonObject();
		header.put("id", msgID);
		header.put("type", "reply");
		
		final JsonObject msg = new JsonObject();
		msg.put("header", header);
		msg.put("body", body);
		
		sendMessage(msg);
	}
	
	public void replyOK(int msgID) {
		final JsonObject body = new JsonObject();
		body.put("code", "ok");
		
		reply(msgID, body);
	}
	
	public void replyError(int msgID, String error) {
		final JsonObject body = new JsonObject();
		body.put("code", "error");
		body.put("desc", error);
		
		reply(msgID, body);
	}
	
	public void sendMessage(JsonObject msg) {
		final EventBus eb = pipeline.getEventBus();
		eb.send(uid, msg.toString());
	}
	
	public void destroy() {
		pipeline.registry.removeResource(this);
	}
}
