import SubNav from "../components/sub-nav/SubNav";
import { xfinityNavLinks } from "../assets/data/navLinks/xfinityNavLinks";

export const metadata = {
  title: "Xfinity",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function xfinityLayout({ children }) {
  return (
    <div>
        <SubNav links={xfinityNavLinks} />
        {children}
    </div>
  );
}
