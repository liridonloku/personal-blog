# Personal Blog

This is the Front End code for my personal blog.

The code for the Blog Editor is here: [personal-blog](https://github.com/liridonloku/blog-editor)

And the code for the API is here: [blog-backend](https://github.com/liridonloku/blog-backend)

## [Live Preview](https://personal-blog-liridonloku.vercel.app)

<hr>

<br>

## Three Part Project

This project is split in 3 repositories, one for the API and two front end apps. The reason for this is to have an editing app, where I can write and publish posts, that is separate from the client app everyone else uses.

The back end is written in NodeJS with Express/Mongoose and hosted on Heroku, with an API that serves the two front end apps.It uses passportJS with JWT for authentication for restricted operations like adding new posts or publishing/unpublishing them, as well as deleting comments.

The front end apps are written in React with TypeScript and Bootstrap.
