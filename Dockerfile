FROM node

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 9090

CMD ["yarn", "run:dev"]