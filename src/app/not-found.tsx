import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="error">
      <Image
        alt={"Not found"}
        src={"/assets/404.svg"}
        width={500}
        height={500}
      />
      <Link href={"/"}>Return Home</Link>
    </div>
  );
};

export default NotFound;
