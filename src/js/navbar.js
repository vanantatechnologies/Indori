/*
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isActive = menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active", isActive);

    if (navLinks.classList.contains("active")) {
        // Lock body scroll on iPhone & Safari correctly
        document.body.style.position = "fixed";
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.width = "100%";
    } else {
        // Restore scroll position properly
        const scrollY = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
});
*/

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const webMenus = document.querySelectorAll(".web-menus");

menuToggle.addEventListener("click", () => {
    const isActive = menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active", isActive);

    if (navLinks.classList.contains("active")) {
        // Lock body scroll
        document.body.style.position = "fixed";
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.width = "100%";
    } else {
        // Restore scroll position
        const scrollY = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
});

// ✅ Close menu after clicking a link
webMenus.forEach(link => {
    link.addEventListener("click", () => {
        // Only trigger close if nav is active (mobile)
        if (navLinks.classList.contains("active")) {
            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");

            // Restore scroll position properly
            const scrollY = document.body.style.top;
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
            window.scrollTo(0, parseInt(scrollY || "0") * -1);
        }
    });
});

