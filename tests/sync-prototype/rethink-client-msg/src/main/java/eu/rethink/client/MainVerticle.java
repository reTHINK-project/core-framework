package eu.rethink.client;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Vertx;
import io.vertx.core.http.HttpServer;
import io.vertx.core.http.HttpServerOptions;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.BodyHandler;
import io.vertx.ext.web.handler.CookieHandler;
import io.vertx.ext.web.handler.SessionHandler;
import io.vertx.ext.web.handler.StaticHandler;
import io.vertx.ext.web.sstore.LocalSessionStore;

public class MainVerticle extends AbstractVerticle  {

	public static void main(String[] args) {
		Vertx.vertx().deployVerticle(new MainVerticle());
	}

	@Override
	public void start() throws Exception {
		final Router router = Router.router(vertx);
		router.route().handler(CookieHandler.create());
		router.route().handler(SessionHandler.create(LocalSessionStore.create(vertx)));
		router.route().handler(BodyHandler.create());
		router.route("/*").handler(StaticHandler.create("web").setIndexPage("index.html"));
		
		final HttpServerOptions httpOptions = new HttpServerOptions();
		httpOptions.setTcpKeepAlive(true);
		httpOptions.setIdleTimeout(10);
		
		final HttpServer server = vertx.createHttpServer(httpOptions);
		server.requestHandler(router::accept).listen(8080);
		System.out.println("Web Server -> port(8080)");
	}
}
