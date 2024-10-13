# В проекте используется

Nuxt 3
Pinia
Vuetify

# В проекте подключены

normalize.css
Шрифты: Noto+Serif, Inter
public\assets\images - все используемые картинки

# Stores

stores\user.js - сохранение токена (и в куки)
utils\api.js - чтение headers на наличие токена
server\api\auth\login.js - получение JWT
server\api\protected\data.js - проверка токена

server\api\about.js - данные о компании
server\api\agents.js - данные о агентах
server\api\header.js - данные о шапке сайта
server\api\products.js - данные о продуктах
server\api\reviews.js - отзывы (не взаимодействуют с проектом на данный момент)

# Config Vutify

plugins\vuetify.ts

# Middleware

middleware\auth.js - использовал защиту страницы Агенты /agentsPage

# Страницы

pages\LoginPage.vue - авторизация
pages\index.vue - домашняя страница
pages\AgentsPage.vue - страница агентов
pages\AboutPage.vue - страница о компании - она же сделана в PP и адаптив тоже

# Компоненты

components\AppAbout.vue - инфо о компании
components\AppCart.vue - карточка продукта
components\AppCartAgent.vue - карточка агента
components\AppCartCompany.vue - карточка компании
components\AppFooter.vue - подвал
components\AppHeader.vue - шапка
components\AppSelect.vue - селектор для продуктов
components\ButtonList.vue - набор кнопок

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
