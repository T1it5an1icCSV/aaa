import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTelegram, FaVk, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-danger text-dark mt-5 p-4">
            <Container>
                <Row>
                    <Col md="4">
                        <h5>Контакты</h5>
                        <ul className="list-unstyled">
                            <li>Email: t50_r.f.shaimardanov@mpt.ru</li>
                            <li>Phone: +7 800 555-55-55</li>
                        </ul>
                    </Col>
                    <Col md="4">
                        <h5>Мы в соц сетях</h5>
                        <ul className="list-unstyled d-flex">
                            <li>
                                <a href="https://t.me/SamsungRussia" className="text-dark">
                                    <FaTelegram size="1.5em" />
                                </a>
                            </li>
                            <li className="mx-3">
                                <a href="https://vk.com/samsung?ysclid=m1vb1xn1tv235813305" className="text-dark">
                                    <FaVk size="1.5em" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Samsung" className="text-dark">
                                    <FaGithub size="1.5em" />
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md="4">
                        <h5>О компании</h5>
                        <p>
                            Онлайн магазин с широким выбором техники и удобной доставкой
                            galaxystore.ru — это большой и удобный онлайн-магазин, который поможет подобрать технику Samsung и аксессуары к ней. Для удобства вы также можете пользоваться мобильным приложением.
                        </p>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className="text-center">
                        &copy; {new Date().getFullYear()} MPT
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;


















/* 

import React from 'react'; // Импортируем библиотеку React
import { Container, Row, Col } from 'react-bootstrap'; // Импортируем компоненты для сетки из react-bootstrap
import { FaTelegram, FaVk, FaGithub } from 'react-icons/fa'; // Импортируем иконки для социальных сетей

function Footer() {
    return (
        <footer className="bg-danger text-dark mt-5 p-4"> {/* Определяем стиль для подвала */
   /*          <Container> {/* Компонент-обертка для централизации контента */
        /* /*         <Row> {/* Создаем строку для сетки */
             //       <Col md="4"> {/* Первый столбец для контактов */}
 //                       <h5>Контакты</h5>
   //                     <ul className="list-unstyled"> {/* Ненумерованный список, без маркеров */}
     //                       <li>Email: t50_r.f.shaimardanov@mpt.ru</li> {/* Email */}
       //                     <li>Phone: +7 800 555-55-55</li> {/* Телефонный номер */}
         //               </ul>
           //         </Col>
             //       <Col md="4"> {/* Второй столбец для ссылок на социальные сети */}
               //         <h5>Мы в соц сетях</h5>
                 //       <ul className="list-unstyled d-flex"> {/* Ненумерованный список с элементами в строку */}
                   //         <li>
                     //           <a href="https://t.me/SamsungRussia" className="text-dark"> {/* Ссылка на Telegram */}
                       ////             <FaTelegram size="1.5em" /> {/* Иконка Telegram */}
                           //     </a>//v
//                            </li>
  //                          <li className="mx-3"> {/* Отступ между элементами */}
    //                            <a href="https://vk.com/samsung?ysclid=m1vb1xn1tv235813305" className="text-dark"> {/* Ссылка на ВКонтакте */}
      //                              <FaVk size="1.5em" /> {/* Иконка ВКонтакте */}
       //                         </a>
        //                    </li>
          //                  <li>
             //                   <a href="https://github.com/Samsung" className="text-dark"> {/* Ссылка на GitHub */}
               //                     <FaGithub size="1.5em" /> {/* Иконка GitHub */}
        //         v               </a>
          //        v          </li>
            //       v     </ul>
              //      v</Col>
                //    <Col md="4"> {/* Третий столбец для информации о компании */}
                  //      <h5>О компании</h5>
                    //    <p>
                      //      Онлайн магазин с широким выбором техники и удобной доставкой
                        //    galaxystore.ru — это большой и удобный онлайн-магазин, который поможет подобрать технику Samsung и аксессуары к ней. Для удобства вы также можете пользоваться мобильным приложением.
  //                      </p>
    //                </Col>
      //          </Row>
        //        <hr /> {/* Горизонтальная линия для разделения контента */}
          //      <Row>
            ////        <Col className="text-center"> {/* Столбец для текста в центре */}
  //                      &copy; {new Date().getFullYear()} MPT {/* Копирайт с текущим годом */}
                //    </Col>
   //             <Row>
     //       </Container>
      //  </footer>
   // );
//}

//export default Footer; // Экспортируем компонент для использования в других частях приложения
///* 