FROM node:10.15.3-alpine

RUN mkdir -p /workspace/typescript-react-server-starter

COPY . /workspace/typescript-react-server-starter

WORKDIR /workspace/typescript-react-server-starter

RUN npm i lerna ts-node typescript tsconfig-paths -g --loglevel notice && \
    lerna bootstrap && \
    lerna run build --scope @typescript-react-server-starter/client && \
    mkdir -p packages/server/public && \
    cp -rf packages/client/dist/* packages/server/public/ && \
    rm -rf packages/client packages/shared && \
    ls

EXPOSE 3000

CMD ["lerna", "run", "start", "--scope=@typescript-react-server-starter/server"]
