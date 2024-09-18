import sum from "../components/sum";

test("sum of two no.", () => {
  const res = sum(4, 9);
  expect(res).toBe(13);
});
