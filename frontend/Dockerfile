FROM node:20-alpine AS build

WORKDIR /app

COPY frontend/package.json ./

RUN npm install

COPY frontend/ ./

RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "node /app/docker-entrypoint.cjs && npm run start"]