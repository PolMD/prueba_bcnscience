const allPaths = [];
const json = $.getJSON("./paths.json", function (data) {
  $.each(data, function (key, value) {
    let pathItem = {
      path: key,
      swipe: value,
    };
    allPaths.push(pathItem);
  });
});

const changeScreen = () => {
  const path = window.location.pathname;
  const screen = new Hammer(document.querySelector("body"));
  screen.on("swiperight swipeleft", (ev) => {
    let currentPath = allPaths.filter((el) => el.path == path)[0].swipe;
    let nextPath = "";
    if (ev.direction === 2) {
      nextPath = currentPath.left;
    } else {
      nextPath = currentPath.right;
    }
    if (nextPath) window.location.replace(nextPath);
  });
};
