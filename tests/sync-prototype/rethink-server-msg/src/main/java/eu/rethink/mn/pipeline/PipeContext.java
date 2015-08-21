package eu.rethink.mn.pipeline;

import java.util.Iterator;

import io.vertx.core.Handler;
import io.vertx.core.json.JsonObject;

public class PipeContext {
	boolean inFail = false;
	
	final Pipeline pipeline;
	final PipeResource resource;
	
	final Iterator<Handler<PipeContext>> iter;
	final JsonObject msg;
	
	PipeContext(Pipeline pipeline, PipeResource resource, Iterator<Handler<PipeContext>> iter, JsonObject msg) {
		this.pipeline = pipeline;
		this.resource = resource;
		this.iter = iter;
		this.msg = msg;
	}
	
	public Pipeline getPipeline() {return pipeline;}
	public PipeResource getResource() {return resource;}
	
	public JsonObject getMessage() {return msg;}
	
	public int getId() {
		final JsonObject header = getHeader();
		if(header == null) {
			return 0;
		} else {
			return header.getInteger("id");
		}
	}
	
	public JsonObject getHeader() {
		return msg.getJsonObject("header");
	}
	
	public JsonObject getBody() {
		return msg.getJsonObject("body");
	}
	
	public void next() {
		if(!inFail && iter.hasNext()) {
			iter.next().handle(this);
		}
	}
	
	public void fail(Throwable ex) {
		inFail = true;
		resource.replyError(getId(), ex.getMessage());
		if(pipeline.failHandler != null) {
			pipeline.failHandler.handle(ex);
		}
	}
}
