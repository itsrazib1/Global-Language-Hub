import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserTie } from "react-icons/fa";
import Swal from "sweetalert2";
const Alluser = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleDeleteClass = (user) => {};
  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin Now `,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }

  return (
    <div className=" w-full">
      <Helmet>
        <title>Global Language Hub|All user</title>
      </Helmet>
      <h2 className="text-3xl text-center">Total User : {users.length}</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Acction</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md mr-2"
                      onClick={() => handleMakeAdmin(user)}
                    >
                      <div className="flex text-sm">
                        <FaUserTie className="mt-1 ms-1"></FaUserTie>
                      </div>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md mr-2"
                    onClick={() => handleDeleteClass(user)}
                  >
                    <div className="flex text-sm">
                      <FaTrashAlt className="mt-1 ms-1"></FaTrashAlt>
                    </div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alluser;
