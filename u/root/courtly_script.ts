// Ctrl/CMD+. to cache dependencies on imports hover.

// Deno uses "npm:" prefix to import from npm (https://deno.land/manual@v1.36.3/node/npm_specifiers)
// import * as wmill from "npm:windmill-client@1.283.0"

// fill the type, or use the +Resource type to get a type-safe reference to a resource
// type Postgresql = object

export async function main() {
  return await fetch("https://print.trog.host", {
    headers: {
      "title": "test",
      "subtitle": "changelog",
      "message": "2010-09-16T15:13:46.677020+00:00 app[web.1]: Processing PostController#list (for 208.39.138.12 at 2010-09-16 15:13:46) [GET]"
    }
  })
}
