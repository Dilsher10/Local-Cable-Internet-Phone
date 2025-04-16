import SubNav from "../components/sub-nav/SubNav";
import { hughesnetNavLinks } from "../assets/data/navLinks/hughesnetNavLinks";


export const metadata = {
  title: "HughesNet",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function hughesNetLayout({ children }) {
  return (
    <div>
        <SubNav links={hughesnetNavLinks} />
        {children}
    </div>
  );
}
