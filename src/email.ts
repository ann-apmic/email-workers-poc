import * as PostalMime from "postal-mime";

const email: EmailExportedHandler<Env> = async (message, env, ctx) => {
  const parser = new PostalMime.default();
  const rawEmail = new Response(message.raw);
  const email = await parser.parse(await rawEmail.arrayBuffer());
  console.log(email);
}

export { email };