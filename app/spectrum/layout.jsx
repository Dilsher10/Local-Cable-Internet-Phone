import SubNav from "../components/sub-nav/SubNav";
import { spectrumNavLinks } from "../assets/data/navLinks/spectrumNavLinks";

export const metadata = {
  title: "Spectrum",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function spectrumLayout({ children }) {
  return (
    <div>
        <SubNav links={spectrumNavLinks} />
        {children}
    </div>
  );
}
