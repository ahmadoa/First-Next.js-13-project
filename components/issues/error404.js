"use client";
import Lottie from "lottie-react";
import error from "../../public/error404.json";

/**
 * @returns: error componenet which we can't put directly in error.js
 * because package is not using the 'use client by default'
 * since nextjs13 is still new
 */

export default function Error404() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Lottie animationData={error} loop={true} style={{ width: "60%" }} />
    </div>
  );
}
