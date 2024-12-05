# Demo of using Watt with Config

This is a simple demo of how to use [Watt](http://npm.im/wattpm) with [config](http://npm.im/config).

## Installation

```bash
npm install
```

## Usage

```bash
cp .env.sample .env
npm start
```

The `NODE_ENV` variable that is seen inside the `main` service is controller by the `PLT_MAIN_ENV` variable
in the `/.env` file. In this way each service could be run in a different environment.
