package eu.rethink.mn;

import static java.lang.System.out;
import eu.rethink.mn.pipeline.Pipeline;
import eu.rethink.mn.pipeline.handlers.AddressPipeHandler;
import eu.rethink.mn.pipeline.handlers.MessagePipeHandler;
import eu.rethink.mn.pipeline.handlers.MsgOrderPipeHandler;
import eu.rethink.mn.pipeline.handlers.ValidatorPipeHandler;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.Vertx;
import io.vertx.core.eventbus.EventBus;
import io.vertx.core.http.HttpServer;
import io.vertx.core.http.HttpServerOptions;

public class MsgNode extends AbstractVerticle {
	public static void main(String[] args) {
		Vertx vertx = Vertx.vertx();
		vertx.deployVerticle(new MsgNode());
	}
	
	@Override
	public void start() throws Exception {
		final EventBus eb = vertx.eventBus();

		final Pipeline pipeline = new Pipeline(eb)
			.addHandler(new ValidatorPipeHandler())
			.addHandler(new AddressPipeHandler())
			//.addHandler(new MsgOrderPipeHandler())
			//.addHandler(new SessionPipeHandler())
			//.addHandler(new AccessPipeHandler())
			.addHandler(new MessagePipeHandler())
			.failHandler(fail -> {
				out.println("PIPELINE-FAIL: " + fail.getMessage());
			});
		
		final HttpServerOptions httpOptions = new HttpServerOptions();
		httpOptions.setTcpKeepAlive(true);
		
		final HttpServer server = vertx.createHttpServer(httpOptions);
		WebSocketServer.init(server, pipeline);
		server.listen(9090);
		System.out.println("Messaging Node -> port(9090)");
	}
}
