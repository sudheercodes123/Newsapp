const axios = require("axios");
const News = require("../models/News");

const topHeadlinesNews = async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
    );

    const articles = data.articles.map((article) => ({
      title: article.title,
      description: article.description,
      url: article.url,
      publishedAt: article.publishedAt,
    }));

    await News.deleteMany({});
    await News.insertMany(articles);

    res.status(200).json(articles);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({ message: "Server Error: Unable to fetch news." });
  }
};

const everyNews = async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEWS_API_KEY}`
    );

    const articles = data.articles.map((article) => ({
      title: article.title,
      description: article.description,
      url: article.url,
      publishedAt: article.publishedAt,
    }));

    await News.deleteMany({});
    await News.insertMany(articles);

    res.status(200).json(articles);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({ message: "Server Error: Unable to fetch news." });
  }
};

const sourcesNews = async (req, res) => {
  const { country, language, category } = req.body;
  // console.log(req.body);

  try {
    const { data } = await axios.get(`https://newsapi.org/v2/top-headlines`, {
      params: {
        country: country || "us", // Default to 'us' if country is not provided
        language: language || "en", // Default to 'en' if language is not provided
        category,
        apiKey: process.env.NEWS_API_KEY,
      },
    });

    const newsArticles = data.articles.map((source) => ({
      id: source.id,
      name: source.name,
      description: source.description,
      url: source.url,
      category: source.category,
      language: source.language,
      country: source.country,
    }));

    res.status(200).json(newsArticles);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({ message: "Server Error: Unable to fetch news." });
  }
};

module.exports = { topHeadlinesNews, everyNews, sourcesNews };
