function aboutMeComponent(el) {
    const aboutMeEl = document.createElement("div");
    aboutMeEl.classList.add("about-me__container");
    aboutMeEl.innerHTML = 
    `
        <img class="about-me__img" src="./images/foto.jpg" alt="foto">
        <div class="container__info">
            <h2 class="info__title">Conóceme</h2>
            <p class="info__description">Mi nombre es Rodrigo Salinas soy Desarrollador de Software Trainee, Actualmente me estoy formando como Desarrollador Web Full-Stack. Me motiva mucho desarrollar mis habilidades y crecer profesionalmente. Tengo confianza en mi capacidad para encontrar ideas interesantes para crear software y resolver problemas. </p>
        </div>
    `
    el.appendChild(aboutMeEl);
}