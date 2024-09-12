import { blogs, legalLinks, navBarLinks, servicii } from "@/lib/variables";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, ""); // Remove trailing slash from base URL if it exists

  const staticPages = [
    ...navBarLinks
      .filter((link) => link.path !== "/")
      .map((link) => ({
        url: `${baseUrl}${link.path}`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.6,
      })),
    ...legalLinks.map((link) => ({
      url: `${baseUrl}${link.path}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5, // Lower priority for legal pages
    })),
  ];

  const servicePages = servicii.map((service) => ({
    url: `${baseUrl}${service.href}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.8, // Higher priority for service pages
  }));

  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}${blog.link}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5, // Lower priority for blog posts
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1, // Highest priority for homepage
    },
    ...staticPages,
    ...servicePages,
    ...blogPages,
  ];
}
