let inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('change', () => {
        if(input.value !== '' ) {
            input.classList.add('campo-preenchido');
        } else {
            input.classList.remove('campo-preenchido');
        }
    })
}) 