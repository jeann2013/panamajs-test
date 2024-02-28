function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(JSON.stringify({
          name: "Jean Nunez",
          age: 46,
          email: "jeancarlosn2008@gmail.com",
        }));
      }, 1000);
    });
  }

  module.exports = fetchData;