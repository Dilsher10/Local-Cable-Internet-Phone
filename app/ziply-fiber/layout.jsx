import SubNav from "../components/sub-nav/SubNav";
import { ziplyfiberNavLinks } from "../assets/data/navLinks/ziplyfiberNavLinks";

export const metadata = {
  title: "Ziply Fiber",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function ziplyfiberLayout({ children }) {
  return (
    <div>
        <SubNav links={ziplyfiberNavLinks} />
        {children}
    </div>
  );
}
