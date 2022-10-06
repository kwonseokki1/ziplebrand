import "./content04.scss";

import phoneImg from "../../asset/images/section3_iphone.png";
import figure01 from "../../asset/images/figure_01.png";
import figure02 from "../../asset/images/figure_02.png";
import { useParallax } from "react-scroll-parallax";
function Content04() {
  const leftFigure = useParallax({
    easing: "easeOutQuad",
    translateX: [200, -90],
  });

  const rightFigure = useParallax({
    easing: "easeOutQuad",
    translateX: [-90, 200],
  });

  return (
    <section className="content04">
      <span className="content04-iphone-img">
        <img src={phoneImg} />

        <span ref={leftFigure.ref} className="content04-figure1-img">
          <img src={figure01} />
        </span>

        <span ref={rightFigure.ref} className="content04-figure2-img">
          <img src={figure02} />
        </span>
      </span>
    </section>
  );
}

export default Content04;
