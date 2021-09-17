# Node package manager (NPM)
NPM is usuful to manage scripts, initialize node project and install 3° parties libraries.

Commands:
* **npm init**: It creates a package in the current folder. It'll ask for the next package's data:
    * name: Package's name
    * description: Package description
    * entrie point: 
    * test command: Command that will run if we execute the command *npm test* in the folder which contains the npm package.
    * git repository: Source git repository
    * keywords:
    * author: Package's author/S
    * license: Use license
The exit of this command will be a *package.json* file.

## package.json scripts
A JSON which contains all the commands that will be allowed to execute in the proyect where the package.json file is located. For example:
```json
{
    "scripts": {
        "start": "node app.js"
    }
}
```

Running `npm start` will be the same than running `node app.js`
