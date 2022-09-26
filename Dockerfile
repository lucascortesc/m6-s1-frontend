FROM node

WORKDIR /app

COPY "package.json" .

COPY entrypoint.sh /entrypoint.sh

ENV PATH /app/node_modules/.bin:$PATH

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

COPY . .

RUN yarn

CMD ["yarn", "dev"]

