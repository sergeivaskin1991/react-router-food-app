import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { PageNotFound } from "./pages/PageNotFound";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";


function App() {
  return (
    <>
      <Router basename='/react-router-food-app'>
        <Header />
        <main className="container content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contacts/" element={<Contact />} />
            <Route path="about/" element={<About />} />
            <Route path="category/:name" element={<Category />} />
            <Route path="meal/:id" element={<Recipe />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
