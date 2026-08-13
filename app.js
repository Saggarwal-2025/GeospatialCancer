const menuButton = document.querySelector("#mobile-menu");
const navigationMenu = document.querySelector("#primary-navigation");
const navigationLinks = document.querySelectorAll(".navbar__links");

function closeMenu() {
    if (!menuButton || !navigationMenu) return;
    navigationMenu.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
}

if (menuButton && navigationMenu) {
    menuButton.addEventListener("click", () => {
        const menuIsOpen = navigationMenu.classList.toggle("active");
        menuButton.setAttribute("aria-expanded", String(menuIsOpen));
        menuButton.setAttribute("aria-label", menuIsOpen ? "Close navigation menu" : "Open navigation menu");
    });

    navigationLinks.forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
    });
}
