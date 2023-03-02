import IssuesList from "./IssueList";
import { PrismaClient } from "@prisma/client";

/**
 * retrieve all issues from db and pass them to the IssuesList component
 * @param {children}: children represent other pages or layouts
 * @returns: a list of the issues and the children
 */

async function IssuesLayout({ children }) {
  const prisma = new PrismaClient();
  const issues = await prisma.issue.findMany();

  return (
    <div className="w-full h-full flex flex-row">
      <aside className="w-[30%] h-full p-3">
        <IssuesList issues={issues} />
      </aside>
      <div className="w-[70%] h-full p-3">{children}</div>
    </div>
  );
}
export default IssuesLayout;
