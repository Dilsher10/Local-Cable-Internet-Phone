import SubNav from "../components/sub-nav/SubNav";
import { visatNavLinks } from "../assets/data/navLinks/visatNavLinks";

export const metadata = {
  title: "Viasat",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function viasatLayout({ children }) {
  return (
    <div>
        <SubNav links={visatNavLinks} />
        {children}
    </div>
  );
}
