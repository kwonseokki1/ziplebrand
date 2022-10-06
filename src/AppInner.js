import "./sassStyles/layout/_appinner.scss";
// 일정한 크기로 컨텐츠를 담기위한 컨테이너 컴포넌트
const AppInner = (props) => {
  return <div className="app-container">{props.renderComponent()}</div>;
};

export { AppInner };
