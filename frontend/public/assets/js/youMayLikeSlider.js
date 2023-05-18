

// YouMayLike product slider
const nextYouMayLike = document.querySelector("#nextYouMayLike");
const prevYouMayLike = document.querySelector("#prevYouMayLike");
let defaultTransformYouMayLike = 0;
function goNextYouMayLike() {
  defaultTransformYouMayLike = defaultTransformYouMayLike - 398;
  var slider = document.getElementById("trendingProductsSlider");
  if (
    Math.abs(defaultTransformYouMayLike) >=
    trendingProductsSlider.scrollWidth / 1.7
  )
    defaultTransformYouMayLike = 0;
  slider.style.transform = "translateX(" + defaultTransformYouMayLike + "px)";
}
nextYouMayLike.addEventListener("click", goNextYouMayLike);
function goPrevYouMayLike() {
  var slider = document.getElementById("trendingProductsSlider");
  if (Math.abs(defaultTransformYouMayLike) === 0) defaultTransformYouMayLike = 0;
  else defaultTransformYouMayLike = defaultTransformYouMayLike + 398;
  slider.style.transform = "translateX(" + defaultTransformYouMayLike + "px)";
}
prevYouMayLike.addEventListener("click", goPrevYouMayLike);
2