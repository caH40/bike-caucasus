import fs from 'fs';
import path from 'path';

import { getUrlsNews } from './news.js';
import { getUrlsResults } from './results.js';
import { getUrlsTrails } from './trails.js';

const __dirname = path.resolve();

export async function createSitemap() {
  try {
    const urlsTrails = await getUrlsTrails();
    const urlsNews = await getUrlsNews();
    const urlsResults = await getUrlsResults();
    const data = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://bike-caucasus.ru/</loc>
      <priority>0.5</priority>
      <changefreq>always</changefreq>
    </url>
    <url>
      <loc>https://bike-caucasus.ru/trails/</loc>
      <priority>1</priority>
      <changefreq>always</changefreq>
    </url>
    <url>
      <loc>https://bike-caucasus.ru/dzhilsu/</loc>
      <priority>0.9</priority>
      <changefreq>always</changefreq>
    </url>
    <url>
      <loc>https://bike-caucasus.ru/webcam/</loc>
      <priority>0.5</priority>
      <changefreq>always</changefreq>
    </url>
    ${urlsTrails}
    ${urlsNews}
    ${urlsResults}
  </urlset>	`;

    fs.writeFile(path.join(__dirname, '..', 'client', 'build', 'sitemap.xml'), data, (err) => {
      if (err) throw err;
      console.log('Sitemap.xml created', new Date().toLocaleString());
    });
  } catch (error) {
    console.log(error);
  }
}
