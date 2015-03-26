var React = require('react/addons');

import SampleES6 from './SampleES6';
import Catalog from './Catalog';
import GriddleSample from './GriddleSample';

var SampleIndex = React.createClass({

    getDefaultProps: function() {
        return {
            foo: 'bar'
        }
    },
    
    render: function () {
        return (
                <div className="col-lg-12 col-xs-12 col-md-12">
                    <h2>FluxZ-YARSK</h2>
                    <p>This is a simple (non isomorphic) starter kit using React, Flux(vanilla), Bootstrap and React Router.  The project's build system uses Gulp, Webpack, Babel</p>
                    <p>This project aims to create a simple REACT + Flux starter kit to quickly jump start your app.  It includes sample components and pattern demonstrations for common use cases.</p>
                    <div className="well well-sm">Download: git clone <a href="https://github.com/yongzhihuang/FluxZ-YARSK" target="_blank">https://github.com/yongzhihuang/FluxZ-YARSK</a></div>
                    <div className="well well-sm">Author: Yongzhi Huang (<a href="https://twitter.com/whyzhi" target="_blank">@whyzhi</a>)</div>
                    <hr />

                    <h2>Directory Structure</h2>
                    <p>Todo...</p>
                    <hr />

                    <h2>React</h2>
                    <img className="thumbnail" src="http://facebook.github.io/react/img/logo.svg" width="110" />
                    <p>React is an excellent library to build user interfaces with.  It will give you a whole new perspective on how to structure your apps and make building UIs super FUN!  Rather than telling you about it, I rather send you to its page where you can read all about it: <a href="http://facebook.github.io/react/" target="_blank">http://facebook.github.io/react/</a>. Oh and don't forget to checkout the <a href="/resources">resources</a> page for excellent community resources.</p>
                    <hr />

                    <h2>Flux</h2>
                    <img className="thumbnail" src="http://facebook.github.io/flux/img/flux_logo.svg" />
                    <p>Flux is the application architecture that Facebook uses for building client-side web applications. It complements React's composable view components by utilizing a unidirectional data flow. It's more of a pattern rather than a formal framework, and you can start using Flux immediately without a lot of new code. Visit <a href="http://facebook.github.io/flux/docs/overview.html#content" target="_blank">http://facebook.github.io/flux/docs/overview.html#content</a> to learn more</p>
                    <p>This starter kit uses vanilla Flux, but if you're interested in other implementations of Flux such as Fluxxor, Reflux, Alt, etc checkout <a href="https://github.com/voronianski/flux-comparison" target="_blank">https://github.com/voronianski/flux-comparison</a></p>
                    <hr />

                    <h2>Babel (formerly 6to5)</h2>
                    <img className="thumbnail" src="https://babeljs.io/images/logo.svg" width="110"/>
                    <p>Babel will turn your ES6+ code into ES5 friendly code, so you can start using it right now without waiting for browser support. <a href="https://babeljs.io/docs/learn-es6/" target="_blank">Learn more</a></p>
                    <hr />


                    <h2>Webpack</h2>
                    <img className="thumbnail" src="https://avatars1.githubusercontent.com/u/2105791?v=3&s=110" />
                    <p>Webpack is a module bundler.  Webpack takes modules with dependencies and generates static assets representing those modules.<a href="http://webpack.github.io/docs/what-is-webpack.html" target="_blank">Learn more</a></p>
                    <hr />

                    <h2>React Router</h2>
                    <p>This starter kit uses React Router to do its routing.  React Router was inspired by Ember Router and has grown to be an unofficial React Router for the community, check it out: <a href="https://github.com/rackt/react-router" target="_blank">https://github.com/rackt/react-router</a></p>
                    <hr />


                    <h2>CSS</h2>
                    <p>This boilerplate uses LESS, and closely follow Medium guideline for how to properly do maintainable stylesheets: <a href="https://gist.github.com/fat/a47b882eb5f84293c4ed" target="_blank">https://gist.github.com/fat/a47b882eb5f84293c4ed</a></p>
                    <hr />

                    <h2>Contact</h2>
                    <p>Comments, feedback? <a href="https://twitter.com/whyzhi" target="_blank">@whyzhi</a></p>
                    <hr />
                </div>
        );
    }

});

module.exports = SampleIndex;
