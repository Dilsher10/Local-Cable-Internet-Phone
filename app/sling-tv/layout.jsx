import SubNav from "../components/sub-nav/SubNav";
import { slingtvNavLinks } from "../assets/data/navLinks/slingtvNavLinks";


export const metadata = {
  title: "Sling TV",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function slingTvLayout({ children }) {
  return (
    <div>
        <SubNav links={slingtvNavLinks} />
        {children}
    </div>
  );
}
