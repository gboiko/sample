import type { NextApiRequest, NextApiResponse } from "next";
import collegeScoreCard from "../../services/collegeScoreCard";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { response, code } = await collegeScoreCard(
    req.query.collegeName as string,
    Number(req.query.page)
  );

  res.status(code).json(response);
}
