FROM node
RUN mkdir myApp
WORKDIR myApp
RUN mkdir lib
COPY package.json ./package.json
COPY tsconfig.json ./tsconfig.json
RUN rm -rf node_modules
RUN npm i
COPY src ./src
COPY config ./config
COPY public ./public
COPY test ./test
EXPOSE 3030
CMD ["npm","start"]
