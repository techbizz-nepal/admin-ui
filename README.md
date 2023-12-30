This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Starting the Server

Starting the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

## Linter & Formatters
* `.eslintrc.json`- Linting Rules
  * JavaScrip Styles - [Airbnb](https://github.com/airbnb/javascript)
  * TypeScript Styles - [typescript-eslint](https://typescript-eslint.io/rules/)
* `.eslintignore` - Exclude files/folders to be checked by eslint
* `prettier.config.js`- Formatting rules
  * [Prettier Reference](https://prettier.io/docs/en/options.html)
* `.prettierignore` - Exclude files/folders to be checked by prettier
* `.editorconfig` - Editor configurations
  * [Specification](https://spec.editorconfig.org/)
* `.commitlint.config.js` - Commit message semantics
  * [Rules Reference](https://commitlint.js.org/#/reference-rules)
* `tsconfig.json` - TypeScript Compilation Rules

```bash
# Check for linting errors
npm run lint

# To fix violated lints
npm run lint --fix

# Check formatting errors
npm run format:check

# Fix formatting errors
npm run format:write
```

### Commit Hooks
[Husky Documentation](https://typicode.github.io/husky/)

## Tailwind
Update configuration at `tailwind.config.js`

[Tailwind Documentation](https://tailwindcss.com/docs/installation)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
