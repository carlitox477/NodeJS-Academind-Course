# Module 4 requirements
Install nodemon develompente dependency, add the new folder to the *.gitingore* file. This dependency allow node to update its codes in development whener a file is updated without re running manually the server

# Node package manager (NPM)
NPM is usuful to manage scripts, initialize node project and install 3° parties libraries.

Commands:
* `npm init`: It creates a package in the current folder. It'll ask for the next package's data:
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

### Using nodemon package
1. Install nodemon package
1. Modify start script from *package.json* file from `node app.js` to `nodemon app.js`
1. Just run `npm start` to run the server with nodemon

# Types of error
* Syntax errors: Easy to find with code editor integrated tools or running tools.
* Runtime errors: code that breaks when it runs.
* Logical errors: Code that doesn't have syntax nor runtime errors but doesn't behave as we want. Reducing the zone to search the errron and use a debugger can be useful.

## Visual studio debugger
* Shortcut: `F5`
* Change something in our code won't restart our code unless we add the next configuration to our project (going to `Run`--> `Add configuration`, selecting node):
```json
{
    //...
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}/file_name.js",
            "restart": true,
            "runtimeExecutable": "nodemon", //if we use nodemon, otherwise node. Using nodemon will require install it locally
            "console": "integratedTerminal"
        }
    ]
    //...
}
```
* ![More information about Node.js debbugging in VS code]()

About the second point, it may not be recommend it because we don't want to debug always.