document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".main").classList.remove("hidden");
  document.querySelector(".home-section").classList.add("active");
});

/*----------------------------Toggle Navbar-------------------------*/

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});

function hideSection() {
  const activeSection = document.querySelector("section.active");
  if (activeSection) activeSection.classList.toggle("fade-out");
}

function toggleNavbar() {
  document.querySelector(".header").classList.toggle("active");
}

/*------------------Active Section------------------*/

const allLinks = document.querySelectorAll(".link-item[href^='#']");
allLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (!targetSection) return;

    document.querySelector(".overlay").classList.add("active");
    navToggler.classList.add("hide");

    if (link.classList.contains("nav-item")) {
      toggleNavbar();
    } else {
      hideSection();
      document.body.classList.add("hide-scrolling");
    }

    setTimeout(() => {
      const currentActive = document.querySelector("section.active");
      if (currentActive) currentActive.classList.remove("active", "fade-out");
      targetSection.classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      navToggler.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    }, 500);
  });
});

/*------------- About Tabs ---------------*/

const tabsContainer = document.querySelector(".about-tabs"),
  aboutSection = document.querySelector(".about-section");

if (tabsContainer && aboutSection) {
  tabsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-items") && !e.target.classList.contains("active")) {
      tabsContainer.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
      const target = e.target.getAttribute("data-target");
      aboutSection.querySelector(".tab-content.active").classList.remove("active");
      aboutSection.querySelector(target).classList.add("active");
    }
  });
}

/*---------------------Portfolio Item Details Popup-------------------------------*/

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortfolioPopup();
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePortfolioPopup();
  }
});

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
  document.querySelector(".pp-header h3").innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;
  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

/*----------------Typing Animation----------------*/
var typed = new Typed(".typing-text", {
  strings: ["Web Developer", "App Developer", "Designer"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});

/*----------------Tawk.to Script----------------*/
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/6128d67ad6e7610a49b24d03/1fe3obke3';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();

/*----------------Mouse Reactive Background Circles----------------*/
const bgCircles = document.querySelectorAll(".bg-circles .circle");

bgCircles.forEach((circle, i) => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  circle.style.animationDelay = `${Math.random() * 3}s`;
});

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  bgCircles.forEach((circle, index) => {
    const speed = (index + 1) * 0.01;
    const offsetX = (window.innerWidth / 2 - x) * speed;
    const offsetY = (window.innerHeight / 2 - y) * speed;
    circle.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
});

/*------------------- Section Navigation Arrows -------------------*/
const allSections = document.querySelectorAll("section");
let activeIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  allSections.forEach((sec, i) => {
    if (sec.classList.contains("active")) {
      activeIndex = i;
    }
  });
});

function goToSection(index) {
  if (index >= 0 && index < allSections.length) {
    allSections[activeIndex].classList.remove("active");
    allSections[index].classList.add("active");
    window.scrollTo(0, 0);
    activeIndex = index;
  }
}

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    goToSection(activeIndex + 1);
  });

  prevBtn.addEventListener("click", () => {
    goToSection(activeIndex - 1);
  });
}
