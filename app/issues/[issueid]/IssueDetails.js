/**
 * @param {issue}: the issue data we retrieved from prisma db
 * @returns: a component containing selected issue's details
 */

function IssueDetails({ issue }) {
  return (
    <div className="h-full w-full border-2 bg-zinc-200 rounded-xl p-5">
      <h2 className="flex justify-center text-xl font-bold text-red-600 underline mb-4">
        Issue Details
      </h2>
      <div>
        <span className="text-zinc-900 text-base bg-white px-2 py-1 font-bold rounded-full">
          {issue.title}
        </span>
        <p className="text-sm mt-1">{issue.summary}</p>
        <p className="mt-3 text-base">{issue.description}</p>
      </div>
    </div>
  );
}

export default IssueDetails;
