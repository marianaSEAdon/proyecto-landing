
function updateFooterYear(){
    const yearSpan = document.getElementById('current-year')
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

function setupFormSimulatio(){
    const form = document.querySelector('form');
    if(form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;

            submitButton.textContent = 'Procesando...';
            submitButton.disabled = true;

            setTimeout(() =>{
                alert('¡Mensaje enviado!');
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                form.reset();
            }, 1500);
        });
    }
}

document.addEventListener('DOMContentLoaded', function (){
    updateFooterYear();
    setupFormSimulatio();
});
