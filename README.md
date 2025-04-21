# project-luth

Full stack web application for a startup business idea

<https://project-luth-client.vercel.app/>

TODO:

- Implement next-intl internationalization when a stable version is released taht solves the current issues with turbopack and app router. Momentarily on version 3.10.0 and Next 14.1.0 a custom locale switch does not pick up translations and HMR is slow with turbo experimental enabled.
- Configure module federation on common package when next app router support is stable.

FIXME:

- ESlint root config gives parser errors, created workaround to ignore base config and set `root: true` in each project. When a stable version of ESlint 9 is released, remove the workaround.

## Project Structure

The project is build using a monorepo setup which is using TurboRepo as solution. In combination with **yarn** workspaces are defined in the following folders. Within the **apps** folder the following projects are managed:

- Client: This is the frontend application of the platform written in NextJS
- Server: This is the backend application of the platform written in NodeJS/Express
- Common: The React-Three-Fiber experience that can be consumed as a MFE

Additionally publishable packages are managed within the **packages** folder which can be referenced from the dependencies. These include:

- Core: The main package with all sharable generic code that mainly includes Shadcn UI components, helpers and themes.
- Icons: That reference and extend an icon set library.
- Tokens: Design tokens that can be implemented for maintaining styles.
- Shared: Other sharable code, such as models and contracts between client and api.

An **sandbox** workspace has been created to test code and changes in a CRA (create-react-app).

### Managing dependencies

Each workspace contains an own version of the package.json where dependencies are managed. The root handles the developer dependencies that are needed to run and compile all projects. When bumping versions of dependencies use `yarn deps` to use manypkg and depscheck to ensure a proper monorepo dependency setup.

## Get Started

### Running the application

### Running in Docker
