import SubNav from "../components/sub-nav/SubNav";
import { peacockNavLinks } from "../assets/data/navLinks/peacockNavLinks";


export const metadata = {
  title: "Peacock",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function peacockLayout({ children }) {
  return (
    <div>
        <SubNav links={peacockNavLinks} />
        {children}
    </div>
  );
}
