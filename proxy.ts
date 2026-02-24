// proxy.ts
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl;
  const { userId } = await auth();

  // 🔹 Пропускаем статические файлы и API
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  // 🔐 Защита Admin
  if (pathname.startsWith("/admin")) {
    if (!userId) {
      // пользователь не авторизован
      return NextResponse.redirect(new URL("/?error=unauthorized", req.url));
    }
    if (userId !== process.env.ADMIN_USER_ID) {
      // пользователь не админ
      return NextResponse.redirect(new URL("/?error=forbidden", req.url));
    }
  }
  // другие protected routes можно добавить здесь
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*).*)"], // матчим все кроме static файлов
};
/////////////////////////////////////////////////////////////////////////
// import { clerkMiddleware } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// export default clerkMiddleware(async (auth, req) => {
//   const { pathname } = req.nextUrl;
//   const { userId } = await auth();

//   // Защита API
//   if (pathname.startsWith("/api")) return NextResponse.next();

//   // Защита Admin
//   if (pathname.startsWith("/admin")) {
//     if (!userId || userId !== process.env.ADMIN_USER_ID) {
//       return NextResponse.redirect(new URL("/", req.url));
//     }
//   }

//   // Можно добавить другие protected routes здесь
//   return NextResponse.next();
// });

// export const config = {
//   matcher: ["/(.*)"], // матчим все маршруты
// };
///////////////////////////////////////////////////////////////////////
// const { pathname } = req.nextUrl;
// console.log("USER ID:", userId);
// console.log("ADMIN ENV:", process.env.ADMIN_USER_ID);
// console.log("PATH:", pathname);
// console.log("isAdminRoute:", isAdminRoute(req));
