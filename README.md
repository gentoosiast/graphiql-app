<h1 align="center"> GraphiQL Final Task</h1>

<h2 align="center"> RS School React 2023 Q4</h2>

<!-- PROJECT LOGO -->
<p align="center">
  <img src='public/small-logo.svg'>
</p>

GraphiQL is a playground/IDE for graphQL requests. After login, you can choose any endpoint, construct a request, prettify your code and get a formatted response. Add some variables and headers? No problem! Use variables/headers tabs for it. And don't forget to check out documentation of chosen api in special section.

<div align="center" style="display: flex; justify-content: center; padding: 5px; flex-wrap: wrap;">
  <img src="public/sergey.jpg" alt="Sergey" width="150px" height="150px" style="border-radius: 50%; margin: 10px">
  <img src="public/ira.jpg" alt="Irina" width="150px" height="150px" style="border-radius: 50%; margin: 10px">
  <img src="public/kate.jpg" alt="Kate" width="150px" height="150px" style="border-radius: 50%; margin: 10px">
</div>

## Team project by [Sergey](https://github.com/gentoosiast), [Irina](https://github.com/Irina-Grebennikova), and [Kate](https://github.com/KateGoncharik)

[The Rolling Scopes School React Course](https://rs.school/react/) | [Link to the task](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md)

### Completed: January 2024

## Technology stack

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)

![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

![RTK Query](./public/rtk-query-badge.svg)

![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

![firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)

![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Project description](#rs-school-react-2023-q4)
- [Technology stack](#technology-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Scripts](#provided-scripts)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy - follow these simple steps.

### Installation

1. Clone the repo

```sh
  git clone https://github.com/gentoosiast/graphiql-app
```

2. Install NPM packages

```sh
  npm install
```

3. Ask team to produce the .env.local file with settings and place it in the project root.

4. Start project

```sh
  npm run dev
```

<!-- SCRIPTS -->

## Provided scripts

```sh
npm run dev
```

Start local development server

```sh
npm run build
```

Build project in production mode for further deployment

```sh
npm run format:fix
```

Reformat source code & configs to match `Prettier` settings

```sh
npm run lint
```

Check source code with `ESLint`. Exit with non-zero return code after the first found warning (useful for CI/CD)

```sh
npm run lint:fix
```

Automatically fix all auto-fixable errors & warnings with `ESLint`

```sh
npm run typecheck
```

Perform TypeScript typechecking of source code with `tsc` (TypeScript Compiler)

```sh
npm run preview
```

Locally preview the production build

```sh
npm run prepare
```

Runs automatically after package installation to install Husky hooks

```sh
npm run test
```

Runs tests with Vitest and displays coverage of implemented tests
