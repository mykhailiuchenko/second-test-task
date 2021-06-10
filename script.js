const handleActiveTab = (tabs, event, className) => {
  tabs.forEach((tab) => {
    tab.classList.remove(className);
  });

  if (!event.target.classList.contains(className)) {
    event.target.classList.add(className);
  }
};

const leftSideWrapper = document.querySelector(".left-side-wrapper");
const leftSideButtons = document.querySelectorAll(".left-side-button");

leftSideWrapper.addEventListener("click", (event) => {
  const root = document.documentElement;
  const targetTranslateValue = event.target.dataset.translateValue;

  if (event.target.classList.contains("left-side-button")) {
    root.style.setProperty("--left-side-slider", targetTranslateValue);
    handleActiveTab(leftSideButtons, event, "left-side-button_active");
  }
});