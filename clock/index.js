const clockElement = document.querySelector("[data-clock");

const renderCLock = (lang ) =>new Date().toLocaleTimeString(lang)

clockElement.innerHTML = renderCLock("pt-br");

setInterval(() => {
    clockElement.innerHTML = renderCLock("pt-br");
}, 1000);