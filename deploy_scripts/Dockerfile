# base image
FROM node:9.6.1 as builder

# set working directory
RUN mkdir /build
WORKDIR /build
COPY package.json /build/package.json
RUN npm install --production

ENV PATH /build/node_modules/.bin:$PATH

ADD dist /build/.

FROM nginx

COPY nginx.config /etc/nginx/conf.d/default.conf
COPY --from=builder /build /usr/share/nginx/html

