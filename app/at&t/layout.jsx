import SubNav from "../components/sub-nav/SubNav";
import { atandtNavLinks } from "../assets/data/navLinks/at&tNavLinks";



export const metadata = {
  title: "AT&T",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function atntLayout({ children }) {
  return (
    <div>
        <SubNav links={atandtNavLinks} />
        {children}
    </div>
  );
}
