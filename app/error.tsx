"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: Props) {
  console.log("Error", error);
  return (
    <div>
      <div>An unexpected Error has occured</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </div>
  );
}
