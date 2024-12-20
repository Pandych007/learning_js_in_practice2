import React from 'react';
// import React from 'react';: Эта строка импортирует библиотеку React из модуля 'react'. 
// React - это библиотека JavaScript, которая используется для создания пользовательских интерфейсов.
// Она предоставляет мощные инструменты для работы с виртуальным DOM и компонентами.

const StarRating = ({ rating }) => {

  //const StarRating = ({ rating }) => {: Эта строка определяет функциональный компонент StarRating.
  //  Он принимает объект props, 
  // из которого извлекается свойство rating с помощью синтаксиса деструктуризации.
  const stars = [];
//const stars = [];: Создается пустой массив stars, в который будут добавляться 
//элементы для отображения звезд рейтинга.
  for (let i = 0; i < 5; i++) {
    //for (let i = 0; i < 5; i++) {: Начинается цикл for, 
    //который итерируется от 0 до 4 (включительно), чтобы создать 5 звезд.
    if (i < rating) {
//if (i < rating) {: Внутри цикла проверяется, меньше ли текущий индекс i чем значение rating. 
//Это используется для определения, должна ли звез
      stars.push(<span key={i}>★</span>);
    } else {

      stars.push(<span key={i}>☆</span>);
    }
  }

  return <div>{stars}</div>;
};


export default StarRating;
