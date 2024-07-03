// menu item
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-menu");

// show menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
// hide menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// mobile menu
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// home typed effect
const typed = document.querySelector(".typed");
if (typed) {
  let typedStrings = typed.getAttribute("data-typed-items");
  typedStrings = typedStrings.split(",");
  new Typed(".typed", {
    strings: typedStrings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}

// email
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactProject = document.getElementById("contact-project"),
  contactMessage = document.getElementById("contact-message");
// if the field has a value
const sendEmail = (e) => {
  e.preventDefault();
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactProject.value === ""
  ) {
    // color
    contactMessage.classList.remove("color-green");
    contactMessage.classList.add("color-red");

    // show message
    contactMessage.textContent = "Please write all the input fields 📩";
  } else {
    // serviceID , templateID , #form , publickey
    emailjs
      .sendForm(
        "service_5bdtalk",
        "template_kx0ji9l",
        "#contact-form",
        "GIEDVHSXygxrqurRO"
      )
      .then(
        () => {
          // show message
          contactMessage.classList.add("color-green");
          contactMessage.textContent = "Message sent ✅";

          // remove message after 4 sec
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 3500);
        },
        (error) => {
          alert("OOPS! SOMETHING HAS FAILED..", error);
        }
      );
    // clear input field
    contactName.value = "";
    contactEmail.value = "";
    contactProject.value = "";
  }
};
contactForm.addEventListener("submit", sendEmail);

// Scroll section active link
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// show scroll up
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 360
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// change background-color
const scrollHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

// scroll reveal animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true /*animation repeat*/,
});
sr.reveal(`.home-blog`);
sr.reveal(`.in1`, { delay: 600, origin: "left" });
sr.reveal(`.in2`, { delay: 600, origin: "right" });
sr.reveal(`.skills-info`, { origin: "bottom" });
sr.reveal(`.res-button`, { origin: "top" });
sr.reveal(`.contact-content:nth-child(1)`, { origin: "left" });
sr.reveal(`.contact-content:nth-child(2)`, { origin: "right" });
