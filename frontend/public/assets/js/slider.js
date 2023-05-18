// new arrival product section
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
let defaultTransform = 0;
function goNext() {
  defaultTransform = defaultTransform - 398;
  var slider = document.getElementById("slider");
  if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7)
    defaultTransform = 0;
  slider.style.transform = "translateX(" + defaultTransform + "px)";
}
next.addEventListener("click", goNext);
function goPrev() {
  var slider = document.getElementById("slider");
  if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
  else defaultTransform = defaultTransform + 398;
  slider.style.transform = "translateX(" + defaultTransform + "px)";
}
prev.addEventListener("click", goPrev);

// tranding product slider
const nextTranding = document.querySelector("#nextTranding");
const prevTranding = document.querySelector("#prevTranding");
let defaultTransformTranding = 0;
function goNextTranding() {
  defaultTransformTranding = defaultTransformTranding - 398;
  var slider = document.getElementById("trendingProductsSlider");
  if (
    Math.abs(defaultTransformTranding) >=
    trendingProductsSlider.scrollWidth / 1.7
  )
    defaultTransformTranding = 0;
  slider.style.transform = "translateX(" + defaultTransformTranding + "px)";
}
nextTranding.addEventListener("click", goNextTranding);
function goPrevTranding() {
  var slider = document.getElementById("trendingProductsSlider");
  if (Math.abs(defaultTransformTranding) === 0) defaultTransformTranding = 0;
  else defaultTransformTranding = defaultTransformTranding + 398;
  slider.style.transform = "translateX(" + defaultTransformTranding + "px)";
}
prevTranding.addEventListener("click", goPrevTranding);
2