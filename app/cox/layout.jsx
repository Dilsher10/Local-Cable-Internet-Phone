import SubNav from "../components/sub-nav/SubNav";
import { coxNavLinks } from "../assets/data/navLinks/coxNavLinks";


export const metadata = {
  title: "COX",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function spectrumLayout({ children }) {
  return (
    <div>
        <SubNav links={coxNavLinks} />
        {children}
    </div>
  );
}
