import { MetadataRoute } from "next";

const SITE_URL = "https://www.combui.tech/"; // Ana domain

export default function sitemap(): MetadataRoute.Sitemap {
  // Statik sayfalar
  const staticRoutes = [
    { url: `${SITE_URL}/`, lastModified: new Date().toISOString() },
    { url: `${SITE_URL}/components`, lastModified: new Date().toISOString() },
    { url: `${SITE_URL}/blocks`, lastModified: new Date().toISOString() },
  ];

  // Dinamik sayfalar (örneğin, component veya block listesi)
  const components = ["button", "card", "modal"]; // Örnek bileşenler
  const blocks = ["hero-section", "footer", "pricing-table"]; // Örnek bloklar

  const dynamicRoutes = [
    ...components.map((component) => ({
      url: `${SITE_URL}/components/${component}`,
      lastModified: new Date().toISOString(),
    })),
    ...blocks.map((block) => ({
      url: `${SITE_URL}/blocks/${block}`,
      lastModified: new Date().toISOString(),
    })),
  ];

  return [...staticRoutes, ...dynamicRoutes];
}
