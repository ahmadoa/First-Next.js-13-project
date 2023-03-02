import Link from "next/link";

/**
 * @param {issues}: retrieved issues from db
 * @returns: a component for each issue (a list)
 */

function IssuesList({ issues }) {
  return (
    <ul className="w-full h-full">
      <h1 className="mb-3 text-xl font-bold">Issues</h1>
      {issues.map((issue) => (
        <li
          key={issue.id}
          className="p-3 bg-indigo-400 mb-3 rounded-xl text-white"
        >
          <article>
            <span className="text-zinc-900 text-sm bg-white px-2 py-1 font-bold rounded-full">
              {issue.title}
            </span>
            <p className="text-base mt-2">{issue.summary}</p>
            <p className="bg-black text-base text-white py-1 rounded-full mt-3 flex items-center justify-center transition-all hover:scale-[103%] ease-in-out duration-500">
              <Link href={`/issues/${issue.id}`}>View Details</Link>
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default IssuesList;
