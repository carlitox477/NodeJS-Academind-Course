# Module 4 requirements
Install nodemon develompente dependency, add the new folder to the *.gitingore* file

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

## Installing 3° parties packages
The npm repository is a cloud repository which contains 3° parties packages that we can install by aliases. For instance: express, react, etc. We can install a package using the command `npm install alias-package-name_or_URL`. The `install` command have some useful flags like:
* `--save-dev`: install a package as a development dependency (the package will be used just during development)
* `--save`: install a package as
* `-g`: the package wont' be installed just in the current project, it will be installed in the whole computer to be used anywhere

Installing dependencies will add data to the *package.json* file. For instance, if we install nodemon as a development dependency, it will be added:
```json
{
    "devDependencies": {
        "nodemon": "^2.0.12"
    }
}
```
To the *package.json* file. This means that, if we run `npm install`, the nodemon package (version 2.0.12) will be installed too.