let i = 0;
let now = Date.now();
for (;;) {
  const newNow = Date.now();
  if (newNow - now >= 1000) {
    postMessage(i);
    i++;
    now = newNow;
  }
}
