export default async function handler(req, res) {
  const { endpoint, ...params } = req.query;

  try {
    const url = new URL(
      `https://gnews.io/api/v4/${endpoint}`
    );

    Object.entries({
      ...params,
      apikey: process.env.GNEWS_API_KEY,
    }).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    const response = await fetch(url);

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch news",
      error: error.message,
    });
  }
}