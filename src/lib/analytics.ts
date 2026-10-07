// Event names as they appear in the Vercel Analytics dashboard. Custom events
// only reach the dashboard on Vercel's Pro and Enterprise plans.
export const analyticsEvents = {
  githubClick: "GitHub click",
  telegramClick: "Telegram click",
  installCopied: "Install commands copied",
  reachedDivisions: "Reached Divisions",
};

export type Tracking = {
  event: string;
  location: string;
};
