import { useRef } from "react";
import { useFadeIn } from "../../hooks/useFadeIn";
import "./content03.scss";

function Content03() {
  const h1 = useFadeIn();

  return <section className="content03"></section>;
}

export default Content03;
