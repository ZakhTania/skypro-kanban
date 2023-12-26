import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";
import "./NotFoundPage.css"


export default function NotFound() {
    return (  
   
        <div className="wrapper">
            
        <div className="container-notFound">
           
          <div className="modal">
            <div className="modal__block">
              <div className="modal__ttl">
                 <img src="../../../public/images/404.png
            " alt="error"/> 
                <h2>Страница не найдена</h2>
              </div>
              <button className="modal__btn-enter _hover01" id="btnEnter">
              <Link to={AppRoutes.HOME}>Перейти на главную</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}