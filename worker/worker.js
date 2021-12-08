let now = Date.now();
for (;;) {
  const newNow = Date.now();
  if (newNow - now >= 1000) {
    console.log(newNow);
    now = newNow;
  }
}
