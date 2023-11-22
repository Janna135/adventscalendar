import { NextMiddleware, NextResponse } from "next/server";

type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;
export const withBasicAuth: MiddlewareFactory = (next) => {
  return async (req, _next) => {
    const basicAuth = req.headers.get("authorization");
    const url = req.nextUrl;
    let authPassed = false;

    // always allow access to the page in development mode
    if (process.env.NODE_ENV === "development") authPassed = true;

    // if the request includes a basic auth header, check the credentials
    if (basicAuth) {
      const authValue = basicAuth.split(" ")[1];
      const [user, pwd] = atob(authValue).split(":");

      if (user === "kentucky" && pwd === "horsewear") {
        authPassed = true;
      }
    }

    // if the request is not authenticated, redirect to the auth endpoint
    if (!authPassed) {
      url.pathname = "/api/auth";

      return NextResponse.rewrite(url);
    }

    return next(req, _next);
  };
};
