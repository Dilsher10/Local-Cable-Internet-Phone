import SubNav from "../components/sub-nav/SubNav";
import { sparklightNavLinks } from "../assets/data/navLinks/sparklightNavLinks";


export const metadata = {
  title: "SparkLight",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function sparkLightLayout({ children }) {
  return (
    <div>
        <SubNav links={sparklightNavLinks} />
        {children}
    </div>
  );
}
