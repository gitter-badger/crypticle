FROM node:10-slim

LABEL maintainer="Jonathan Gros-Dubois"
LABEL version="5.4.2"
LABEL description="Docker file for Asyngular with support for clustering."

RUN mkdir -p /usr/src/
WORKDIR /usr/src/
COPY . /usr/src/

RUN npm install .

EXPOSE 8000

CMD ["npm", "run", "start:docker"]
