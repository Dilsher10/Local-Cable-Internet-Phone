import SubNav from "../components/sub-nav/SubNav";
import { googlefiberinternetNavLinks } from "../assets/data/navLinks/googlefiberinternetNavLinks";


export const metadata = {
  title: "Google Fiber Internet",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function googleFiberInternetLayout({ children }) {
  return (
    <div>
        <SubNav links={googlefiberinternetNavLinks} />
        {children}
    </div>
  );
}
