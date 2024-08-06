import { useEffect, useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";
import Loading from "../../components/loading/Loading";

function UsersTable() {
  const [users, setUsers] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const ref = useRef();

  const deleteUser = (i, id) => {
    Swal.fire({
      icon: "question",
      title: `؟${users[i].userName} هل تريد حقا حذف `,
      showDenyButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "red",
      denyButtonColor: "#0274be",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" });
        setUsers((users) => [...users.slice(0, i), ...users.slice(i + 1)]);
      }
    });
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3000/users", {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setUsers(data.slice(1)));
    }, 250);
  }, []);
  return (
    <>
      {users === null ? (
        <Loading />
      ) : users[0] ? (
        <div className="content">
          <input
            type="text"
            className="searchInput"
            placeholder="Search by username..."
            ref={ref}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <Table
            striped
            bordered
            hover
            size="sm"
            // variant="dark"
            className="overflow-hidden"
          >
            <thead>
              <tr>
                <th className="p-2">Username</th>
                <th className="p-2">email</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users
                .filter((user) => {
                  return user.userName
                    .toLowerCase()
                    .includes(searchInput.toLowerCase());
                })
                .map((user, i) => {
                  return (
                    <tr key={i}>
                      <td className="px-3">{user.userName}</td>
                      <td className="px-3">{user.email}</td>
                      <td className="p-2 px-3">
                        <button
                          className="btn bg-danger  px-4"
                          style={{ color: "#fff" }}
                          onClick={() => deleteUser(i, user._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      ) : (
        <h1>No Users Found</h1>
      )}
    </>
  );
}

export default UsersTable;
