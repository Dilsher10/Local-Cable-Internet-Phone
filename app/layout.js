import "./globals.scss";
import { Lato } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/newsletter/Newsletter";

const lato = Lato({ 
  weight: ["100","300","400","700","900"],   
  display: "swap",
  subsets: ["latin"]
 });

export const metadata = {
  title: "Explore High speed and Reliable TV, Internet, and Streaming Services | LocalCableInternetPhone",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={lato.className}>
        <Header/>
        {children}
        <Newsletter />
        <Footer/>
      </body>
    </html>
  );
}
