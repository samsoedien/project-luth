# project-luth

Full stack web application for a startup business idea

<https://project-luth-client.vercel.app/>

TODO:

- Implement next-intl internationalization when a stable version is released taht solves the current issues with turbopack and app router. Momentarily on version 3.10.0 and Next 14.1.0 a custom locale switch does not pick up translations and HMR is slow with turbo experimental enabled.

FIXME:

- ESlint root config gives parser errors, created workaround to ignore base config and set `root: true` in each project. When a stable version of ESlint 9 is released, remove the workaround.
