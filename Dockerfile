FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./

RUN npm ci 

COPY . .

RUN npm run build

FROM nginx:stable-alpine AS production

WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/ .
COPY ./entrypoint.sh /entrypoint.sh
# COPY nginx.conf /etc/nginx/nginx.conf
RUN chmod +x /entrypoint.sh
EXPOSE 80
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
