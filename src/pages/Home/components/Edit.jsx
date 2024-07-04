import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add }) => {
  const [note, setNote] = useState("");
  function handleNoteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function handleDateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function handleTimeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    add((prev) => {
      return [
        ...prev,
        {
          id: v4(),
          note,
          date,
          time,
        },
      ];
    });
  }

  return (
    <div>
      <h1>Memo</h1>
      <p>Note</p>
      <input type="text" value={note} onChange={handleNoteChange} />
      <p>Date</p>
      <input type="date" value={date} onChange={handleDateChange} />
      <p>Time</p>
      <input type="time" value={time} onChange={handleTimeChange} />
      <button onClick={addItem} className="add">
        Add
      </button>
    </div>
  );
};

export default Edit;
