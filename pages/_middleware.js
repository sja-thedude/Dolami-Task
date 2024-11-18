// pages/_middleware.js (or app/middleware.js for Next.js 13+)
export async function middleware(req) {
    const username = process.env.BASIC_AUTH_USERNAME;
    const password = process.env.BASIC_AUTH_PASSWORD;

  const auth = req.headers.get('authorization');

  if (!auth) {
    return new Response('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  const encoded = auth.split(' ')[1];
  const decoded = Buffer.from(encoded, 'base64').toString('utf-8');
  const [user, pass] = decoded.split(':');

  if (user === username && pass === password) {
    return NextResponse.next();
  }

  return new Response('Invalid credentials', {
    status: 403,
  });
}
