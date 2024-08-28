import Link from "next/link";
import React from "react";

function F1() {
  return (
    <>
      <h1>F1 Page </h1>
      <Link href={"/f1/f2"}>
        <div>Move to F2</div>
      </Link>
    </>
  );
}

export default F1;
