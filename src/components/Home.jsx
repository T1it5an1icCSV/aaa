import { useContext} from 'react';
import {AppContext} from "../App.jsx";
import Item from "./Item.jsx";
import {motion} from "framer-motion";


const Home = () => {
    const context = useContext(AppContext);
    const items = context.card.slice(0, 10);
    console.log(items);
    return(
        <motion.div
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}>
            <div className="container">
                <h1 className="my-3">Samsung</h1>
                <h4>Авторизованный фирменный магазин</h4>
                <div className="row mt-3">
                    {items.map((obj) => {
                        return(
                            <Item
                                key={obj.id}
                                id={obj.id}
                                myId={obj.myId}
                                name={obj.name}
                                description={obj.description}
                                price={obj.price}
                                url={obj.url}
                                item={obj}
                                onPlus={(cartObj) => context.onAddOverlay(cartObj)}
                                onPlusFavorite={(cartObj) => context.onAddFavorite(cartObj)}
                                />
                        )
                    })}
                </div>
            </div>
        </motion.div>
    )

}

export default Home;








//import { useContext } from 'react'; // Импортируем хук useContext из React
//import { AppContext } from "../App.jsx"; // Импортируем контекст приложения для доступа к данным
//import Item from "./Item.jsx"; // Импортируем компонент Item для отображения товаров
//import { motion } from "framer-motion"; // Импортируем библиотеку для анимаций

//const Home = () => {
  //  const context = useContext(AppContext); // Получаем доступ к данным из контекста приложения
    //const items = context.card.slice(0, 10); // Извлекаем первые 10 товаров из массива товаров
    //console.log(items); // Логируем извлеченные товары для отладки

  //  return (
    //    <motion.div
      //      initial={{ opacity: 0, y: 100 }} // Начальные стили анимации: непрозрачность 0 и смещение по оси Y
        //    animate={{ opacity: 1, y: 0 }} // Конечные стили: полная непрозрачность и без смещения
          //  transition={{ duration: 0.5 }}> // Длительность анимации
            //<div className="container">
 //               <h1 className="my-3">Samsung</h1> {/* Заголовок страницы */}
   //             <h4>Авторизованный фирменный магазин</h4> {/* Подзаголовок с описанием магазина */}
     //           <div className="row mt-3"> {/* Создаем строку для размещения товаров */}
       //             {items.map((obj) => { // Перебираем массив товаров
         //               return (
           //                 <Item
             //                   key={obj.id} // Уникальный ключ для каждого товара
               //                 id={obj.id} 
                 //               myId={obj.myId} 
                   //             name={obj.name} 
                     //           description={obj.description} 
                       //         price={obj.price} 
                         //v       url={obj.url} 
                          //      item={obj} 
                            //    onPlus={(cartObj) => context.onAddOverlay(cartObj)} // Обработчик для добавления товара в корзину
                              //  onPlusFavorite={(cartObj) => context.onAddFavorite(cartObj)} // Обработчик для добавления в избранное
                           // />
//                        );
  //                  })}
    //            </div>
      //      </div>
   //     </motion.div>
    //);
//}

//export default Home; // Экспортируем компонент Home для использования в других частях приложения

