import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Lista de rutas que deben devolver 410 Gone
const GONE_ROUTES = [
  '/gutter-cleaning-denver',
  '/gutter-cleaning-parker',
  '/gutter-cleaning-castle-rock',
  '/gutter-cleaning-lone-tree',
  '/gutter-cleaning-highlands-ranch',
  '/gutter-cleaning-centennial',
  '/gutter-cleaning-central-park',
  '/gutter-cleaning-hilltop',
  '/gutter-cleaning-washington-park',
  '/gutter-cleaning-cherry-creek',
  '/gutter-cleaning-university-park',
  '/gutter-cleaning-highland'
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Verificar si la ruta está en la lista de rutas eliminadas
  if (GONE_ROUTES.some(route => pathname.startsWith(route))) {
    return new NextResponse(null, {
      status: 410,
      statusText: 'Gone',
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }

  return NextResponse.next();
}

// Configuración del middleware para que solo se ejecute en las rutas especificadas
export const config = {
  matcher: GONE_ROUTES,
};
