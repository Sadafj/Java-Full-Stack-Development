// fakeApi.js
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Hello from Suspense API!" });
    }, 2000);
  });
}

const resource = {
  data: fetchData().then((res) => res),
};

export function getData() {
  let status = "pending";
  let result;
  let suspender = resource.data.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      return result;
    },
  };
}
