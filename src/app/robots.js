export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [], // Add specific paths here if you want to block them
    },
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`, // Replace with your actual sitemap URL
  };
}
