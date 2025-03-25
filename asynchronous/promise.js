// Building a Simple promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lotter draw is happening");

  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You WIN");
    } else {
      reject(new Error("You lost your money"));
    }
  }, 2000);
});


// Consuming Promises 
lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));


// Promisifying SetTimeOut

