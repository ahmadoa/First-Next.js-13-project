import "./global.css";
import Welcome from "../components/welcome";

/**
 * @returns homepage with a welcome lottie animation
 */

export default function Home() {
  return (
    <div className="w-full h-full">
      <Welcome />
    </div>
  );
}
