export default defineEventHandler(async event => {
  // wait for 2 seconds
  await new Promise(resolve => setTimeout(resolve, 2000));

  const error = createError({ statusCode: 500, statusMessage: "Oh no!" });
  return sendError(event, error);

  return [
    { id: 1, title: "Learn Vue", done: true },
    { id: 2, title: "Learn Nuxt", done: false },
  ];
});
