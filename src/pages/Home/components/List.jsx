import Item from "./Item";

const List = ({ listData, remove }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time, id } = item;
        return (
          <Item id={id} note={note} date={date} time={time} remove={remove} />
        );
      })}
    </div>
  );
};

export default List;
