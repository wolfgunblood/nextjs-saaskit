<h1 align="center">Next.js SaaS kit</h1>
<!-- 
![](https://img.shields.io/badge/contributors-1-white)
![](https://img.shields.io/badge/commits-20-white)
![](https://img.shields.io/badge/test%20coverage-96%25-brightgreen)
![](https://img.shields.io/badge/open%20source-true-brightgree) -->

## Motivation

Implementing authentication in Next.js, especially Email+Password authentication and Oauth, can be challenging. 
No more hassle with user management. No more hassle for payment integrations.No more building a landing page from scratch.
A done for you starter kit


## Key Features

- **Stack Authentication:** 💼 Support for Credential and OAuth(google,github) authentication.
- **Authorization:** 🔒 Easily manage public and protected routes within the `app directory`.
- **Email Verification:** 📧 Verify user identities through email.
- **Password Reset:** 🔑 Streamline password resets by sending email password reset links.
- **Lemonsqueezy Payment:** 💳 Setup user subscriptions seamlessly with stripe.
- **Turso Database:** 🛢️ Utilize a turso database set up.
- **Drizzle ORM:** 🛢️ Utilize a Drizzle ORM.

## Tech Stack

- [Next.js](https://nextjs.org)
- [Clerk Auth](https://clerk.com/)
- [Stack Auth](https://stack-auth.com/)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn UI](https://ui.shadcn.com/)
- [React Hook Form](https://www.react-hook-form.com/)

## Get Started

1. `npx nextjs-saaskit`
2. `cd projectName`
3. Copy `.env.loc` to `.env.local`
4. Copy `.env.example` to `.env`
5. Update env variables
6. Run `pnpm install` to install dependencies.
7. Execute `npm dev` to start the development server and enjoy!

## Roadmap

- [ ] Stripe Integration
- [ ] Resend Integration
- [ ] Prisma Integration


## Contributing

To contribute, fork the repository and create a feature branch. Test your changes, and if possible, open an issue for discussion before submitting a pull request. Follow project guidelines, and welcome feedback to ensure a smooth integration of your contributions. Your pull requests are warmly welcome.
