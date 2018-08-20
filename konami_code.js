const codes = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
function init() {
  var index = 0;
  document.body.addEventListener('keydown',
  function onKeyDownHandler(e) {
    const key = e.key;
    if (key === codes[index]) {
      index++;
        console.log(index);
        console.log(key);
      if (index === codes.length) {
        window.alert("Konami Code Achieved");
          index = 0;
      }
    } else {
      index = 0;
    }
  });
}
  // your code here
