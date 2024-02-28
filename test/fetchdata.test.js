const fetchData = require("../fetchDataJson");

test("fetchData returns the correct data", () => {
    return expect(fetchData()).resolves.toBe(
      JSON.stringify({
        name: "Jean Nunez",
        age: 46,
        email: "jeancarlosn2008@gmail.com",
      })
    );
  });