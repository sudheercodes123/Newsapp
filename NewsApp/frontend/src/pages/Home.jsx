import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(null);

  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];
  const languages = [
    "en",
    "es",
    "fr",
    "de",
    "ru",
    "zh",
    "ar",
    "he",
    "it",
    "nl",
    "no",
    "pt",
    "sv",
    "ud",
  ];
  const countries = [
    "ae",
    "ar",
    "at",
    "au",
    "be",
    "bg",
    "br",
    "ca",
    "ch",
    "cn",
    "co",
    "cu",
    "cz",
    "de",
    "eg",
    "fr",
    "gb",
    "gr",
    "hk",
    "hu",
    "id",
    "ie",
    "il",
    "in",
    "it",
    "jp",
    "kr",
    "lt",
    "lv",
    "ma",
    "mx",
    "my",
    "ng",
    "nl",
    "no",
    "nz",
    "ph",
    "pl",
    "pt",
    "ro",
    "rs",
    "ru",
    "sa",
    "se",
    "sg",
    "si",
    "sk",
    "th",
    "tr",
    "tw",
    "ua",
    "us",
    "ve",
    "za",
  ];

  const handleNavigate = (type, value) => {
    if (type === "category") {
      navigate(`/filtered-news?category=${value}`);
    } else if (type === "language") {
      navigate(`/filtered-news?language=${value}`);
    } else if (type === "country") {
      navigate(`/filtered-news?country=${value}`);
    }
    setDropdown(null); // Close dropdown after selection
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-6 mb-24">
        {/* App Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-blue-600">
            Welcome to NewsApp
          </h1>
          <p className="text-lg mt-4">
            Stay informed with the latest news from around the world. Explore
            top headlines, browse everything, or dive into news by category.
          </p>
        </header>

        {/* News Sections */}
        <div className="w-full max-w-md space-y-8">
          {/* Top Headlines */}
          <section className="p-6 bg-white rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">
              Top Headlines
            </h2>
            <p className="text-gray-600 mb-4">
              Get the latest and most popular news headlines from trusted
              sources.
            </p>
            <button
              onClick={() => navigate("/top-headlines")}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              View Top Headlines
            </button>
          </section>

          {/* Every News */}
          <section className="p-6 bg-white rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4 text-green-500">
              Every News
            </h2>
            <p className="text-gray-600 mb-4">
              Browse through a comprehensive list of news articles on various
              topics.
            </p>
            <button
              onClick={() => navigate("/everything")}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              View All News
            </button>
          </section>

          {/* News by Category Section */}
          <section className="p-6 bg-white rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4 text-purple-500">
              News by Category
            </h2>
            <p className="text-gray-600 mb-4">
              Explore news articles sorted by specific Category, Language, or
              Country.
            </p>

            {/* Button and Dropdowns */}
            <div className="flex flex-col items-center space-y-4">
              {/* Category Button */}
              <div className="relative inline-block text-left">
                <button
                  onClick={() =>
                    setDropdown(dropdown === "category" ? null : "category")
                  }
                  className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
                >
                  Browse by Category
                </button>
                {dropdown === "category" && (
                  <div className="absolute left-full ml-2 mt-0 w-48 bg-white border border-gray-300 rounded shadow-lg">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleNavigate("category", category)}
                        className="block w-full text-left px-4 py-2 hover:bg-purple-100"
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Language Button */}
              <div className="relative inline-block text-left">
                <button
                  onClick={() =>
                    setDropdown(dropdown === "language" ? null : "language")
                  }
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Browse by Language
                </button>
                {dropdown === "language" && (
                  <div className="absolute left-full ml-2 mt-0 w-48 bg-white border border-gray-300 rounded shadow-lg">
                    {languages.map((language) => (
                      <button
                        key={language}
                        onClick={() => handleNavigate("language", language)}
                        className="block w-full text-left px-4 py-2 hover:bg-blue-100"
                      >
                        {language.toUpperCase()}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Country Button */}
              <div className="relative inline-block text-left">
                <button
                  onClick={() =>
                    setDropdown(dropdown === "country" ? null : "country")
                  }
                  className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                  Browse by Country
                </button>
                {dropdown === "country" && (
                  <div className="absolute left-full ml-2 mt-0 w-48 bg-white border border-gray-300 rounded shadow-lg">
                    {countries.map((country) => (
                      <button
                        key={country}
                        onClick={() => handleNavigate("country", country)}
                        className="block w-full text-left px-4 py-2 hover:bg-green-100"
                      >
                        {country.toUpperCase()}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
