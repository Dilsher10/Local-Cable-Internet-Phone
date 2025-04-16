import SubNav from "../components/sub-nav/SubNav";
import { centurylinkNavLinks } from "../assets/data/navLinks/centurylinkNavLinks";

export const metadata = {
  title: "CenturyLink",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function centuryLinkLayout({ children }) {
  return (
    <div>
        <SubNav links={centurylinkNavLinks} />
        {children}
    </div>
  );
}
