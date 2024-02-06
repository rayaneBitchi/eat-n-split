import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ friend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(event) {
    event.preventDefault();
    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
    setBill("");
    setPaidByUser("");
    setWhoIsPaying("user");
  }

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>Split a bill with {friend.name}</h2>
      <label htmlFor='bill'>Bill value</label>
      <input
        type='text'
        id='billt'
        value={bill || ""}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor='your_expense'>Your expense</label>
      <input
        type='text'
        id='your_expense'
        value={paidByUser || ""}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label htmlFor='friend_expense'>{friend.name} expense</label>
      <input type='text' id='friend_expense' value={paidByFriend} disabled />

      <label htmlFor='friends'>Who is paying the bill?</label>
      <select
        id='friends'
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value='user'>You</option>
        <option value='friend'>{friend.name}</option>
      </select>
      <Button className='button'>Split bill</Button>
    </form>
  );
}
