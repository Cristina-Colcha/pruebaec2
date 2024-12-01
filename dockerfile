# Imagen base de Node.js
FROM node:18

# Crear y establecer directorio de trabajo
WORKDIR /app

# Copiar archivos
COPY package.json ./
COPY app.js ./
COPY public ./public

# Instalar dependencias
RUN npm install

# Exponer el puerto de la aplicación
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]
