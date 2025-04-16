import SubNav from "../components/sub-nav/SubNav";
import { fuboNavLinks } from "../assets/data/navLinks/fuboNavLinks";


export const metadata = {
  title: "HughesNet",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function fuboLayout({ children }) {
  return (
    <div>
        <SubNav links={fuboNavLinks} />
        {children}
    </div>
  );
}
