import React from "react";
import ReactDOM from 'react-dom';
import {Component} from "react";

import './style.css';

var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четчерг, четвертого числа...',
    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
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

let Article = React.createClass({
	propTypes: {
		data: React.PropTypes.shape({
			author: React.PropTypes.string.isRequired,
			text: React.PropTypes.string.isRequired,
			bigText: React.PropTypes.string.isRequired
		})
	},

	getInitialState: function() {
	    return {
	    	visible: false
	    };
  	},

  	readmoreClick: function(e) {
	    e.preventDefault();
	    this.setState({visible: true});
  	},

	render: function() {
    	var author = this.props.data.author,
        	text = this.props.data.text,
        	bigText = this.props.data.bigText,
 			    visible = this.state.visible;

	    return (
    		<div className="article">
        		<p className="newsAuthor">{author}:</p>
        		<p className="newsText">{text}</p>
        		<a href="#" 
        			onClick={this.readmoreClick} 
        			className={'newsRreadMore ' + (visible ? 'none' : '')}>
        			Подробнее
        		</a>
        		<p className={'newsBigText ' + (visible ? '' : 'none')}>
        			{bigText}
        		</p>
      		</div>
    	)
  	}
});

let News = React.createClass({
	propTypes: {
    	news: React.PropTypes.array.isRequired
  	},
  	
  	getInitialState: function() {
	    return {
	    	counter: 0
	    };
  	},

  	newsCountClick: function(e) {
  		this.setState({
  			counter: ++this.state.counter
  		})
  	},

  	render: function() {
	  	var data = this.props.news,
	  		counter = this.state.counter,
	    	newsTemplate; 

	    if(data.length > 0) {
		    newsTemplate = data.map(function(item, index) {
		  		return (
		  			<div key={index}>
						<Article data={item} />
					</div>
		  		)
			})
		} else {
			newsTemplate = <p>К сожалению новостей нет</p>
		}

		return (
			<div className="news">
				{newsTemplate}
				<strong 
					onClick={this.newsCountClick} 
					className={'newsCount' + (data.length > 0 ? '':'none')}>
					Всего новостей: {counter}
				</strong>
			</div>
		)
  	}
});

let Hello = React.createClass({
	render: function() {
		return (
			<div className="hello">
				ЗАДАРООООВААА!!! =)
			</div>
		)
	}
})

let Add = React.createClass({
  componentDidMount: function() {
    ReactDOM.findDOMNode(this.refs.author).focus();
  },
  onCheckRuleClick: function(e) {
  	ReactDOM.findDOMNode(this.refs.alert_button).disabled = !e.target.checked;
  },
  onBtnClickHandler: function(e) {
	  e.preventDefault();
	  var author = ReactDOM.findDOMNode(this.refs.author).value;
	  var text = ReactDOM.findDOMNode(this.refs.text).value;
	  alert(author + '\n' + text);
	},
  render: function() {
    return (
      <form className='add cf'>
        <input
          type='text'
          className='add__author'
          defaultValue=''
          placeholder='Ваше имя'
          ref='author'/>
        <textarea
          className='add__text'
          defaultValue=''
          placeholder='Текст новости'
          ref='text'>
         </textarea>
        <label className='add__checkrule'>
          <input type='checkbox' 
          defaultChecked={false} 
          ref='checkrule' 
          onChange={this.onCheckRuleClick} />
          	Я согласен с правилами
        </label>
        <button
          className='add__btn'
          ref='alert_button'
          onClick={this.onBtnClickHandler}
          >
          Добавить новость
        </button>
      </form>
    );
  }
});

let App = React.createClass({
	getInitialState: function() {
	    return {
	    	news: {my_news}
	    };
  	},

	componentDidMount: function() {
    /* Слушай событие "Создана новость"
      если событие произошло, обнови this.state.news
    */
  	},

	componentWillUnmount: function() {
	  /* Больше не слушай событие "Создана новость" */
	},
  	render: function() {
    	return (
	      	<div className="app">
	        	<Add />
	        	<News news={this.state.news} />
	      	</div>
    	)
  	}
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);