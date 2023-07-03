import { Result } from '../../Model/Result.js';

export async function getUrlsResults() {
  try {
    const resultsDB = await Result.find({}, { eventId: true });
    const uniqueResultId = new Set();
    resultsDB.forEach((result) => uniqueResultId.add(result.eventId.toString()));
    const uniqueResultIdArr = Array.from(uniqueResultId);
    console.log(uniqueResultIdArr);
    const urlsResults = uniqueResultIdArr.map((result) => {
      return `
    <url>
      <loc>https://bike-caucasus.ru/dzhilsu/results/${result}</loc>
      <priority>0.7</priority>
      <changefreq>always</changefreq>
    </url>`;
    });

    return urlsResults.join('');
  } catch (error) {
    console.log(error);
  }
}
