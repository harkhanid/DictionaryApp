import "./NoWordFound.css";

const NoWordFound = ({ data }) => {
  return (
    <div className="no-word">
      <p className="emoji">&#128533;</p>
      <p className="title">{data.title}</p>
      <h2 className="h2-title">{"" + data.message + data.resolution}</h2>
    </div>
  );
};

export default NoWordFound;
