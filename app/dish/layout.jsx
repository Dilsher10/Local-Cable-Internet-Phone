import SubNav from "../components/sub-nav/SubNav";
import { dishNavLinks } from "../assets/data/navLinks/dishNavLinks";


export const metadata = {
  title: "Dish",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function spectrumLayout({ children }) {
  return (
    <div>
        <SubNav links={dishNavLinks} />
        {children}
    </div>
  );
}
