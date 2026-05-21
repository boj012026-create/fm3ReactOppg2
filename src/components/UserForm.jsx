export default function UserForm({users, setUsers}) {
  const addUser = (e) => {
    e.preventDefault();

    const usrForm = new FormData(e.target); 
    console.log(e.target);
    const newUser = {
      username: usrForm.get("usrName"),
      email: usrForm.get("usrEmail")
    };
    setUsers( prevUsers => [...prevUsers, newUser]);
  }
  return(
    <>
      <form onSubmit={addUser}>
        <input id="usrName" name="usrName" type="text" placeholder="name"/>
        <input id="usrEmail" name="usrEmail" type="email" placeholder="email"/ >
        <input type="submit"/>
      </form>
    </>
  );
}
