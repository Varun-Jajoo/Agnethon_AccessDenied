# Agnethon_AccessDenied
Next.js is a framework that makes it easy to create 'universal' React apps - React apps that do both client and server side rendering.

With Next.js, React pages are automatically rendered on both client and server side, without the hassle of setting up dependancies like webpack or babel and with automatic routing and without the constraints of projects like Create React App.

This is a starter project that provides an example of how to use Next.js with Express, SASS/SCSS, Bootstrap, Reactstrap (Boostrap 4 for React), the Ionicons icon set, examples of how to include data from remote REST APIs and incorporate an authentication system that supports both oAuth and Email using Passport (a popular authentication framework for Node.js).

This project exists to make it easier to get started a creating production app in React. You are invited to use it as a reference or to copy it and use it as a base for your own projects. Contributions to improve this project are welcome.

Youtube Link : https://www.youtube.com/watch?v=b7sqD7gqH0k

Running locally in development mode
To get started, just clone the repository and run npm install && npm run dev:

git clone https://github.com/Varun-Jajoo/Agnethon_AccessDenied
npm install
npm run dev
Note: If you are running on Windows run install --noptional flag (i.e. npm install --no-optional) which will skip installing fsevents.

Building and deploying in production
If you wanted to run this site in production, you should install modules then build the site with npm run build and run it with npm start:

npm install
npm run build
npm start
You should run npm run build again any time you make changes to the site.

Note: If you are already running a webserver on port 80 (e.g. Macs usually have the Apache webserver running on port 80) you can still start the example in production mode by passing a different port as an Environment Variable when starting (e.g. PORT=3000 npm start).

DEPENDENCIES:
npm install @emailjs/browser \
    @chakra-ui/icons \
    @chakra-ui/next-js \
    @chakra-ui/react \
    @emotion/react \
    @emotion/styled \
    @fontsource/poppins \
    @fullcalendar/daygrid \
    @fullcalendar/interaction \
    @fullcalendar/react \
    @fullcalendar/timegrid \
    @headlessui/react \
    @heroicons/react \
    @next/font \
    antd \
    axios \
    bootstrap \
    emailjs \
    firebase \
    framer-motion \
    next \
    react \
    react-calendar \
    react-countup \
    react-dom \
    react-icons \
    react-intersection-observer \
    react-modal-video \
    react-slick \
    react-typed \
    recharts \
    sass \
    slick-carousel \
    wowjs
