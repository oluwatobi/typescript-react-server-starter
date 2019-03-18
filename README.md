# typescript-react-server-starter
Starter for the typescript react front-end server.

Dependency management through [lerna](https://github.com/lerna/lerna). The goal
here to separate the front-end server from the files that will be served.

To get started, clone this repository and install the dependencies as needed. If
you plan to do development in multiple locations then it is strongly advised
that you run the following command (install lerna globally):

```shell
typescript-react-server-starter> npm i -g lerna
```

### Brief Lerna Overview (For more information read through the [Learna Documentation](https://github.com/lerna/lerna)):
This starter template comes with three packages by default: `client`, `server`,
and `shared`. To change configurations for the packages (package naming,
locations, etc) edit the lerna.json file in the root directory. If you wish to
add more packages use the [lerna create](https://github.com/lerna/lerna/tree/master/commands/create#readme)
command (documented in the link provided).

#### To add dependencies:
- (Localised to a specific package) `lerna add <dependency name> --scope=<package name>`
- (In all packages) `lerna add <dependency name>`

#### Development Quick Start:
Developing in Lerna can be overwhelming at first glance; however, once you get
an understanding of how the development landscape works, its pretty useful and
can save a lot time and dev cycles as opposed to running different repos.

- To run tests
  - For one module: lerna run test --scope=<package name>
  - For all modules: lerna run test
- To start one of the modules (NOTE: only `server` and `client` have the `start` script defined)
  - For one module: lerna run start --scope=<package name>

When running the React Application we use webpack to create a proxy to the
server code. The proxy will forward all requests from the UI to the front-end
server provided that it is running. This allows for the front-end server and the
React application to have hot-reloading enabled in isolation of each other.


### Technologies Overview
- Lerna (Dependency Management)
- Jest (Unit Testing Framework)
- Typescript (Typing System)
- React Typescript (Front-end Template)
- Webpack (Front-end Bundling)
- KoaJs (Front-end Server)

### Example Use Cases for this Template
- Lightweight backend CRUD service with UI Application
- Front-end Server to decouple UI code from more data-intense backend server
- Proxy Server to allow for modification of requests before forwarding the request to the backend server
