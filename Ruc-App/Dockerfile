# Copiamos los archivos package.json y package-lock.json a la pre-imagen e instalamos las dependencias
# luego copiamos el resto de los archivos a la pre-imagen
FROM node:20.10.0 AS development
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install
COPY . /app

# Buildeamos nuestro proyecto en la preimagen
# Se generará la distribución en la ruta /app/dist
FROM development AS build
RUN npm run build

# Creamos la imagen final a partir de la imagen de nginx-alpine
# Copiamos el archivo de configuración de nginx y los archivos generados en el paso anterior
# Exponemos el puerto 80 y ejecutamos nginx
FROM nginx:alpine
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
