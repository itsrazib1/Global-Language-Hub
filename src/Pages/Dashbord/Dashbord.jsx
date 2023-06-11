import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import { FaCheckCircle, FaDollarSign, FaTrashAlt } from 'react-icons/fa';
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/Studentclass")
      .then((response) => response.json())
      .then((data) => {
        setSelectedClasses(data);
        setIsLoading(false); // Mark loading as complete
      })
      .catch((error) => console.error(error));
  }, []);

  const handleDeleteClass = (classId) => {
    fetch(`http://localhost:5000/Studentclass/${classId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Delete SuccessFull',
            showConfirmButton: false,
            timer: 1500
          })
          const updatedSelectedClasses = selectedClasses.filter(
            (classItem) => classItem._id !== classId
          );
          setSelectedClasses(updatedSelectedClasses);
        } else {
          throw new Error("Failed to delete class");
        }
      })
      .catch((error) => console.error(error));
  };

  const handlePayClass = (classId) => {
    const selectedClass = selectedClasses.find(
      (classItem) => classItem._id === classId
    );
    if (selectedClass) {
      selectedClass.isPaid = true;
      const updatedEnrolledClasses = [...enrolledClasses, selectedClass];
      setEnrolledClasses(updatedEnrolledClasses);
      handleDeleteClass(classId);
    }
  };

  if (isLoading) {
    return <div className="flex  items-center ">Loading...</div>;
  }

  return (
   <>
   <Helmet>
        <title>GLH | MY Added Class</title>
      </Helmet>
    <div className="p-4 ">
      <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>
      <h3 className="text-xl font-bold mb-2">Welcome, {user?.email}</h3>

      <div className="my-8">
        <h4 className="text-lg font-bold mb-4">Your Selected Classes is : {selectedClasses.length}</h4>
        {selectedClasses.length > 0 ? (
          <ul className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {selectedClasses.map((classItem) => (
              <li  key={classItem._id} className="border  p-4 rounded-md shadow-md bg-white">
                <div className="flex items-center mb-4">
                  <img className="w-16 h-16 rounded-full" src={classItem.image} alt={classItem.name} />
                  <div className="ml-4">
                    <h5 className="text-lg font-bold">{classItem.name}</h5>
                    <p className="text-gray-500">{classItem.instructor}</p>
                  </div>
                </div>
                <p className="text-gray-500 mb-2">Available Seats: {classItem.availableSeats}</p>
                <p className="text-gray-500 mb-4">Price: ${classItem.price}</p>
                <div className="flex justify-end">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md mr-2"
                    onClick={() => handleDeleteClass(classItem._id)}
                  >
                    <div className="flex text-sm">Delete<FaTrashAlt className="mt-1 ms-1"></FaTrashAlt></div>
                  </button>
                  {!classItem.isPaid && (
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                      onClick={() => handlePayClass(classItem._id)}
                    >
                      <div className="flex">Pay <FaDollarSign className="mt-1 ms-1"></FaDollarSign></div>
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No selected classes.</p>
        )}
      </div>

      <div>
        <h4 className="text-lg font-bold mb-4">My Enrolled Classes</h4>
        {enrolledClasses.length > 0 ? (
          <ul className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {enrolledClasses.map((classItem) => (
              <li key={classItem._id} className="border p-4 rounded-md">
                <div>
                  <img src={classItem.image} alt={classItem.name} className="h-[300px]" />
                </div>
                <div>
                  <h5 className="text-lg font-bold">{classItem.name}</h5>
                  <p className="text-gray-500">Instructor: {classItem.instructor}</p>
                  <p className="text-gray-500">Available Seats: {classItem.availableSeats}</p>
                  <p className="btn btn-disabled btn-block">Price: ${classItem.price} PAID.<FaCheckCircle className="text-green-600 text-2xl" /></p>
                  <div></div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No enrolled classes.</p>
        )}
      </div>
    </div>
   </>
  );
};

export default Dashboard;
