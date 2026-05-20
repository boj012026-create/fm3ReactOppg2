import {useState} from "react";
import Table from "./Table";
import UserForm from "./UserForm";

export default function Users() {
const mockData = [
    { username: 'Ola Normann', email: 'ola.normann@norge.no'},
    { username: 'Torleif', email: 'torleif@kodehode.no' },
    { username: 'Jan Egil', email: 'jan.egil@kodehode.no' },
    { username: 'Sander', email: 'sander@kodehode.no' },
]

const [users, setUsers] = useState(mockData);
  return(
    <>
      <Table title="User Data" data={users}/>
      <UserForm users={users} setUsers={setUsers}/>
    </>
  )
}
