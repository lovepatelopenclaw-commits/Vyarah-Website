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

  // Combine and return
  return [...routes, ...services];
}
