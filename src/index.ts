import { serve } from "bun";
import index from "./index.html";

const server = serve({
  routes: {
    "/": index,
    "/api/healthcheck": {
      async GET() {
        return Response.json({
          status: "OK"
        });
      },
    },
  },
});

console.log(`🚀 Server running at ${server.url}`);
