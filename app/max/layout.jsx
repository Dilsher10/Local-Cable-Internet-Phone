import SubNav from "../components/sub-nav/SubNav";
import { maxNavLinks } from "../assets/data/navLinks/maxNavLinks";


export const metadata = {
  title: "Max",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function maxLayout({ children }) {
  return (
    <div>
        <SubNav links={maxNavLinks} />
        {children}
    </div>
  );
}
