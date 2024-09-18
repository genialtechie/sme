// chnage url if in development mode or production mode
export function getStrapiUrl(): string {
  return process.env.NODE_ENV === 'development'
    ? `http://localhost:1337`
    : process.env.STRAPI_URL_BASE || 'https://sme-api.onrender.com';
}

// fetch data from strapi
export async function fetchStrapiAPI<T>(endpoint: string): Promise<any> {
  const requestUrl = `${getStrapiUrl()}/${endpoint}`;
  const res = await fetch(requestUrl, {
    method: 'GET',
    headers: {
      Authorization: `bearer ${process.env.STRAPI_CLIENT_SECRET}`,
      'Content-Type': 'application/json',
    },
    next: {
      revalidate: 60 * 60, // revalidate every hour
    },
  });
  const { data } = await res.json();
  return data;
}
