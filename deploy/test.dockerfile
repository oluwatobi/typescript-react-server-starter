FROM node:10.15.3-alpine

RUN mkdir -p /workspace/typescript-react-server-starter

COPY . /workspace/typescript-react-server-starter

WORKDIR /workspace/typescript-react-server-starter

RUN npm i lerna -g --loglevel notice && \
    lerna bootstrap && \
    lerna run test
