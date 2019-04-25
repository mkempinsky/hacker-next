const next = require('next');
const http = require('http');
const url = require('url');
const path = require('path');
const port = process.env.PORT || 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handler = app.getRequestHandler();

app.prepare().then(() => {
    http.createServer((req, res) => {
        /**
         *  Parse request url to get it's path name
         */
        const parsedUrl = url.parse(req.url, true);
        const {pathname} = parsedUrl;

        /**
         * if a service worker is requested, we want to serve it as a static file
         */
        if (pathname === '/service-worker.js') {
            const filePath = path.join(__dirname, '.next', pathname);
            app.serveStatic(req, res, filePath);

            /* otherwise.. let next take care of it */
        } else {
            handler(req, res, parsedUrl);
        }
    }).listen(port, () => {
        console.log(`Listening on port: ${8080}`);
    });
});
