function updateFooterYear(){
    const yearSpan = document.getElementById('current-year')
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}
function setupContactForm(){
    const form = document.getElementById('form-contacto');

    if(form){
        form.addEventListener('submit', function(event){
            event.preventDefault();

            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.classList.add('loading');

            const formData = new FormData(this);

            fetch('/send_email', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                showFlashMessage(
                    data.message,
                    data.status === "success" ? "success" : "danger"
                );

                if (data.status === "success") {
                    this.reset();
                }

                submitButton.classList.remove('loading');
            }).catch(error => {
                showFlashMessage("Error al enviar el formulario", "danger");
                submitButton.classList.remove('loading');
            });
        });
    }
}


function showFlashMessage(message, category){
    const flashContainer = document.getElementById('flash-messages');
    const flashMessage = document.createElement('div');
    flashMessage.className = `alert ${category}`;
    flashMessage.textContent = message;

    flashContainer.appendChild(flashMessage);

    setTimeout(() => {
        flashMessage.remove();
    }, 5000);
}

function setupNavbar() {
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("navbar");

    if (btn && menu) {
        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    }
}
function setupNavbarScroll() {
    const header = document.getElementById("header-fijo");
    if (!header) return;

    let isScrolled = false;

    window.addEventListener("scroll", () => {
        const shouldBeScrolled = window.scrollY > 50;

        if (shouldBeScrolled !== isScrolled) {
            isScrolled = shouldBeScrolled;

            header.classList.toggle("bg-stone-800", isScrolled);
            header.classList.toggle("shadow-md", isScrolled);
        }
    });
}
document.addEventListener('DOMContentLoaded', function (){
    updateFooterYear();
    setupContactForm();
    setupNavbar();
    setupNavbarScroll();
});