import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Valid email required." }, { status: 400 });
  }

  // TODO: integrate with your email provider, e.g.:
  // await mailchimp.lists.addListMember(MAILCHIMP_LIST_ID, { email_address: email, status: "subscribed" });
  // await convertKit.subscribeToForm(FORM_ID, { email });

  console.log(`Newsletter signup: ${email}`);

  return Response.json({ success: true });
}
