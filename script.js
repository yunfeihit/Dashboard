const iframeContainerSingUpForm = document.querySelector('#project-sign-up-form .iframe-container');
const linkSignUpForm = iframeContainerSingUpForm.querySelector('a');
iframeContainerSingUpForm.addEventListener("click", () => {
    window.open(linkSignUpForm.href, linkSignUpForm.target);
})