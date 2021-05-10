FROM nginx:1.17.1-alpine

COPY ./src /var/www/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
