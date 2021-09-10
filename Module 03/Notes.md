<h1>
    Core modules
</h1>
<p>
    <ul>
        <li>
            http: For http requests. It help us launch a server.
        </li>
        <li>
            https: For https requests (https://nodejs.org/api/https.html). It help us launch a SLL server. <a href='https://nodejs.org/api/https.html'>Documentation</a>
        </li>
        <li>
            fs: To manage the file system. <a href='https://nodejs.org/api/fs.html'>Documentation</a>
        </li>
        <li>
            path: It help us to construct paths. It works in any OS. <a href='https://nodejs.org/api/path.html'>Documentation</a>
        </li>
        <li>
            os: It help us with the OS. <a href='https://nodejs.org/api/os.html'>Documentation</a>
        </li>
    </ul>
</p>

<h1>
    How to import a module?
</h1>
<p>
    For a module in a local folder:
    ```
    const module_path='./path'
    const module = require(module_path)
    ```
</p>
<p>
    For a global module:
    ```
    const module = require('global_module_name')
    ```
</p>

<h1>
    How can I run a server?
</h1>
<p>
    ```
    const server = http.createServer(rqListener); //especify callback with 2 params (request, response)
    server.listen(3001) //Especify port
    ```
    You can run server with command <b>node server_file_name.js</b>
<p>


