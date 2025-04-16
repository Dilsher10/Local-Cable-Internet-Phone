import SubNav from "../components/sub-nav/SubNav";
import { optimumNavLinks } from "../assets/data/navLinks/optimumNavLinks";


export const metadata = {
  title: "Optimum",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function spectrumLayout({ children }) {
  return (
    <div>
        <SubNav links={optimumNavLinks} />
        {children}
    </div>
  );
}
