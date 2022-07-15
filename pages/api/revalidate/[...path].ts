import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.PAGE_REVALIDATION_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }
  const pagePath = "/" + (req.query.path as string[]).join("/");
  try {
    //Use "/home" for root path instead of "/" ("/" may appear as an empty path)
    await res.revalidate(pagePath == "/home" ? "/" : pagePath);
    return res.json({ revalidated: true, path: pagePath });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res
      .status(500)
      .send("Error revalidating the specified page: " + pagePath);
  }
}
