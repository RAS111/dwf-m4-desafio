function headerComponent(el) {
    const headerEl = document.createElement("div");
    headerEl.classList.add("header__container");
    headerEl.innerHTML = `
        <nav class="header__nav">
            <a class="nav__link" href="./index.html">
                <img class="link__img" src="./images/logo.png" alt="logo">
            </a>
            <div class="nav__menu">
                
                <i class="fa-solid fa-bars fa-2xl menu__icon"></i>
                <ul class="menu">
                    <li class="menu__item"><a href="./portfolio.html">Portfolio</a></li>
                    <li class="menu__item"><a href="./servicios.html">Servicio</a></li>
                    <li class="menu__item"><a href="./contacto.html">Contacto</a></li>
                    <div class="menu__close">
                        <i class="fa-solid fa-times fa-inverse fa-2xl close__icon"></i>
                    </div>
                </ul>
            </div>
        </nav>
        <h1 class="header__title">Hola<br>Soy Rodrigo</h1>`
        const menuEl = headerEl.querySelector(".menu");
        const openMenu  = headerEl.querySelector(".menu__icon");
        const closeMenu = headerEl.querySelector(".close__icon");

        openMenu.addEventListener("click", () => {
            menuEl.style.display = "flex";
            menuEl.style.top = "0%";
        });

        closeMenu.addEventListener("click", () => {
            menuEl.style.top = "-110%";
        });
        el.appendChild(headerEl);

}