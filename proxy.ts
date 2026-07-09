import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname, hostname } = url;

  // 1. www → non-www redirect
  if (hostname.startsWith('www.')) {
    url.hostname = hostname.replace(/^www\./, '');
    return NextResponse.redirect(url, { status: 301 });
  }

  // 2. Trailing slash normalization (remove trailing slash)
  if (pathname !== '/' && pathname.endsWith('/')) {
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, { status: 301 });
  }

  // 3. Lowercase enforcement for paths
  if (pathname !== pathname.toLowerCase()) {
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
