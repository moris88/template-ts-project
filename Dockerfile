FROM nginx 

COPY ./public /usr/share/nginx/html

EXPOSE 80

LABEL name moris

LABEL version 1.0