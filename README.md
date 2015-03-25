FluxZ-YARSK
================
![FluxZ-YARSK](http://i.imgur.com/BnsU1Hs.png)

A simple (non isomorphic) starter kit using React, Flux(vanilla) and React Router. The project's build system uses Gulp, Webpack, Babel, and Less. 

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

1. Component triggers an event, calls `AppActions.myEventNameHere(myPayloadVariable`);

2. `AppAction` has function to handle `myEventNameHere(myPayloadVariable)`, in it calls `AppDispatcher.handleViewAction` and passing in the action type(Which is one of the predefined AppConstants) and the payload `myPayloadVariable`

3. `AppDispatcher` has defined a function `handleViewAction` that takes an action, and calls `this.dispatch` and passing the action along

4. In `AppStore`, dispatcher registers the payload, and performs switch-case on the `AppConstant (event type)` and calls the necessary function as needed to perform the action.  Emitting an event as needed to tell the app what's going on
