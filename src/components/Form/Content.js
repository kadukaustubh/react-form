import classes from "./Content.modules.css";

const Content = (props) => {
  return (
    <div className="container-info">
      <h2>{props.heading}</h2>
      <p>{props.description}</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid iure
        mollitia adipisci eveniet explicabo cumque culpa consequatur est debitis
        sed. Voluptas, exercitationem labore. Quidem accusamus quia mollitia
        blanditiis. Deleniti, quis!
      </p>
      <div className="Image">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};
export default Content;
