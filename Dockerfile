FROM quay.imanuel.dev/dockerhub/library---nginx:1.21-alpine

COPY ./src /var/www/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
