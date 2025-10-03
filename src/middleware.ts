import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const env = process.env.VERCEL_ENV // 'production' | 'preview' | 'development'
  const host = req.headers.get('host') || ''
  const isPreview = env !== 'production' || host.endsWith('.vercel.app')
  if (isPreview) {
    res.headers.set('X-Robots-Tag', 'noindex, nofollow')
  }
  return res
}
