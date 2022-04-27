/* eslint-disable import/no-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const prefectureAPI = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const data = await fetch(
    "https://opendata.resas-portal.go.jp/api/v1/prefectures",
    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
      // headers: { "X-API-KEY": "mqlWivzg7zOd9P2WnerDGpnk16rSBVsJ5p7IaZqQ" }
    }
  );
  const response = await data.json();
  return res.status(200).json(response);
};

export default prefectureAPI;
