import UserCard from '../UserCard/UserCard';

const UserList = () => {
    const users = [
      { name: "Romulo Nogueira de Souza", age: 40, occupation: "Desenvolvedor Back-end" },
      { name: "Keity Martin de Souza", age: 29, occupation: "Confeiteira" },
      { name: "Carol", age: 22, occupation: "Programadora" },
      { name: "David", age: 32, occupation: "Programadora" },
      { name: "Eve", age: 25, occupation: "Desenvolvedora" },
      { name: "Frank", age: 28, occupation: "Programadora" },
      { name: "Grace", age: 22, occupation: "Programadora" },
    ];
  
    return (
      <div>
        {users.map((user, index) => (
          <UserCard key={index} name={user.name} age={user.age} occupation={user.occupation} />
        ))}
      </div>
    );
  };

  export default UserList;