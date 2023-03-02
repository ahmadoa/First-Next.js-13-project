import Loading from "../../../components/issues/load";

/**
 * @returns: a page containing a lottie loading animation
 * to load before data loads
 */

function IssuesLoading() {
  return (
    <div className="h-full w-full border-2 bg-zinc-200 rounded-xl p-5 flex justify-center items-center">
      <Loading />
    </div>
  );
}

export default IssuesLoading;
