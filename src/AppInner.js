import "./components/app.scss";
const AppInner = (props) => {
  return <div className="app-container">{props.renderComponent()}</div>;
};

export { AppInner };
