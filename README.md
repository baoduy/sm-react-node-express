# sm-react-node-express

[![Greenkeeper badge](https://badges.greenkeeper.io/baoduy/sm-react-node-express.svg)](https://greenkeeper.io/)

The Express configuration to host React, Single-Page-App on NodeJS.

## Hosting on NodeJS

This can be use as stand-alone or inside Docker container.

1.  Run `npm install`
2.  Please ensure your dist folder of the SPA are in the same folder with express.js file.
3.  Run `npm start` to start the application.

### SSL Support

The nginx will load the SSL cert from certs folder and host the side at port 3001.
