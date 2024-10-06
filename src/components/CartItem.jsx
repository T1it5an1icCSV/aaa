import React, { useContext, useState } from 'react';
import { AppContext } from '../App.jsx';
import Item from './Item';
import { motion } from 'framer-motion';
import { VscVariableGroup } from 'react-icons/vsc';

const CartItem = () => {
    const context = useContext(AppContext);

    const [selectedCategory, setSelectedCategory] = useState('all');

    const onSearch = (inputValue) => {
        context.setSearch(inputValue.target.value);
    };

    const filteredItems = context.card.filter((item) => selectedCategory === 'all' || item.category === selectedCategory);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <div className="container mt-3">
                <h1>Каталог</h1>
                <div className="row">
                    <div className="search-container col-md-4">
                        <input
                            onChange={onSearch}
                            placeholder="Поиск"
                            className="search-input"
                        />
                    </div>
                    <div className="select-container col-md-4">
                        <select onChange={handleCategoryChange} className="category-select">
                            <option value="all">Все</option>
                            <option value="electronics">Смартфоны</option>
                            <option value="appliance">Бытовая техника</option>
                            <option value="PC">Компьютеры</option>
                            
                            <option value="audio">Аудиотехника</option>
                        </select>
                    </div>
                </div>
                <div className="row mt-3">
                    {
                        filteredItems
                            .filter((item) => item.name.toLowerCase().includes(context.search.toLowerCase()))
                            .map((obj) => {
                                return (
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
                                );
                            })
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default CartItem;






//
//import React, { useContext, useState } from 'react'; // Импортируем необходимые библиотеки
//import { AppContext } from '../App.jsx'; // Импортируем контекст приложения
//import Item from './Item'; // Импортируем компонент Item
//import { motion } from 'framer-motion'; // Импортируем библиотеку для анимаций
//
//const CartItem = () => {
  //  const context = useContext(AppContext); // Получаем контекст приложения

    //const [selectedCategory, setSelectedCategory] = useState('all'); // Хранит состояние выбранной категории

    // Обрабатываем изменение в поле поиска
    //const onSearch = (inputValue) => {
      //  context.setSearch(inputValue.target.value); // Устанавливаем значение поиска в контексте
    //};

    // Фильтруем товары по выбранной категории
    //const filteredItems = context.card.filter((item) => 
      //  selectedCategory === 'all' || item.category === selectedCategory
    //);

    // Обрабатываем изменение выбранной категории
    //const handleCategoryChange = (event) => {
      //  setSelectedCategory(event.target.value); // Устанавливаем выбранную категорию
    //};

    //return (
      //  <motion.div
        //    initial={{ opacity: 0, y: 50 }} // Начальные стили для анимации
 //           animate={{ opacity: 1, y: 0 }} // Стиль при анимации
   //         transition={{ duration: 0.5 }}> // Параметры анимации
     //       <div className="container mt-3">
       //         <h1>Каталог</h1> {/* Заголовок страницы */}
         //       <div className="row">
           //         <div className="search-container col-md-4"> 
             //           <input
               //             onChange={onSearch} // Обрабатываем ввод в поле поиска
                 //           placeholder="Поиск" // Плейсхолдер для поля поиска
                   //         className="search-input" // CSS класс для стилизации
                     //   />
                    //</div>
 //                   <div className="select-container col-md-4">
   //                     <select onChange={handleCategoryChange} className="category-select">
     //                       {/* Опции выбора категории */}
       //                     <option value="all">Все</option>
         //                   <option value="electronics">См Smartphones</option>
           ////                 <option value="appliance">Бытовая техника</option>
               //             <option value="PC">Компьютеры</option>
                 //           <option value="audio">Аудиотехника</option>
                   //     </select>
  //                  </div>
    //            </div>
      ////          <div className="row mt-3">
          //          {
            //            filteredItems // Отображаем отфильтрованные товары
              //              .filter((item) => item.name.toLowerCase().includes(context.search.toLowerCase())) // Фильтруем по имени с учетом ввода в поле поиска
                //            .map((obj) => { // Перебираем отфильтрованные товары
                  //              return (
                    //                <Item
                      //                  key={obj.id} // Уникальный ключ для каждого элемента списка
                        //                id={obj.id}
                          //              myId={obj.myId}
                            //            name={obj.name}
                              //          price={obj.price}
                                //        description={obj.description}
                                  //      url={obj.url}
                                    //    item={obj}
                                      //  onPlus={(obj) => context.onAddOverlay(obj)} // Обработчик для добавления в корзину
  //                                      onPlusFavorite={(obj) => context.onAddFavorite(obj)} // Обработчик для добавления в избранное
    //                                />
      //                          );
        //                    })
          //          }
            //    </div>
            //</div>
  //      </motion.div>
   // );
//};

//export default CartItem; // Экспортируем компонент для использования в других частях приложения

