import "./employess-list-item.css";

function EmployeesListItem(props) {
  const {
    name,
    salary,
    onDelete,
    onToggleProp,
    increase,
    rise,
  } = props;

  let liClass = "list-group-item d-flex justify-content-between";

  if (increase) {
    liClass += " increase";
  }

  if (rise) {
    liClass += " like";
  }

  return (
    <li className={liClass}>
      <span
        className="list-group-item-label"
        data-toggle="rise"
        onClick={onToggleProp}
      >
        {name}
      </span>
      <input
        type="text"
        defaultValue={salary + "$"}
        className="list-group-item-input"
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          data-toggle="increase"
          onClick={onToggleProp}
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-trash btn-sm"  onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
}

export default EmployeesListItem;
