# Movies APP Marvel MCU - Joaquin Pastore Barrios

## Requisitos

- React 18.1.0
- React-Icons 4.3.1
- React Router Dom 6.3.0

## Desarrollo
Este proyecto se basa en una aplicación de visualización de todas las películas de Marvel pertenecientes al MCU. 

Para el desarrollo de esta aplicación se ha creado una API Restful con NodeJS y ExpressJS, y como base de datos MongoDB. 
Se puede visualizar su contenido en el siguiente repositorio: https://github.com/JoaquinJPB/RestAPI_MovieAppReact

Para el front-end se ha utilizado como framework React, además de hacer uso de librerias complementarias de React como React Router v6 y React Icons.

Hablando especificamente de este proyecto, como principal componente encontramos MoviesGrid, donde su principal función es exhibir las peliculas a lo largo de la web. A su vez, también cuenta con un buscador para encontrar la película del MCU que se desee, y a través del componente MovieDetails, se enseñan los datos correspondientes de la película. 

Como datos principales de las peliculas se encuentran:
- Título
- Año de estreno
- Director
- Portada de la película

Para ver el funcionamiento del sitio web, dispone del siguiente enlace: https://movies-app-react-joaquinpb.vercel.app/
