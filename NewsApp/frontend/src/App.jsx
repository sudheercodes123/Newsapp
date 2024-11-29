import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import TopHeadlines from "./components/TopHeadlines";
import EveryNews from "./components/EveryNews";
import FilterBasedNews from "./components/FilterBasedNews";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-headlines" element={<TopHeadlines />} />
        <Route path="/everything" element={<EveryNews />} />
        <Route path="/filtered-news" element={<FilterBasedNews />} />
        
      </Routes>
    </Router>
  );
}
