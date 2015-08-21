package eu.rethink.mn;

import static java.lang.System.out;
import eu.rethink.mn.pipeline.Pipeline;
import eu.rethink.mn.pipeline.PipeResource;
import io.vertx.core.http.HttpServer;
import io.vertx.core.json.JsonObject;

public class WebSocketServer {
	
	public static void init(HttpServer server, Pipeline pipeline) {
		server.websocketHandler(ws -> {
			if(!ws.uri().equals("/ws")) {
				ws.reject();
			}
			
			out.println("RESOURCE-OPEN");
			final PipeResource resource = pipeline.createResource(ws.textHandlerID());
			
			ws.frameHandler(frame -> {
				final JsonObject msg = new JsonObject(frame.textData());
				resource.processMessage(msg);
			});
						
			ws.closeHandler(handler -> {
				out.println("RESOURCE-CLOSE");
				resource.destroy();
			});
		});
		
		/*
		final SockJSHandler handlerJS = SockJSHandler.create(vertx);
		handlerJS.socketHandler(socket -> {
			out.println("Connected...");
			socket.handler(buffer -> {
				out.println("MSG: " + buffer.getString(0, buffer.length()));
			});
			
			socket.endHandler(endHandler -> {
				out.println("END");
			});
			
			socket.exceptionHandler(handler -> {
				handler.printStackTrace();
			});
		});
		
		final Router router = Router.router(vertx);
		router.route().handler(CookieHandler.create());
		router.route().handler(SessionHandler.create(LocalSessionStore.create(vertx)));
		router.route("/msg/*").handler(handlerJS);
		router.route("/web/*").handler(StaticHandler.create("web"));
		
		server.requestHandler(router::accept);
		*/
	}
}
