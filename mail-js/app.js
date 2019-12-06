const sendBtn = document.getElementById("send-btn")

sendBtn.addEventListener("click", event => {
    event.preventDefault();
    const template_params = {
        "mail": document.getElementById("guest-email").value,
        "name": document.getElementById("guest-name").value,
        "appointmentDate": document.getElementById("appointment-date").value,
        "hora": document.getElementById("hora").value
    }
    console.log(template_params);

    emailjs.send('gmail', 'form-contacto', template_params) //Insert your email service ID and email template ID
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });

})
/*console.log(datos);

var templateParams = {
    name: 'Sender',
    notes: 'Test email'
};


emailjs.send('gmail', 'form-contacto', templateParams) //Insert your email service ID and email template ID
    .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
        console.log('FAILED...', error);
    }); */