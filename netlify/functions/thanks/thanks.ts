import { schedule } from "@netlify/functions";

// To learn about scheduled functions and supported cron extensions,
// see: https://ntl.fyi/sched-func
export const handler = schedule("@daily", async (event) => {
  if (!event.body) {
    return { statusCode: 403 };
  }
  const eventBody = JSON.parse(event.body);
  console.log(`Next function run at ${eventBody.next_run}.`);

  return {
    statusCode: 200,
  };
});
