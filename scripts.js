const linkPage = document.location.href;
const emailFromRedPage = linkPage.split('?')[1];
const inputYellow = document.querySelector('.input-yellow');
inputYellow.value = emailFromRedPage;
