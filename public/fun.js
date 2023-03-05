const initAppFun = () =>
{
    cwrite = document.querySelector(".copywrite")

    const myDate = new Date();
    cwrite.textContent = myDate.getFullYear();
}

document.addEventListener("DOMContentLoaded", initAppFun);