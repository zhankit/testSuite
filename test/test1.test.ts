import largestDifferences from "../src/largestDifferences";


test("Scenarios 1 - empty case", () => {
  const actual = largestDifferences([]);
  expect(actual).toBe(0);
});

test("Scenarios 2 - only 1 positive number ", () => {
    const actual = largestDifferences([1]);
    expect(actual).toBe(0);
});

test("Scenarios 3 - only 1 negative number ", () => {
    const actual = largestDifferences([-230]);
    expect(actual).toBe(0);
});

test("Scenarios 4 - 2 positive number", () => {
    const actual = largestDifferences([1, 2]);
    expect(actual).toBe(1);
});

test("Scenarios 5 - 2 positive number", () => {
    const actual = largestDifferences([5, 2]);
    expect(actual).toBe(3);
});

test("Scenarios 6 - all number are the same", () => {
    const actual = largestDifferences([3, 3, 3]);
    expect(actual).toBe(0);
});

test("Scenarios 7 - mixed of numbers", () => {
    const actual = largestDifferences([-3, 0 ,5]);
    expect(actual).toBe(8);
});

test("Scenarios 8 - mixed of numbers", () => {
    const actual = largestDifferences([5, 0, -3]);
    expect(actual).toBe(8);
});

test("Scenarios 9 - mixed of numbers", () => {
    const actual = largestDifferences([1, 2, 3, 5, 7, 8, 78, -200000 , 900000]);
    expect(actual).toBe(1100000);
});

test("Scenarios 10 - mixed of numbers", () => {
    const actual = largestDifferences([23953342, -2123 , 32123, -631212, -631213, 78123123, -1231231 , 900000]);
    expect(actual).toBe(79354354);
});

test("Scenarios 11 - mixed of numbers", () => {
    const actual = largestDifferences([-5340000 , 900000, -9223372036854775802, 30000112312531232, 784345, -200000 , 900000 , 
        23953342, -2123 , 32123, -631212, -631213, 78123123, -1231231 , 900000, -5340000 , 900000, -9223372036854775802, 3000011231221232, 
        784345, -200000 , 900000 ,-5340000 , 900000, -92233720363775802, 3000011231252232, 784345, -200000 , 900000]);
    expect(actual).toBe(9253372149167307000);
});
