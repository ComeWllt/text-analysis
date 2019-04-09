FROM nginx:alpine

EXPOSE 80

COPY ./nginx.conf/default.conf /etc/nginx/conf.d/
COPY ./dist/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
