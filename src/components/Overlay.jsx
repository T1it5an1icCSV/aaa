import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppContext} from "../App.jsx";
import Item from "./Item.jsx";
import {motion} from 'framer-motion';

const Overlay = () => {

    const context = useContext(AppContext);

    return(
        <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-9"><h1>Корзина</h1></div>
                    <div className="col-md-3"><h1>Итого: {context.totalPrice}</h1></div>
                </div>
                <div className="row mt-3">
                    {context.overlayItems.length > 0 ? (
                        context.overlayItems.map((obj) => (
                            <Item
                                key={obj.id}
                                id={obj.id}
                                myId={obj.myId}
                                name={obj.name}
                                price={obj.price}
                                description={obj.description}
                                url={obj.url}
                                item={obj}
                                onPlus={(obj) => context.onAddOverlay(obj)}
                                onPlusFavorite={(obj) => context.onAddFavorite(obj)}/>
                        ))
                    ) : (
                        <h1>Пусто</h1>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default Overlay;



// Импортируем необходимые библиотеки и компоненты
//import React, { useContext } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css'; // Импортируем стили Bootstrap
//import { AppContext } from "../App.jsx"; // Импортируем контекст приложения
//import Item from "./Item.jsx"; // Импортируем компонент Item для отображения товара
//import { motion } from 'framer-motion'; // Импортируем библиотеку для анимации

// Определяем функциональный компонент Overlay
//const Overlay = () => {
    // Получаем доступ к глобальному контексту приложения
  //  const context = useContext(AppContext); 

    // Возвращаем JSX разметку компонента
   // return (
     //   <motion.div
       //     initial={{ opacity: 0, y: 50 }} // Начальное состояние анимации
         //   animate={{ opacity: 1, y: 0 }} // Конечное состояние анимации
           // transition={{ duration: 0.5 }}> // Длительность анимаци//и
//            <div className="container"> {/* Контейнер для всей разметки */}
  //              <div className="row mt-3"> {/* Первая строка с заголовками */}
    //                <div className="col-md-9"><h1>Корзина</h1></div> {/* Заголовок корзины */}
      //              <div className="col-md-3"><h1>Итого: {context.totalPrice}</h1></div> {/* Общая цена */}
        //        </div>
          //      <div className="row mt-3"> {/* Вторая строка для отображения товаров в корзине */}
            //        {context.overlayItems.length > 0 ? ( // Проверяем, есть ли товары в корзине
              //          context.overlayItems.map((obj) => ( // Проходимся по массиву overlayItems
               //             <Item
                //                key={obj.id} // Уникальный ключ для каждого элемента
                  //              id={obj.id} // ID товара
                    //            myId={obj.myId} // Дополнительный идентификатор товара
                      //          name={obj.name} // Название товара
                        //        price={obj.price} // Цена товара
                          //      description={obj.description} // Описание товара
                            //    url={obj.url} // URL изображения товара
                              //  item={obj} // Передаем детальную информацию о товаре
                     //           onPlus={(obj) => context.onAddOverlay(obj)} // Обработчик добавления/удаления товара
                       //         onPlusFavorite={(obj) => context.onAddFavorite(obj)} // Обработчик добавления в избранное
                         //   />
           //             ))
             //       ) : (
               //         <h1>Пусто</h1> // Сообщение, если корзина пуста
                 //   )}
    //            </div>
      //      </div>
       // </motion.div>
    //);
//}

// Экспортируем компонент Overlay
//export default Overlay;

