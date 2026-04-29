// template_uwyxoks
// service_i5v3dga
// 5FF_sgPXP3Sam5d8h

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(`.modal__overlay--loading`);
    const success = document.querySelector(`.modal__overlay--success`);
    loading.classList += (` modal__overlay--visible`);
    emailjs
    .sendForm(
        `service_i5v3dga`,
        `template_uwyxoks`,
        event.target,
        `5FF_sgPXP3Sam5d8h`
    ).then(() => {
        loading.classList.remove(`modal__overlay--visible`);
        success.classList += (` modal__overlay--visible`);
    }).catch(() => {
        loading.classList.remove(`modal__overlay--visible`);
        alert(
            `The email service is temporarily unavailable. Please contact me directly at olivialacayo@gmail.com`
        )
    })

}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
        
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}

