import blackGroup from "../../assets/blackGroup.png";

export const About = () => {
    return (
        <section className="main-about">
            <h2 className="section-title">About Us</h2>
            <div className="section-divider">
                <img src={blackGroup} alt="" />
            </div>
            <div className="main-about__text">
                <p>We believe that great coffee begins with great beans. That’s why we carefully select coffee from trusted farms around the world and roast it with precision to highlight its natural aroma and flavor.</p>
                <p>Our mission is simple — to bring people together over a perfect cup of coffee. Whether you prefer a rich espresso or a smooth filter brew, we want every sip to be memorable.</p>
            </div>
        </section>
    )
}