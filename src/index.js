import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Left from './components/Left'

const json = [{
    'ids': 1,
    'title': '工程研发部门',
    'sub': [
        {
            'title': 'Mac开发工程师',
            'checked': false
        }, {
            'title': 'iOS App 测试工程师',
            'checked': false
        }, {
            'title': 'Android 远程控制工程师',
            'checked': false
        }, {
            'title': 'Web 前端工程师',
            'checked': false
        }
    ],
    'checked': false
}, {
    'ids': 1,
    'title': '产品设计部门',
    sub: [
        {
            'title': '网页设计师',
            'checked': false
        }, {
            'title': 'ID/工业设计师',
            'checked': false
        }, {
            'title': '视觉设计师/GUI 界面设计师',
            'checked': false
        }, {
            'title': '平面设计师',
            'checked': false
        }
    ],
    'checked': false
}]

ReactDOM.render(
    <div>
        <Left datas={json}key={json.toString()} />
    </div>
    ,
    document.getElementById('root')
);
