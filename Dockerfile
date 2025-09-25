ARG $CI_DEPENDENCY_PROXY_GROUP_IMAGE_PREFIX

FROM $CI_DEPENDENCY_PROXY_GROUP_IMAGE_PREFIX/oven/bun:alpine AS build

COPY build /app
COPY node_modules /node_modules

EXPOSE 3000

WORKDIR /app

ENTRYPOINT ["bun", "run", "start"]
