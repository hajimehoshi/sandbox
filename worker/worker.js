let now = Date.now();
for (;;) {
  const newNow = Date.now();
  if (newNow - now >= 1000) {
    postMessage(newNow);
    now = newNow;
  }
}
