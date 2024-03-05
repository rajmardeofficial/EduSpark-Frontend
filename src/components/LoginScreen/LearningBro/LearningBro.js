import "./LearningBro.css";

const LearningBro = () => {
  return (
    <div className="frame-group">
      <div className="frame-group-child" />
      <div className="learningbro-frame">
        <img
          className="learning-bro-1-icon"
          loading="lazy"
          alt=""
          src="/learningbro-1@2x.png"
        />
      </div>
      <div className="line-separator">
        <div className="text-instruction" />
      </div>
      <div className="parent-frame">
        <div className="anyone-who-stops">
          “Anyone who stops learning is old, whether at twenty or eighty. Anyone
          who keeps learning stays young”
        </div>
      </div>
    </div>
  );
};

export default LearningBro;
