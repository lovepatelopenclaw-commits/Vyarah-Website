import blogPosts from "@/data/blog";
import portfolioData from "@/data/portfolio";

const baseUrl = "https://www.vyarah.com";
const buildUrl = (path = "") => `${baseUrl}${path}`;

export default function sitemap() {
  const now = new Date();

  const routes = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
    { path: "/build-your-chatbot", changeFrequency: "monthly", priority: 0.8 },
    { path: "/free-audit", changeFrequency: "monthly", priority: 0.9 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  ].map((route) => ({
    url: buildUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const services = [
    "/services/ai-automation",
    "/services/web-development",
    "/services/app-development",
    "/services/growth-systems",
  ].map((path) => ({
    url: buildUrl(path),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogs = blogPosts.map((post) => ({
    url: buildUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const portfolio = portfolioData.map((project) => ({
    url: buildUrl(`/work/${project.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...routes, ...services, ...blogs, ...portfolio];
}
