import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Container, Card, Button } from 'react-bootstrap';
import { AppContext } from '../App';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const About = () => {
    const context = useContext(AppContext);
    const obj = context.about;
    console.log(obj);

    const onClickAdd = () => {
        const { id, myId, name, description, price } = obj;
        context.onAddOverlay({ id, myId, name, description, price });
    };

    const onClickAddToFavorite = () => {
        const { id, myId, name, description, price } = obj;
        context.onAddOverlay({ id, myId, name, description, price });
    };

    return (
        <Container className="my-2">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <h1 className="mb-4">О товаре</h1>
                <Card className="shadow-sm">
                    <Card.Img className="rounded" variant="top" src={obj.url} />
                    <Card.Body>
                        <Card.Text className="h3">{obj.name}</Card.Text>
                        <Card.Text className="h5">{obj.description}</Card.Text>
                        <Card.Text className="h4">{obj.price} руб.</Card.Text>
                        {
                            context.isAdded(obj.myId) ? (
                                <Button
                                    variant="danger"
                                    className="me-2"
                                    onClick={onClickAdd}>
                                    Удалить
                                </Button>):(
                                <Button
                                    variant="primary"
                                    className="me-2"
                                    onClick={onClickAdd}>
                                    Добавить
                                </Button>
                            )
                        }
                        <Button
                            variant="outline-primary"
                            onClick={() => context.onAddFavorite(obj)}>
                            {
                                context.isAddedToFavorite(obj.id) ? (
                                    <AiFillHeart size="1.5em" />
                                ) : (
                                    <AiOutlineHeart size="1.5em" />
                                )
                            }
                        </Button>
                    </Card.Body>
                </Card>
            </motion.div>
        </Container>
    );
};

export default About;

//import React, { useContext } from 'react';
//import { motion } from 'framer-motion';
//import { Container, Card, Button } from 'react-bootstrap';
//import { AppContext } from '../App';
//import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
//
//const About = () => {
    // Используем контекст приложения, чтобы получить доступ к данным и методам
 //   const context = useContext(AppContext);
    
    // Извлекаем объект товара из контекста
 //   const obj = context.about;
   // console.log(obj); // Логируем объект товара для отладки

    // Функция для обработки добавления товара в.overlay
   // const onClickAdd = () => {
     //   const { id, myId, name, description, price } = obj;
       // context.onAddOverlay({ id, myId, name, description, price });
    //};

    // Функция для обработки добавления товара в избранное
    //const onClickAddToFavorite = () => {
      //  const { id, myId, name, description, price } = obj;
        //context.onAddOverlay({ id, myId, name, description, price });
    //};

   // return (
     //   <Container className="my-2">
       //     <motion.div
         //       initial={{ opacity: 0, y: 50 }} // Начальные стили анимации
           //     animate={{ opacity: 1, y: 0 }} // Стиль при анимации
             //   transition={{ duration: 0.5 }}> // Длительность анимации
               // <h1 className="mb-4">О товаре</h1>
                //<Card className="shadow-sm"> {/* Карточка товара */}
      //              <Card.Img className="rounded" variant="top" src={obj.url} /> {/* Изображение товара */}
       //             <Card.Body>
         //               <Card.Text className="h3">{obj.name}</Card.Text> {/* Название товара */}
           //             <Card.Text className="h5">{obj.description}</Card.Text> {/* Описание товара */}
            //            <Card.Text className="h4">{obj.price} руб.</Card.Text> {/* Цена товара */}
              //          {
             //               context.isAdded(obj.myId) ? ( // Проверяем, добавлен ли товар в.overlay
               //                 <Button
                 //                   variant="danger" // Кнопка "Удалить"
                   //                 className="me-2"
                     //               onClick={onClickAdd}>
                       //             Удалить
                         //       </Button>
                           // ) : (
                             //   <Button
                               //     variant="primary" // Кнопка "Добавить"
                                 //   className="me-2"
                                   // onClick={onClickAdd}>
                                   // Добавить
                                //</Button>
     //                       )
       //                 }
         //               <Button
           //                 variant="outline-primary" // Кнопка для добавления в избранное
             //               onClick={() => context.onAddFavorite(obj)}>
               //             {
                 //               context.isAddedToFavorite(obj.id) ? ( // Проверяем, добавлен ли товар в избранное
                   //                 <AiFillHeart size="1.5em" /> // Иконка "сердце заполненное"
                     //           ) : (
                       //             <AiOutlineHeart size="1.5em" /> // Иконка "сердце пустое"
                         //       )
//                            }
  //                      </Button>
    //                </Card.Body>
      //          </Card>
        //    </motion.div>
            //        </Container>
//    );
//};
//
//export default About;
//