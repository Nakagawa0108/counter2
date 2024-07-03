(() => {
  const $counter = document.getElementById("js-counter");

  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent);
    if ($targetButton.textContent === "+") {
      $counter.textContent = currentCount + 1;
    } else {
      $counter.textContent = currentCount - 1;
    }
  };

  // const clickHandler = (e) => console.log(e.currentTarget);

  for (
    let index = 0;
    index < document.getElementsByClassName("js-button").length;
    index++
  ) {
    document
      .getElementsByClassName("js-button")
      [index].addEventListener("click", (e) => clickHandler(e));
  }
})();

// const $button = document.getElementsByClassName("js-button");
// console.log($button);
