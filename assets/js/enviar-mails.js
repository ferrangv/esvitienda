
type="text/javascript"
src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">


(function(){
    emailjs.init("wL8nnvrIPGAwtLCFC"); //public key
})();




document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que la página recargue

    const btn = document.querySelector(".btn-main");
    btn.innerText = "Enviando...";

    emailjs.sendForm(
        "service_7v6s9sb",
        "template_yty62mn",
        this
    ).then(() => {
        alert("Tu solicitud se envió correctamente. ¡Gracias por contactarnos!");
        btn.innerText = "Enviar Solicitud";
        this.reset();
    }, (error) => {
        alert("Hubo un error al enviar tu solicitud. Inténtalo nuevamente.");
        btn.innerText = "Enviar Solicitud";
        console.error("Error EmailJS:", error);
    });
});

