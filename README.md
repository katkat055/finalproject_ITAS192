# kg_finalproject

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit:dev # or `npm run test:unit` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

## How I ran e2e and unit tests for cypress
1. npm run dev
2. add a new terminal
3. npx cypress open

# Idea
This project is a daily to do list that gives you a new quote, its author, and a picture when you click on the button "Get New Quote". It also allows you to add items and a time to a to do list which gets stored in local storage and allows you to delete the item when you click the trash can icon. I got this idea because when I was looking for APIs there were a lot that had pictures and quotes. Whenever I think about insporational quotes I associate it with productivity so I made a to do app. 

# References
- https://v2.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html?redirect=true
- https://dev.to/techsolutionstuff/vue-js-get-current-date-and-time-3f30
- https://vuejs.org/guide/essentials/list.html
- https://v2.vuejs.org/v2/cookbook/client-side-storage.html
- https://stackoverflow.com/questions/59835695/vuejs-remove-item-from-array

# If I had more time/features I want to add
- A complete function to add it into a new list called complete or add a line through it
- I would also add multiple dates that allows users to look back at what they had/completed instead of having to delete everything
- I would have a clear function that deletes all items instead of having to delete them one by one

# Feedback
I had a difficult time learning JavaScript because I do not learn well with slides and prefer hands on work. We had labs that helped me understand the concepts better but I also found them hard to do with the lack of demonstration on the slides. When learning Java, Allan went over code with us as we typed them on vscode and explained how the code worked and how to add them with other code etc. I find it easier to learn that way but other than that the class was great and I learned a lot.