# Forzamos Node 14 Alpine (ligero y compatible)
FROM node:14-alpine
 
WORKDIR /app
 
# Copiamos los archivos de dependencias desde tu subcarpeta
COPY formulario/package*.json ./
 
# Instalamos la CLI de Angular globalmente dentro del contenedor
RUN npm install -g @angular/cli@11.2.14 && npm install
 
# Copiamos el resto del código
COPY formulario/ .
 
EXPOSE 4200