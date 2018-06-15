FROM stefanscherer/node-windows As base

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD npm start