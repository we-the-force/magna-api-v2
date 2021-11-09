FROM strapi/base

WORKDIR /

COPY ./package.json ./
COPY ./yarn.lock ./

RUN npm install

COPY . .

ENV NODE_ENV production

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]
dump_magna.sql