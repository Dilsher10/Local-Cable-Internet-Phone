import SubNav from "../components/sub-nav/SubNav";
import { philoNavLinks } from "../assets/data/navLinks/philoNavLinks";


export const metadata = {
  title: "Philo",
  description: "Discover high speed internet, TV, and streaming options in your area with LocalCableInternetPhone. Find the best providers nearby, compare deals, and simplify your entertainment experience.",
};

export default function philoLayout({ children }) {
  return (
    <div>
        <SubNav links={philoNavLinks} />
        {children}
    </div>
  );
}
