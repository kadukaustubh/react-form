import Content from "./Content";
import Image from "../../Images/s-1.jpg";
import classes from "./silder.modules.css";

const silder = () => {
  return (
    <div class="slider">
      <div class="slides">
        <div id="slide-1">
          <Content
            heading="Hello World"
            description="description"
            image={Image}
          />
        </div>
        <div id="slide-2">
          <Content heading="Page 2" description="description" image={Image} />
        </div>
        <div id="slide-3">3</div>
        <div id="slide-4">4</div>
        <div id="slide-5">5</div>
      </div>
      <a href="#slide-1">1</a>
      <a href="#slide-2">2</a>
      <a href="#slide-3">3</a>
      <a href="#slide-4">4</a>
      <a href="#slide-5">5</a>
    </div>
  );
};
export default silder;
