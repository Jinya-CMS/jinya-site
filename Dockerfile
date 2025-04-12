FROM oven/bun:alpine AS build

COPY build /app

EXPOSE 3000

ENTRYPOINT ["bun", "run", "start"]
