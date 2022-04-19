function portfolioComponent(el) {
    const portfolioEl = document.createElement("div");
    portfolioEl.innerHTML = `
        <h2 class="portfolio__title">Mis Servicios</h2>
        <div class="portfolio__results"></div>
        <template class="portfolio__template"> 
            <section class="portfolio">
                <h2 class="portfolio__title">Portfolio</h2>
                <div class="portfolio__container">
                    <div class="container__things">
                        <img class="things__img" src="#" alt="desktop">
                        <h3 class="things__subtitle">hago cosas</h2>
                        <p class="things__description">Algo interesante sobre mi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui quam, sollicitudin at enim id, sodales vehicula velit. Aenean lobortis posuere tristique.</p>
                        <a class="things__link" href="">Ver más</a>
                    </div>
                    
                </div>
            </section>
        </template>
    `
    el.appendChild(portfolioEl);
}


