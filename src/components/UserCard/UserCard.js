const UserCard = ({ name, age, occupation }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Idade: {age}</p>
      <p>Ocupação: {occupation}</p>
    </div>
  );
};

export default UserCard;
