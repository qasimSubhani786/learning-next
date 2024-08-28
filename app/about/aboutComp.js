"use client";
import io from "socket.io-client";
import React, { useEffect, useState } from "react";

const AboutComp = () => {
  const [buttonCount, setButtonCount] = useState("Send Event.");

  const socket = io("http://localhost:3000");
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id);
    });

    socket.on("message", (data, routeName) => {
      console.log("Data in Client", data);
      setButtonCount("Received Response From Server: " + data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <button
      onClick={() => {
        socket.emit("myEvent", "Hello Server");
      }}
      className="btn btn-primary"
    >
      {buttonCount}
    </button>
  );
};

export default AboutComp;
