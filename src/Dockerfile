FROM node:lts-alpine

# https://www.npmjs.com/package/browser-sync
RUN npm install -g browser-sync@2.26.14
EXPOSE 3000 3001

CMD ["browser-sync", "start", "--server", "--files", ".", "--no-open", "--no-notify"]
