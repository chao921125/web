function dy_args() {
  const args = arguments;
  if (!args.length) {
    console.log("no arg");
    return;
  }
  for (let o of args) {
    console.log(o);
  }
}

dy_args({a: 1, b: 2});
dy_args({a: 1, b: 2}, {c: 3, d: 4});
