# Next.js & HeroUI Project

This is an application built using Next.js 14 (pages directory) and HeroUI (v2).

[Try it on CodeSandbox](https://githubbox.com/heroui-inc/next-pages-template)

> Note: Since Next.js 14, the pages router is recommend migrating to the [new App Router](https://nextjs.org/docs/app) to leverage React's latest features
>
> Read more: [Pages Router](https://nextjs.org/docs/pages)

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [HeroUI](https://heroui.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)
- [next-themes](https://github.com/pacocoursey/next-themes)

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@heroui/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

Licensed under the [MIT license](https://github.com/heroui-inc/next-pages-template/blob/main/LICENSE).
