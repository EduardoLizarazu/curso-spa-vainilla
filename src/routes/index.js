import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
    "/": Home, // Va a ser render de home
    "/:id": Character, // va a ser dinamico por eso lo pongo asi
    "/contact": "Contact", 
}

const router = async () => {
    // Establecemos los templates
    // null por si no lo encuentra
    const header = null || document.getElementById("header"); 
    const content = null || document.getElementById("content");

    // Await para que se tarde lo que se tenga que tardar
    header.innerHTML = await Header();

    // para obtener el hash en el que se encuentre o a la que se este moviendo
    let hash = getHash(); 

    // Limpiar el hash y hacer validaciones
    let route = await resolveRoutes(hash);

    // Validar si puedo acceder al elemento o si existe la ruta
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
};

export default router;