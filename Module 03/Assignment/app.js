//To import a module
const http = require('http')
const rqListener = require('./routes')


const PORT = 3001
const HTML_TEMPLATE = '<html>\n<head>\n<title>Module 3 assignment</title>\n</head>\n<body>\nCONTENT\n</body>\n</html>'


const server = http.createServer(rqListener);
server.listen(PORT)