"use client";
import Lottie from "lottie-react";
import load from "../../public/load.json";

/**
 * @returns: loading componenet which we can't put directly in loading.js
 * because package is not using the 'use client by default'
 * since nextjs13 is still new
 */

export default function Load() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Lottie animationData={load} loop={true} style={{ width: "30%" }} />
    </div>
  );
}
