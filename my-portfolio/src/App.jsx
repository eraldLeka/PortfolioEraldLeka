import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
