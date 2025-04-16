import SubNav from "../components/sub-nav/SubNav";
import { tmobileNavLinks } from "../assets/data/navLinks/tmobileNavLinks";

export const metadata = {
  title: "T-Mobile",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function tMobileLayout({ children }) {
  return (
    <div>
        <SubNav links={tmobileNavLinks} />
        {children}
    </div>
  );
}
