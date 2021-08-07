import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

function mount(HtmlElement) {
    ReactDOM.render(
        <App />, HtmlElement
    )
};

if (process.env.NODE_ENV === "development") {
    const marketingDevRoot = document.querySelector('#marketing__root-dev');

    if(marketingDevRoot) mount(marketingDevRoot);
}

export { mount };