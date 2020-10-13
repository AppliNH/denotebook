// Run with --allow-net please


// No need to install. Will download when you deno run, then put it in cache on your machine
import { serve } from "https://deno.land/std@0.74.0/http/server.ts";

const server = serve({ port: 8000 });

console.log("Runnin' on port 8000 :)");

for await (const req of server) {
  req.respond({ body: "Hello Boi\n" });
}
