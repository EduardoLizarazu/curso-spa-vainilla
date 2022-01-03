import router from "./routes/index";

// Cuando se carge la pag se ejecuta
window.addEventListener("load", router);

// Se encaga de escuchar la rutas o el hash al que se esta moviendo
// Es cuando hay un cambio dentro de un hash
window.addEventListener('hashchange', router);