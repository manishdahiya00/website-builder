import Image from "next/image";
import { Button } from "../ui/button";

function Header() {
  return (
    <div className="w-full mx-auto p-5 flex items-center justify-between border-b-2">
      <Image src={"./next.svg"} alt="Logo" width={100} height={100} />
      <Button>Get Started</Button>
    </div>
  );
}

export default Header;
