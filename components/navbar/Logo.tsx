import Link from "next/link";
import { Button } from "../ui/button";
import { VscCode } from "react-icons/vsc";

const Logo = () => {
  return (
    <>
      <nav>
        <span className="text-4xl mr-2 text-primary">Comfy</span>
        <Button size="icon" asChild>
          <Link href="/">
            <VscCode className="w-6 h-6" />
          </Link>
        </Button>
      </nav>
    </>
  );
};

export default Logo;
