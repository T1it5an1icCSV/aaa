import React, {useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AppContext} from "../App";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {useLocation, useNavigate} from "react-router-dom";

const Item = (props) => {
    const context = React.useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.pathname);

    const onClickAdd = () => {
        const {id, myId, name: name, description: description, price: price, url:url} = props;
        props.onPlus({id, myId, name, description, price, url});
    }

    const onClickAddToFavorite = () => {
        const {id, myId, name:name, description:description, price:price, url:url} = props;
        props.onPlusFavorite({id, myId, name, description, price, url});
    }

    const onRedirectAbout = () => {
        context.setAbout(props.item);
        console.log("О товаре");
        return (
            navigate('/about')
        )
    }
    return (
        <div className="col-md-3 mb-2">
            <Card style={{ width: '20rem'}}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.price} руб
                    </Card.Text>
                    {
                        context.isAdded(props.myId) ? (
                            <Button variant="danger" onClick={onClickAdd}>
                                Удалить
                            </Button>):(
                            <Button onClick={onClickAdd}>
                                Добавить
                            </Button>
                        )
                    }
                    <Button onClick={onClickAddToFavorite} variant="outline-primary" className="mr-2">
                        {
                            context.isAddedToFavorite(props.myId) ? <AiFillHeart size="1.5em"/> : <AiOutlineHeart size="1.5em"/>
                        }
                    </Button>
                    <br/>
                    <Button variant="link" onClick={onRedirectAbout}>О товаре</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Item;



// Импортируем необходимые библиотеки и компоненты
//import React, { useContext } from 'react';
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
//import { AppContext } from "../App"; // Импортируем контекст приложения
//import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; // Импорт иконок
//import { useLocation, useNavigate } from "react-router-dom"; // Хуки для работы с маршрутизацией

// Определяем компонент Item
//const Item = (props) => {
    // Получаем доступ к контексту приложения
  //  const context = useContext(AppContext); 
    //const navigate = useNavigate(); // Хук для навигации
   // const location = useLocation(); // Хук для получения текущего местоположения

    // Логируем текущий путь для отладки
  //  console.log(location.pathname);

    // Функция для обработки добавления товара (или удаления, если он уже добавлен)
    //const onClickAdd = () => {
      //  const { id, myId, name, description, price, url } = props; 
        //props.onPlus({ id, myId, name, description, price, url }); // Вызываем родительскую функцию для добавления/удаления
   // };

    // Функция для добавления товара в избранное
   // const onClickAddToFavorite = () => {
     //   const { id, myId, name, description, price, url } = props; 
       // props.onPlusFavorite({ id, myId, name, description, price, url }); // Вызываем родительскую функцию для добавления в избранное
 //   };

    // Функция для перехода на страницу с подробной информацией о товаре
   // const onRedirectAbout = () => {
     //   context.setAbout(props.item); // Устанавливаем текущий товар в контекст
       // console.log("О товаре"); // Логируем для отладки
        //return navigate('/about'); // Навигация на страницу /about
    //};

    // Возвращаем разметку компонента
    //return (
      //  <div className="col-md-3 mb-2">
        //    <Card style={{ width: '20rem' }}>
          //      <Card.Body>
                //                  <Card.Title>{props.name}</Card.Title> {/* Название товара */}
                //  <Card.Text>
                //                      {props.price} руб {/* Цена товара */}
                //  </Card.Text>
                //  {
                  //      context.isAdded(props.myId) ? ( // Проверяем, добавлен ли товар
                    //        <Button variant="danger" onClick={onClickAdd}>
                      //          Удалить {/* Кнопка для удаления товара из списка */}
  ////                      //    </Button>
        //                ) : (
      //                      <Button onClick={onClickAdd}>
          //                      Добавить {/* Кнопка для добавления товара в список */}
            //                </Button>
              //          )
                //    }
                  //  <Button onClick={onClickAddToFavorite} variant="outline-primary" className="mr-2">
                    //    {
                      //      context.isAddedToFavorite(props.myId) ? 
                        //    <AiFillHeart size="1.5em" /> : // Если товар уже в избранном, отображаем заполненное сердечко
  //                          <AiOutlineHeart size="1.5em" /> // Иначе отображаем пустое сердечко
    //                    }
      //              </Button>
        //            <br />
          //          <Button variant="link" onClick={onRedirectAbout}>О товаре</Button> {/* Кнопка для перехода к информации о товаре */}
                    //</Card.Body>
                //</Card>
            //    </div>
  //  );
//}

// Экспортируем компонент Item
//export default Item;
