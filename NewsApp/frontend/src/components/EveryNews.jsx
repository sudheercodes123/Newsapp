
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
const EveryNews = () => {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch news headlines on component mount
  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/news/every"
        );
        if (response.data && response.data.length > 0) {
          setHeadlines(response.data);
        } else {
          setHeadlines([]);
        }
      } catch (error) {
        console.log(error);
        setError("Error fetching the news.");
      } finally {
        setLoading(false);
      }
    };

    fetchHeadlines();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-12 text-blue-500 font-semibold text-xl">
        Loading latest news...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-12 text-red-500 font-semibold text-xl">
        {error}
      </div>
    );
  }

  if (headlines.length === 0) {
    return (
      <div className="text-center mt-12 text-gray-500 font-semibold text-xl">
        No news available at the moment.
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">
          Every News
        </h2>

        <div className="space-y-6">
          {headlines.map((headline, index) => (
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
                Published on: {new Date(headline.publishedAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EveryNews;
