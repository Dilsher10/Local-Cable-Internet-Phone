import SubNav from "../components/sub-nav/SubNav";
import { netflixNavLinks } from "../assets/data/navLinks/netflixNavLinks";


export const metadata = {
  title: "Netflix",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function netflixLayout({ children }) {
  return (
    <div>
        <SubNav links={netflixNavLinks} />
        {children}
    </div>
  );
}
