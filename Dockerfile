FROM node:12.0

WORKDIR /usr/src

COPY package.json /usr/src/package.json
RUN yarn install

COPY . /usr/src/

CMD ["yarn", "start"]