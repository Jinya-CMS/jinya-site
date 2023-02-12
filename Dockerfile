FROM quay.imanuel.dev/dockerhub/library---node:latest

WORKDIR /app
COPY . .

EXPOSE 3000

RUN npm install
RUN npm run build
ENTRYPOINT node build/index.js
