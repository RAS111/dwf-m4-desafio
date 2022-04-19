function main() {
    const header = document.querySelector(".header");
    const contactMe = document.querySelector(".contact-me");
    const footer = document.querySelector(".footer");

    headerComponent(header);
    contactMeComponent(contactMe);
    contactMeForm();
    footerComponent(footer);
}

main();