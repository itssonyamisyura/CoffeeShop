import maskGroup from "../../assets/maskGroup.jpg";
import blackGroup from "../../assets/blackGroup.png";

export const ItemAbout = () => {
    return (
        <section className="item-about">
            <div className="item-about__img-wrap">
                <img src={maskGroup} alt="AROMISTICO Coffee" className="item-about__img" />
            </div>
            <div className="item-about__details">
                <h2 className="section-title section-title--left">About it</h2>
                <div className="section-divider section-divider--center">
                    <img src={blackGroup} alt="" />
                </div>
                <p className="item-about__field">
                    <span className="item-about__label">Country:</span> Brasil
                </p>
                <p className="item-about__description">
                    <span className="item-about__label">Description:</span> Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="item-about__price">
                    <span className="item-about__price-label">Price:</span>
                    <span className="item-about__price-value">16.99$</span>
                </p>
            </div>
        </section>
    )
}