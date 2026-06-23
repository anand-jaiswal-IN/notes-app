FROM node:20-alpine AS build

WORKDIR /app

COPY frontend/package.json ./

RUN npm install

COPY frontend/ ./

ARG VITE_API_URL=http://localhost:8000
ENV VITE_API_URL=${VITE_API_URL}

RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "npm run start"]