"use client";
import Error404 from "../../../components/issues/error404";

/**
 * This error page would wrap the current page and the sub pages if there's any
 * @error : contains error message (error.message)
 * @returns : a page with a lottie error animation
 */

function IssueErrorPage({ error }) {
  return (
    <div className="h-full w-full border-2 bg-zinc-200 rounded-xl p-5 flex justify-center items-center">
      <Error404 />
    </div>
  );
}

export default IssueErrorPage;
