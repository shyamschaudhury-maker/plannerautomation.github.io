/* ---------------------------------------------------
   Simple JavaScript for Planner Automations Website
---------------------------------------------------- */

// Smooth scroll for internal navigation
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Highlight navbar link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + 100; // Offset for readability

    sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            navLinks.forEach(link => link.classList.remove("active"));

            const activeLink = document.querySelector(`.nav-links a[href='#${section.id}']`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
});

// Click animation for flow download cards
const flowCards = document.querySelectorAll(".link-card");

flowCards.forEach(card => {
    card.addEventListener("click", () => {
        card.style.transform = "scale(0.97)";
        setTimeout(() => {
            card.style.transform = "scale(1)";
        }, 150);
    });
});

// Contact page handler (only if contact form exists)
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("Thank you! Your message has been submitted. You will receive a reply shortly.");
        contactForm.reset();
    });
}
