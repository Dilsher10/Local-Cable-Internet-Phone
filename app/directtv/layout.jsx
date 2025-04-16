import SubNav from "../components/sub-nav/SubNav";
import { directtvNavLinks } from "../assets/data/navLinks/directtvNavLinks";

export const metadata = {
  title: "Direct TV",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function spectrumLayout({ children }) {
  return (
    <div>
        <SubNav links={directtvNavLinks} />
        {children}
    </div>
  );
}
