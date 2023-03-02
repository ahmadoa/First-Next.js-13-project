"use client";
import Lottie from "lottie-react";
import welcome from "../public/welcome.json";

export default function Welcome() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Lottie
        animationData={welcome}
        loop={true}
        style={{ width: "55%" }}
        className="mt-14"
      />
    </div>
  );
}
