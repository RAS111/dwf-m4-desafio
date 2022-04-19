function servicesComponent(el) {
    const servicesEl = document.createElement("div");
    servicesEl.innerHTML = `
        <h2 class="services__title">Mis Servicios</h2>
        <div class="services__results"></div>
        <template class="services__template"> 
            <div class="services__container">
                <div class="container__things">
                    <img class="things__img" src="images/desktop.png" alt="desktop">
                    <h3 class="things__subtitle">hago cosas</h2>
                    <p class="things__description">Algo interesante sobre mi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui quam, sollicitudin at enim id, sodales vehicula velit. Aenean lobortis posuere tristique.</p>
                </div>
            </div>
        </template>
    `
    el.appendChild(servicesEl);
}
