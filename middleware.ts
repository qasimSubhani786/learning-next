import { NextResponse, type NextRequest } from "next/server";

const isLogedin: boolean = false;

export const middleware = (request: NextRequest) => {
  // return NextResponse.redirect(new URL("/", request.url));
  // if (request.nextUrl.pathname === "/users") {
  //   return NextResponse.rewrite(new URL("/", request.url));
  // }

  const response = NextResponse.next();
  const themePrefrence = request.cookies.get("theme");
  if (!themePrefrence) {
    response.cookies.set("theme", "dark");
  }
  return response;
};

// export const config = {
//   matcher: "/about",
// };
