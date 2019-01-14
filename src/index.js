import React from 'react';
import ReactDOM from 'react-dom';


//引入全局公共样式

import './stylesheets/main.scss'

//引入rem
import './modules/rem'


import App from './App';
import * as serviceWorker from './serviceWorker';

//使用react组件库 antd-mobild



//引入路由
import { BrowserRouter as Router} from 'react-router-dom'
//BrowserRouter需要做后台配置

//引入redux Previder
import store from './store'
import {Provider} from 'react-redux'


ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
