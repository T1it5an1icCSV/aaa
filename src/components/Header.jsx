import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-danger">
            <Container>
                <Navbar.Brand href="/">Samsung</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/cart">Каталог</Nav.Link>
                        <Nav.Link href="/overlay">Корзина</Nav.Link>
                        <Nav.Link href="/favorite">Избранное</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;


//import Container from 'react-bootstrap/Container'; // Импортируем компонент Container из react-bootstrap
//import Nav from 'react-bootstrap/Nav'; // Импортируем компонент Nav для навигационных ссылок
//import Navbar from 'react-bootstrap/Navbar'; // Импортируем компонент Navbar для создания навигационной панели

//const Header = () => {
  //  return (
    //    <Navbar expand="lg" className="bg-danger"> {/* Создаем навигационную панель с расширением для больших экранов и фоновым цветом danger */}
      //      <Container> {/* Контейнер для централизации контента в навбаре */}
        //        <Navbar.Brand href="/">Samsung</Navbar.Brand> {/* Название бренда с ссылкой на главную страницу */}
          //      <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Кнопка для отображения/скрытия навигационного меню на мобильных устройствах */}
            //    <Navbar.Collapse id="basic-navbar-nav"> {/* Указываем, что это навигационное меню, которое будет сворачиваться */}
              //      <Nav className="me-auto"> {/* Класс me-auto используется для выравнивания элементов по левому краю */}
                //        <Nav.Link href="/cart">Каталог</Nav.Link> {/* Ссылка на страницу каталога */}
                  //      <Nav.Link href="/overlay">Корзина</Nav.Link> {/* Ссылка на страницу корзины */}
                    //    <Nav.Link href="/favorite">Избранное</Nav.Link> {/* Ссылка на страницу избранных товаров */}
   //                 </Nav>
     //           </Navbar.Collapse>
       //     </Container>
            //    </Navbar>
  //  );
//};

//export default Header; // Экспортируем компонент Header для использования в других частях приложения

