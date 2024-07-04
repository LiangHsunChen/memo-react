const Item = ({ id, note, date, time, remove }) => {
  function removeItem() {
    remove((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="item">
      <p>{note}</p>
      <p>{`${date} ${time}`}</p>
      <button className="remove" onClick={removeItem}>
        Remove
      </button>
    </div>
  );
};

export default Item;
