import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname === '/service-areas/harris-county-tx') {
    return NextResponse.redirect(new URL('/service-areas', req.url), 301)
  }

  if (pathname.startsWith('/service-areas/harris-county-tx/')) {
    const rest = pathname.replace('/service-areas/harris-county-tx/', '')
    return NextResponse.redirect(new URL(`/service-areas/${rest}`, req.url), 301)
  }

  if (
    pathname ===
    '/services/house-cleaning-and-maid-service-with-satisfaction-guarantee'
  ) {
    return NextResponse.redirect(
      new URL(
        '/our-services/house-cleaning-and-maid-service-with-satisfaction-guarantee',
        req.url,
      ),
      301,
    )
  }

  const res = NextResponse.next()
  const env = process.env.VERCEL_ENV // 'production' | 'preview' | 'development'
  const host = req.headers.get('host') || ''
  const isPreview = env !== 'production' || host.endsWith('.vercel.app')
  if (isPreview) {
    res.headers.set('X-Robots-Tag', 'noindex, nofollow')
  }
  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
