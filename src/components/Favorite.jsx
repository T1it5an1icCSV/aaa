import React, { useContext } from 'react';
import { AppContext } from '../App.jsx';
import Item from './Item.jsx';
import { motion } from 'framer-motion';

const Favorite = () => {
    const context = useContext(AppContext);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}>
            <div className="container">
                <div className="my-3"><h1>Избранное</h1></div>

                {context.favorite.length > 0 ? (
                    <div className="row">
                        {context.favorite.map((obj) => (
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
                                onPlusFavorite={(obj) => context.onAddFavorite(obj)}
                            />
                        ))}
                    </div>
                ) : (
                    <h1>Пусто</h1>
                )}
            </div>
        </motion.div>
    );
};

export default Favorite;


/* 






import React, { useContext } from 'react'; // Импортируем необходимые библиотеки и хуки
import { AppContext } from '../App.jsx'; // Импортируем контекст приложения для доступа к данным
import Item from './Item.jsx'; // Импортируем компонент Item для отображения избранных товаров
import { motion } from 'framer-motion'; // Импортируем библиотеку для анимаций

const Favorite = () => {
    const context = useContext(AppContext); // Получаем данные контекста приложения

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Начальные стили для анимации: непрозрачность 0 и смещение по оси Y
            animate={{ opacity: 1, y: 0 }} // Анимация: конечное состояние с полной непрозрачностью и без смещения
            transition={{ duration: 0.2 }}> // Длительность анимации
            <div className="container">
             //   <div className="my-3"><h1>Избранное</h1></div> {/* Заголовок страницы */

  /*               {context.favorite.length > 0 ? ( // Проверяем, есть ли избранные товары
                    <div className="row">
                        {context.favorite.map((obj) => ( // Перебираем массив избранных товаров
                            <Item
                                key={obj.id} // Уникальный ключ для каждого элемента списка
                                id={obj.id}
                                myId={obj.myId}
                                name={obj.name}
                                price={obj.price}
                                description={obj.description}
                                url={obj.url}
                                item={obj}
                                onPlus={(obj) => context.onAddOverlay(obj)} // Обработчик для добавления товара в.overlay
                                onPlusFavorite={(obj) => context.onAddFavorite(obj)} // Обработчик для добавления в избранное
                            />
                        ))}
                    </div>
                ) : (
                    <h1>Пусто</h1> // Сообщение, если избранные товары отсутствуют
                )}
            </div>
        </motion.div>
    );
};

export default Favorite; // Экспортируем компонент для использования в других частях приложения

 */ 