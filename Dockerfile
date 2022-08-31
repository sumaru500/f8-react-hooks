FROM node:16.13.2 as build
WORKDIR /app
COPY . /app
RUN npm install && npm run build

# run build result in nginx
FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html
