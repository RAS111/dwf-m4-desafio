function footerComponent(el) {
    const footerEl = document.createElement("div");
    footerEl.classList.add("footer__container");
    footerEl.innerHTML = `
        <div class="footer__brand">
            <a href="./index.html">
                <img class="brand__img" src="./images/logo.png" alt="logo">
            </a>
        </div>
        <div class="footer__social-media">
            <div class="social-media__instagram">
                <a href="https://www.instagram.com/rodri_sal17/" class="instagram__link">instagram</a>
                <img class="instagram__img" src="./images/instagram.png" alt="instagram">
            </div>
            <div class="social-media__linkedin">
                <a href="https://www.linkedin.com/in/rodrigo-salinas-406155185/" class="linkedin__link">Linkedin</a>
                <img class="linkedin__img" src="./images/linkedin.png" alt="linkedin">
            </div>
            <div class="social-media__github">
                <a href="https://github.com/RAS111" class="github__link">Github</a>
                <img class="github__img" src="./images/github.png" alt="github">
            </div>
        </div>
    `
    el.appendChild(footerEl);
}