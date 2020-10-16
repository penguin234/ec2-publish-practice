FROM node
MAINTAINER penguin

RUN mkdir /app
ADD . /app
WORKDIR /app

EXPOSE 80

CMD ["node", "index.js"]