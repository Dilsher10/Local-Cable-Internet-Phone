import SubNav from "../components/sub-nav/SubNav";
import { disneyNavLinks } from "../assets/data/navLinks/disneyNavLinks";


export const metadata = {
  title: "Disney",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function disneyLayout({ children }) {
  return (
    <div>
        <SubNav links={disneyNavLinks} />
        {children}
    </div>
  );
}
