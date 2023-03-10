import type { Context } from "https://edge.netlify.com";

export default (_request: Request, context: Context) => {
  return Response.json({
    hello: "world from edge functions",
    location: context.geo.city,
  });
};
