# API Rest Login and User Registration - backend

This API Rest was made to register and login of users, and was create using [Node.Js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/)

## Available scripts

Use to run this API Rest in your project:

### Installations

Install in your computer the package manager [Yarn](https://yarnpkg.com/) so that you can run this API.

### Changes

With the API inside your project some changes must be made so that don’t errors occur of executing, inside the folder `controllers` change the require of your two JS files. This require must contain the localization of `Estudante.js` file which is in folder **models**.

The your change must be made here:

```
const Estudante = require('');
```
Exemple:

```
const Estudante = require('/Users/Acer/Documents/backend/src/models/Estudante');
```

### `yarn dev`

To realize tests from this API, use the url[https://localhost:6060](https://localhost:6060).
We recommend [Postman](https://www.postman.com/downloads/) for testing.

To start the server, run the command in the terminal:
```
yarn dev
```
### `tests`

In this way, tests will be made using the url's:: [https://localhost:6060/register](https://localhost:6060/register) and [https://localhost:6060/login](https://localhost:6060/login).

**Note: Use `GET` whenever you are going to use the tests to login and `POST` to make tests in the register.**

Understand what it is[API Rest](https://www.redhat.com/pt-br/topics/api/what-is-a-rest-api)
How to use [API Rest](https://br.sensedia.com/post/rest-api-understand-the-step-by-step-to-perform-tests)

## Learn more

You can learn more in the [Node.Js](https://nodejs.org/en/docs/)
Also learn about [Yarn](https://classic.yarnpkg.com/lang/en/docs/)

