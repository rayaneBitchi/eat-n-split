import Friend from "./Friend";

export default function FriendList({
  friends,
  onSelectFriend,
  selectedFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelectFriend={onSelectFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
