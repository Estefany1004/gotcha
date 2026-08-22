document.addEventListener('DOMContentLoaded', function(event){

    const formulario = document.getElementById('formContacto');

    formulario.addEventListener('submit', function(event){
        event.preventDefault();
        
        const f_name = document.getElementById('nombre').value;
        const f_email_address = document.getElementById('email-address').value;
        const f_subject = document.getElementById('email-asunto').value;
        const f_message = document.getElementById('mensaje').value;
        
        if(f_name.trim() ==="" || f_email_address.trim()==="" || f_message ==""){
            alert("Por favor llenar todos los campos");
            return;
        }

        const templateParams = {
            name: f_name,
            email: f_email_address,
            title: f_subject,
            message: f_message
        };

       emailjs.send('service_4pvndp7', 'template_25njlum', templateParams)
.then(function(){
    alert("Gracias, su mensaje esta siendo procesado");
    formulario.reset();
})
.catch(function(error){
    alert("Problemas en el envio");
    console.error("Envio fallido:", error);
});
    });
});

// ==============================
// AÑO ACTUAL
// ==============================

const anio = document.getElementById("anio");

anio.textContent = new Date().getFullYear();