import SubNav from "../components/sub-nav/SubNav";
import { huluNavLinks } from "../assets/data/navLinks/huluNavLinks";


export const metadata = {
  title: "Hulu",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function huluLayout({ children }) {
  return (
    <div>
        <SubNav links={huluNavLinks} />
        {children}
    </div>
  );
}
