import React from "react";
import { ComputersCanvas } from "../components";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="w-full h-[100dvh] flex p-5 items-center justify-center flex-col">
      <div className="absolute top-[50%] bottom-0 z-10 select-none flex flex-col gap-5">
        {" "}
        <h1 className="text-2xl font-bold">Page Not Found</h1>
        <Link href={"/"} className="font-bold bg-red-500 px-5 py-2 text-center">
          Go Home
        </Link>
      </div>

      <ComputersCanvas />
    </div>
  );
};

export default NotFoundPage;
