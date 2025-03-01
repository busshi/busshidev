FROM 	node:21-alpine

WORKDIR /usr/app

COPY	. .

RUN		yarn install  --network-timeout 100000

RUN		yarn build

CMD		[ "yarn", "start" ]