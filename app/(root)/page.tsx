import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const SetupPage = () => {
  return (
    <main className="">
      <UserButton afterSignOutUrl="/" />
    </main>
  );
};

export default SetupPage;
