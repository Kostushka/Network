import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let nameData = [
    {id: 1, name: 'Nastya'},
    {id: 2, name: 'Tanya'},
    {id: 3, name: 'Masha'},
    {id: 4, name: 'Andrey'},
    {id: 5, name: 'Sveta'},
    {id: 6, name: 'Lena'},
];

let messageData = [
    {id: 1, message: 'Hi! How are you?'},
    {id: 2, message: 'Hello. I am fine. And you?'},
    {id: 3, message: 'I am eating ice cream!:) Mmmm...'},
    {id: 4, message: 'Hi!'},
    {id: 5, message: 'Hi!'}
];


let postData = [
    {id: 1, message: 'Hi, my friend!', likeCount: '15'},
    {id: 2, message: 'It is my first post', likeCount: '20'},
    {id: 3, message: 'It is my second post', likeCount: '10'},
    {id: 4, message: 'It is my third post', likeCount: '0'},
    {id: 5, message: 'It is my fourth post', likeCount: '5'}
];



ReactDOM.render(
  <React.StrictMode>
    <App name={nameData} message={messageData} post={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
