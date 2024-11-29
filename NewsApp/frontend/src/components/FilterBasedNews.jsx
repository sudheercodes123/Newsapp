import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const FilterBasedNews = () => {
  const location = useLocation();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Extract query params from the URL
  const queryParams = new URLSearchParams(location.search);
  const country = queryParams.get("country");
  const language = queryParams.get("language");
  const category = queryParams.get("category");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          "http://localhost:5000/api/news/sources",
          {
            country,
            language,
            category,
          }
        );
        setNews(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("Error fetching news");
        setLoading(false);
      }
    };

    fetchNews();
  }, [country, language, category]);

  return (
    <>
      <Header />
      <div className="p-4">
        {/* <h2 className="text-xl font-bold mb-4">Filtered News</h2> */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : news.length === 0 ? (
          <h2 className="text-3xl font-bold text-center text-red-600 mb-8 mt-16">
            News not found!
          </h2>
        ) : (
          <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">
              Filtered News
            </h2>

            <div className="space-y-6">
              {news.map((headline, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all"
                >
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">
                    {headline.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{headline.description}</p>
                  <a
                    href={headline.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 font-semibold"
                  >
                    Read more
                  </a>
                  <p className="text-sm text-gray-400 mt-2">
                    Published on:{" "}
                    {new Date(headline.publishedAt).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default FilterBasedNews;
