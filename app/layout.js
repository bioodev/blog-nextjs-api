import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../styles/globals.css"
export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <head />
      <body>
        <header>
          <Navbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
