import "./app-info.css";

const AppInfo = ({ allEmployees, allIncreased }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании Точка</h1>
      <h2>Общее число сотрудников: {allEmployees} </h2>
      <h2>Премию получат: {allIncreased} </h2>
    </div>
  );
};

export default AppInfo;
