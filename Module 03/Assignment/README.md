You must:
1. Spin up a Node.js-driven Server (on port 3000)
1. Handle two Routes: "/" and "users"
    * Return some greeting text on "/". For instance: *Hello World!*
    * Return a list of Dummy users (e.g. `<ul><li>User 1</li></ul>`)
1. Add a form with a "username" `<input>` to the "/" page and submit a POST request to "/create-user" upon a button click
1. Add the "/create-user" route and parse the incoming data (i.e. the username)and simply log it to the console