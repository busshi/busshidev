FROM 	node:24-alpine

WORKDIR /usr/app

COPY	. .

RUN		yarn install  --network-timeout 100000

RUN		yarn build

CMD		[ "yarn", "start" ]