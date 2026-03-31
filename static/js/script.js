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

document.addEventListener('DOMContentLoaded', function (){
    updateFooterYear();
    setupContactForm();
});