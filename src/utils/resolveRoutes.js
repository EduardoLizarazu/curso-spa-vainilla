
// Va a resivir la ruta de la func anterior 
const resolveRoutes = (route) => {
  // Como los id o personajes que se podrian generar no son mas de 3000,hago un validacion de 3 niveles
  if (route.length <= 3) {
    let validRoute = route === '/' ? route : '/:id';
    return validRoute;
  }
  return `/${route}`;
};

export default resolveRoutes;