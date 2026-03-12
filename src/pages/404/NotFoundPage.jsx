import './NotFoundPage.css';
import { Link } from "react-router-dom";
import blackGroup from "../../assets/blackGroup.png";

export const NotFoundPage = () => {
    return (
        <section className="not-found">
            <h1 
                className="not-found__title">404
            </h1> 
            <div className="section-divider">
                <img src={blackGroup} alt="" />
            </div>
            <p className="not-found__text">Oops, this coffee page does not exist</p>
            <Link to="/" className="not-found__link">
                Back to home
            </Link>
        </section>
    )
}
