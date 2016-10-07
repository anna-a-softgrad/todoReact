import React from "react";
import ReactDOM from 'react-dom';
import {Component} from "react";

import './style.css';

var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
  }
];

let Comments = React.createClass({
	render: function() {
		return (
			<div className="comments">
				Комментировать нечего :)
			</div>
			)
	}
})

let News = React.createClass({
  render: function() {
    return (
      <div className="news">
        К сожалению, новостей нет.
      </div>
    );
  }
});

let App = React.createClass({
  render: function() {
    return (
      <div >
        Всем привет, я компонент App!
    	<News data={my_news} /> {/*добавили свойство data */}
        <Comments />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);