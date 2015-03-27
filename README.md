FluxZ-YARSK
================
![FluxZ-YARSK](http://i.imgur.com/BnsU1Hs.png)

A simple (non isomorphic) starter kit using React, Flux(alt) and React Router. The project's build system uses Gulp, Webpack, Babel for ES6. 

This is being actively updated, feedbacks welcome: @whyzhi on Twitter

##Demo
Check it out in action here: http://yongzhihuang.com/fluxzyarsk

## Setup

Install dependencies:

`npm install`

Building:

`gulp` then head over to `http://localhost:1337/`

Linting with jshint:

`gulp jshint`

### Set Menu and Site Information
Edit src/js/components/AppRoot.js file and change the variable under Site Options

##Production
files are built to dist directory, just upload the content there to a server and bam, it works!

##Style Guide
This boilerplate uses LESS, and closely follow Medium guideline for how to properly do maintainable stylesheets: https://gist.github.com/fat/a47b882eb5f84293c4ed


##Tests:
Testing is done with Jest, put tests in __test__ folder and then type `npm test`

##About Flux:
Read more about flux here: https://facebook.github.io/flux/docs/overview.html#content

Here's a tldr; of a sample Flux flow:

1. A user triggers an action on a view.

2. The view passes this action to an App Action listener/handler (actions/AppAction.js).

3. App Action calls the dispatcher with information about Action Type along with any necessary data.

4. App store checks the message dispatched to it, performs actions needed with that data, then emits an event to any view listening to the event.  The view is finally updated.
