const promise = new Promise((resolve) => {
  setInterval(resolve(console.log("nice")), 500);
});
