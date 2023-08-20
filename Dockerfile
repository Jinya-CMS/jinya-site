FROM harbor.ulbricht.casa/proxy/library/node:latest

WORKDIR /app
COPY . .

EXPOSE 3000

RUN npm install --force
RUN npm run build
ENTRYPOINT node build/index.js
