const delay = () => new Promise((resolve) => setTimeout(resolve, 3_000));
export default async function* longRunning(
  _props: unknown,
): AsyncIterableIterator<string> {
  await delay();

  yield "Hello community call 1/3";

  await delay();

  yield "This is a long running step 2/3";

  await delay();

  yield "This is a step by step workflow 3/3";
}
