package eu.rethink.mn;

import java.util.HashMap;
import java.util.Map;

import eu.rethink.mn.pipeline.PipeResource;

public class Register {
	//TODO: use cluster map !?
	static Map<String, PipeResource> resources = new HashMap<>();

	public static void addResource(String url, PipeResource res) {
		resources.put(url, res);
	}
	
	public static PipeResource getResource(String url) {
		return resources.get(url);
	}
}
