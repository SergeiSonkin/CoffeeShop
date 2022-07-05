const sendEmail = (params) => {

    const name = document.getElementById("contact__name");
    const email = document.getElementById("contact__email")
    const message = document.getElementById("contact__message");

    let tempParams = {
        name: document.getElementById("contact__name").value,
        email: document.getElementById("contact__email").value,
        message: document.getElementById("contact__message").value,
    };

    emailjs.send('service_qngk3x8', 'template_8id5vhc', tempParams)
    .then( (res) => {
        console.log("success", res.status)
        name.value = "";
        email.value = "";
        message.value = "";
    })
}
