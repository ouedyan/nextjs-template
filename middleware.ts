import { NextRequest } from "next/server";
import i18nConfig from "@/i18n.config";
import { createI18nMiddleware } from "next-international/middleware";

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - API routes (starting with 'api')
     * - Static files (starting with 'static')
     * - Files with extensions (containing a period)
     * - Internal Next.js routes (starting with '_next')
     */
    "/((?!api|static|.*\\..*|_next).*)",
  ],
};

const I18nMiddleware = createI18nMiddleware(i18nConfig);

export function middleware(request: NextRequest) {
  // Whatever wanted...
  return I18nMiddleware(request);
}
