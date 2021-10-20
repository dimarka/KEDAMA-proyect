import { React } from "react";
import Header from "../../shared/Authentication/Header";
import FooterN from "../../shared/Authentication/Footer";
import '../../styles/AuthenticationStyle/Authentication.css';
// import example from '../../styles/AuthenticationStyle/images/example.jpeg';
import product from '../../img/products.png';
import sales from '../../img/sales.png';
import users from '../../img/users.png';

const Authentication = (props) => {
  const { isLoggedIn, setLogin } = props;

  return (
    <div>
      <body>
        <div className="container-main">
          <Header isLoggedIn={isLoggedIn}
            setLogin={setLogin} />
          <div className="proyectTitle d-flex justify-content-center">
            <h1 className="text-Style-Amway">Gestión de productos, ventas y usuarios</h1>
          </div>
          <div className="container-princ">

            <div className="sub-cont">
              <div className="img"><img src={product} alt="" /></div>
              <div className="textou">Productos</div>
            </div>


            <div className="sub-cont">
              <div className="img"><img src={users} alt="" /></div>
              <div className="textou2">Usuarios</div>
            </div>


            <div className="sub-cont">
              <div className="img"><img src={sales} alt="" /></div>
              <div className="textou">Ventas</div>
            </div>


          </div>


          <FooterN />

        </div>
      </body>
    </div>
  );

}
export default Authentication