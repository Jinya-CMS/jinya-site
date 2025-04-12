FROM oven/bun:alpine AS build

COPY build /app

EXPOSE 3000

WORKDIR /app

ENTRYPOINT ["bun", "run", "start"]
