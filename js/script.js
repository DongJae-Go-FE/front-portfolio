const optionsArray = [
  { threshold: 0.3, targetId: "target1" },
  { threshold: 1, targetId: "target2" },
  { threshold: 0.2, targetId: "target3" },
  { threshold: 0.9, targetId: "target4" },
  { threshold: 0.2, targetId: "section06" },
  { threshold: 0.5, targetId: "target5" },
];

const createObserver = (options) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const container = entry.target;
        if (entry.isIntersecting) {
          container.classList.add("on");
        } else {
          container.classList.remove("on");
        }
      });
    },
    { root: null, rootMargin: "-0px", threshold: options.threshold }
  );

  const target = document.getElementById(options.targetId);
  if (target) {
    observer.observe(target);
  }
};

optionsArray.forEach(createObserver);

let startOne, endOne;
let startTwo, endTwo;
let startThree, endThree;
let startFour, endFour;
let startFive, endFive;
let startSix, endSix;
let startSeven, endSeven;

const calculateBounds = () => {
  const documentHeight = document.documentElement.scrollHeight;
  startOne = documentHeight * 0.65;
  endOne = documentHeight * 0.67;
  startTwo = documentHeight * 0.67;
  endTwo = documentHeight * 0.69;
  startThree = documentHeight * 0.71;
  endThree = documentHeight * 0.73;
  startFour = documentHeight * 0.75;
  endFour = documentHeight * 0.76;
  startFive = documentHeight * 0.77;
  endFive = documentHeight * 0.78;
  startSix = documentHeight * 0.79;
  endSix = documentHeight * 0.80;
};

let isScrolling = false;

const handleScroll = () => {
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const sec03LiOne = document.querySelectorAll(
        "#section05 .content-box li"
      )[0];
      const sec03LiTwo = document.querySelectorAll(
        "#section05 .content-box li"
      )[1];
      const sec03LiThree = document.querySelectorAll(
        "#section05 .content-box li"
      )[2];
      const sec03LiFour = document.querySelectorAll(
        "#section05 .content-box li"
      )[3];
      const sec03LiFive = document.querySelectorAll(
        "#section05 .content-box li"
      )[4];
      const sec03LiSix = document.querySelectorAll(
        "#section05 .content-box li"
      )[5];

      let opacityOne, rotateXone, scaleOne;
      let opacityTwo, rotateXTwo, scaleTwo;
      let opacityThree, rotateXThree, scaleThree;
      let opacityFour, rotateXFour, scaleFour;
      let opacityFive, rotateXFive, scaleFive;
      let opacitySix, rotateXSix, scaleSix;

      if (scrollY < startOne) {
        opacityOne = 1;
        rotateXone = 0;
        scaleOne = 1;
      } else if (scrollY >= startOne && scrollY <= endOne) {
        opacityOne = 1 - (0.5 * (scrollY - startOne)) / (endOne - startOne);
        rotateXone = (-5 * (scrollY - startOne)) / (endOne - startOne);
        scaleOne = 1 - (0.1 * (scrollY - startOne)) / (endOne - startOne);
      } else {
        opacityOne = 0.5;
        rotateXone = -5;
        scaleOne = 0.9;
      }

      sec03LiOne.style.opacity = opacityOne;
      sec03LiOne.style.transform = `rotateX(${rotateXone}deg) scale(${scaleOne})`;

      if (scrollY < startTwo) {
        opacityTwo = 1;
        rotateXTwo = 0;
        scaleTwo = 1;
      } else if (scrollY >= startTwo && scrollY <= endTwo) {
        opacityTwo = 1 - (0.5 * (scrollY - startTwo)) / (endTwo - startTwo);
        rotateXTwo = (-5 * (scrollY - startTwo)) / (endTwo - startTwo);
        scaleTwo = 1 - (0.09 * (scrollY - startTwo)) / (endTwo - startTwo);
      } else {
        opacityTwo = 0.5;
        rotateXTwo = -5;
        scaleTwo = 0.91;
      }

      sec03LiTwo.style.opacity = opacityTwo;
      sec03LiTwo.style.transform = `rotateX(${rotateXTwo}deg) scale(${scaleTwo})`;

      if (scrollY < startThree) {
        opacityThree = 1;
        rotateXThree = 0;
        scaleThree = 1;
      } else if (scrollY >= startThree && scrollY <= endThree) {
        opacityThree =
          1 - (0.5 * (scrollY - startThree)) / (endThree - startThree);
        rotateXThree = (-5 * (scrollY - startThree)) / (endThree - startThree);
        scaleThree =
          1 - (0.08 * (scrollY - startThree)) / (endThree - startThree);
      } else {
        opacityThree = 0.5;
        rotateXThree = -5;
        scaleThree = 0.92;
      }

      sec03LiThree.style.opacity = opacityThree;
      sec03LiThree.style.transform = `rotateX(${rotateXThree}deg) scale(${scaleThree})`;

      if (scrollY < startFour) {
        opacityFour = 1;
        rotateXFour = 0;
        scaleFour = 1;
      } else if (scrollY >= startFour && scrollY <= endFour) {
        opacityFour = 1 - (0.5 * (scrollY - startFour)) / (endFour - startFour);
        rotateXFour = (-5 * (scrollY - startFour)) / (endFour - startFour);
        scaleFour = 1 - (0.07 * (scrollY - startFour)) / (endFour - startFour);
      } else {
        opacityFour = 0.5;
        rotateXFour = -5;
        scaleFour = 0.93;
      }

      sec03LiFour.style.opacity = opacityFour;
      sec03LiFour.style.transform = `rotateX(${rotateXFour}deg) scale(${scaleFour})`;

      if (scrollY < startFive) {
        opacityFive = 1;
        rotateXFive = 0;
        scaleFive = 1;
      } else if (scrollY >= startFive && scrollY <= endFive) {
        opacityFive = 1 - (0.5 * (scrollY - startFive)) / (endFive - startFive);
        rotateXFive = (-5 * (scrollY - startFive)) / (endFive - startFive);
        scaleFive = 1 - (0.06 * (scrollY - startFive)) / (endFive - startFive);
      } else {
        opacityFive = 0.5;
        rotateXFive = -5;
        scaleFive = 0.94;
      }

      sec03LiFive.style.opacity = opacityFive;
      sec03LiFive.style.transform = `rotateX(${rotateXFive}deg) scale(${scaleFive})`;

      if (scrollY < startSix) {
        opacitySix = 1;
        rotateXSix = 0;
        scaleSix = 1;
      } else if (scrollY >= startSix && scrollY <= endSix) {
        opacitySix = 1 - (0.5 * (scrollY - startSix)) / (endSix - startSix);
        rotateXSix = (-5 * (scrollY - startSix)) / (endSix - startSix);
        scaleSix = 1 - (0.05 * (scrollY - startSix)) / (endSix - startSix);
      } else {
        opacitySix = 0.5;
        rotateXSix = -5;
        scaleSix = 0.95;
      }

      sec03LiSix.style.opacity = opacitySix;
      sec03LiSix.style.transform = `rotateX(${rotateXSix}deg) scale(${scaleSix})`;

      isScrolling = false;
    });
  }
};

calculateBounds();
window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", calculateBounds);
