
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
        // Mostrar popup
        document.getElementById("success-popup").classList.add("show");

        // Ocultarlo automáticamente después de 3 segundos
        setTimeout(() => {
            document.getElementById("success-popup").classList.remove("show");
        }, 2000);
        btn.innerText = "Enviar Solicitud";
        this.reset();
    }, (error) => {
        alert("Hubo un error al enviar tu solicitud. Inténtalo nuevamente.");
        btn.innerText = "Enviar Solicitud";
        console.error("Error EmailJS:", error);
    });
});

