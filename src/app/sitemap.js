import blogPosts from "@/data/blog";
import portfolioData from "@/data/portfolio";

export default function sitemap() {
  const baseUrl = "https://vyarah.com";

  // Core Static Routes
  const routes = ["", "/services", "/blog", "/privacy", "/terms"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  // Service Pages
  const services = [
    "/services/ai-automation",
    "/services/web-development",
    "/services/app-development",
    "/services/growth-systems",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Blog Posts
  const blogs = (blogPosts || []).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date || Date.now()),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Portfolio / Case Studies
  const portfolio = (portfolioData || []).map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Combine and return
  return [...routes, ...services, ...blogs, ...portfolio];
}
