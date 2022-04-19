function contactMeComponent(el) {
    const contactEl = document.createElement("div");
    contactEl.classList.add("contact-me__container")
    
    contactEl.innerHTML = `
        <h2 class="contact-me__title">Contáctame</h2>
        <form action="post" class="contact-me__form" onsubmit="event.preventDefault()">
            <div class="form__fieldset">
                <label for="name" class="form__label">Nombre</label>
                <input type="text" class="form__input" name="name" id="name" pattern="([a-z A-Z]{1,20})" required />
            </div>
            <div class="form__fieldset">
                <label for="email" class="form__label">Email</label>
                <input type="email" name="email" id="email" class="form__input" required />
            </div>
            <div class="form__fieldset">
                <label for="message" class="form__label">Mensaje</label>
                <textarea name="message" id="message" class="form__message" required ></textarea>
            </div>
            <button class="form__btn">Enviar</button>

        </form>
    `
    el.appendChild(contactEl);


    
}

function contactMeForm() {
    const form = document.querySelector(".contact-me__form");
    const nameEl = document.querySelector("#name");
    const emailEl = document.querySelector("#email");
    const messageEl = document.querySelector("#message");


    function formValidation(e) {
        if(e.target.checkValidity() == true){
            e.target.setAttribute("style", "border-color: green");
        } else {
            e.target.setAttribute("style", "border-color: red")
        }
    }

    nameEl.addEventListener("keyup", (e) => formValidation(e));
	nameEl.addEventListener("blur", (e) => formValidation(e));

	emailEl.addEventListener("keyup", (e) => formValidation(e));
	emailEl.addEventListener("blur", (e) => formValidation(e));

	messageEl.addEventListener("keyup", (e) => formValidation(e));
	messageEl.addEventListener("blur", (e) => formValidation(e));

    form.addEventListener("submit", () => {
        const message = {
          to: "ras123gg@gmail.com",
          message:
            "Nombre: " +
            nameEl.value +
            "." +
            " " +
            "Email: " +
            emailEl.value +
            " " +
            "Mensaje: " +
            messageEl.value +
            ".",
    
          //
        };
    
        fetch("https://apx-api.vercel.app/api/utils/dwf", {
          method: "POST",
          body: JSON.stringify(message),
          headers: { "content-type": "application/json" },
            }).catch((error) => {
            console.log(error);
            });
        
            nameEl.value = "";
            emailEl.value = "";
            messageEl.value = "";


            swal({
                title: "Gracias por su mensaje, el destinatario lo contestará en la brevedad.",
                icon: "success",
                button: true,
            });

        });

}