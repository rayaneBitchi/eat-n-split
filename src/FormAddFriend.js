import { useState } from "react";

import Button from "./Button";

export default function FormAddFriend({ onAddFriend }) {
  let baseUrl = "https://i.pravatar.cc/48?u=";
  const [name, setName] = useState("");
  const [image, setImage] = useState(baseUrl);

  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setImage(baseUrl);
  }

  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
      <label htmlFor='name'>Friend name</label>
      <input
        type='text'
        id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor='image'>Image url</label>
      <input
        type='text'
        id='image'
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button className='button'>Add friend</Button>
    </form>
  );
}
