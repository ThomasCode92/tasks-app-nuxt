export default defineEventHandler(async () => {
  // wait for 2 seconds
  await new Promise(resolve => setTimeout(resolve, 2000));

  return [
    { id: 1, title: "Learn Vue", done: true },
    { id: 2, title: "Learn Nuxt", done: false },
  ];
});
