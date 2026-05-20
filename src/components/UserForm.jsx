export default function UserForm({users, setUsers}) {
  const addUser = (e) => {
    const newUser = {};
    e.preventDefault();
    newUser.username = e.target.getElementByid("usrName").value;
    newUser.email = e.target.getElementById("usrEmail").value;
    
    console.log(e.target);
    setUsers( prevUsers => [...prevUsers, newUser]);
  }
  return(
    <>
      <form onSubmit={addUser}>
        <input id="usrName" type="text" placeholder="name"/>
        <input id="usrEmail" type="email" placeholder="email"/ >
        <input type="submit"/>
      </form>
    </>
  );
}
