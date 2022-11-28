FROM node:18.7.0-slim
WORKDIR /code

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install 
COPY . .

CMD ["npm", "run", "startondocker"]