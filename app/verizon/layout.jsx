import SubNav from "../components/sub-nav/SubNav";
import { verizonNavLinks } from "../assets/data/navLinks/verizonNavLinks";

export const metadata = {
  title: "Verizon",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function verizonLayout({ children }) {
  return (
    <div>
        <SubNav links={verizonNavLinks} />
        {children}
    </div>
  );
}
