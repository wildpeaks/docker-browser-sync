FROM node:16-alpine

COPY package.json /tmp/package.json

RUN apk update \
    && apk add jq \
    && jq -r '.dependencies | to_entries | .[] | .key + "@" + .value' /tmp/package.json | xargs npm install --prefer-offline --no-audit --no-fund --no-update-notifier -g \
    && rm /tmp/package.json \
    && apk del jq

EXPOSE 3000 3001
CMD ["browser-sync", "start", "--server", "--files", ".", "--no-open", "--no-notify"]
