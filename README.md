# Introduction
This is an example project for a mock API. The API has two modes of operating:
1. As an API Gateway to proxy API calls to Test
2. As a mock API to return mock API responses

# Getting Started
To get started with this api, simply type in the following commands to start the API.

Mock API:
```bash
npm install
npm run mock
```

Proxy API:
```bash
npm install
npm run proxy
```

# FAQ
## Why are there no tests?
This is a mock API and tends to change quite a bit. Writing tests for this doesn't really make sense and if you really wanted to have tests, you could just use the integration tests from the actual API.

## Why are we not using ES6?
We don't want to use any external dependencies. We just want to use plain, vanilla JavaScript so that anyone can understand it.