import SubNav from "../components/sub-nav/SubNav";
import { paramountNavLinks } from "../assets/data/navLinks/paramountNavLinks";


export const metadata = {
  title: "Paramount",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function paramountLayout({ children }) {
  return (
    <div>
        <SubNav links={paramountNavLinks} />
        {children}
    </div>
  );
}
