import { login } from './login';
console.log(require('../config/config.json').appLoadedMessage);

login('admin', 'not radical');

const img = document.createElement('img');

img.style.height = '25%';
img.style.width = '25%';
img.src = require('../images/webpack_logo.png');

document.querySelector('#img-container').appendChild(img);
$('#test-div').text('jQuery modified this content'); // eslint-disable-line no-undef

console.log('App loaded');

require('../css/bootstrap.css');
require('../css/app.scss');

// React stuff
const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component { // eslint-disable-line no-unused-vars
    constructor(props) {
        super(props);

        this.state = { date: new Date() };
    }

    render() {
        return (
            <pre>{this.state.date.toString()}</pre>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#react-container'));
