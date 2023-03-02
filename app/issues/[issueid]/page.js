import { PrismaClient } from "@prisma/client";
import IssueDetails from "./IssueDetails";

/**
 *
 * @param {params.issueid}: the id of the issue passed through the url params
 * @returns: IssueDetails component of the issue of id issueid
 */

async function IssueDetailsPage({ params }) {
  const prisma = new PrismaClient();
  const issue = await prisma.issue.findFirst({
    where: { id: +params.issueid },
  });
  return <IssueDetails issue={issue} />;
}

export default IssueDetailsPage;
