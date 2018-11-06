import React from 'react';
import ReactDOM from 'react-dom';
import 'index.scss';
import App from 'App';
import store from 'middleware/store';

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
