import SubNav from "../components/sub-nav/SubNav";
import { youtubetvNavLinks } from "../assets/data/navLinks/youtubetvNavLinks";

export const metadata = {
  title: "YouTube TV",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function youtubetvLayout({ children }) {
  return (
    <div>
        <SubNav links={youtubetvNavLinks} />
        {children}
    </div>
  );
}
