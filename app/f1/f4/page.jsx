import Link from "next/link";
import React from "react";

function F4() {
  return (
    <>
      <div> F4 Page </div>

      <Link href={"/f1/f3"}>
        <div>Move to F3</div>
      </Link>
    </>
  );
}

export default F4;
