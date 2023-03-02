"use client";
import Lottie from "lottie-react";
import empty from "../../public/empty.json";

/**
 *
 * @returns component containing an empty lottie animation
 */

export default function Empty() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Lottie
        animationData={empty}
        loop={true}
        style={{ width: "45%" }}
        className="mt-14"
      />
      <div className="text-zinc-500 font-bold -mt-20">
        Please select one of the issues displayed aside!
      </div>
    </div>
  );
}
