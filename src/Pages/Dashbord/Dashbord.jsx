import {  useContext, useState } from "react";
import { AuthContext } from "../../Providers/Authprovider";


const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const [selectedClasses, setSelectedClasses] = useState([
    {
      id: 1,
      title: "Class 1",
      description: "This is Class 1",
      isPaid: false,
    },
    {
      id: 2,
      title: "Class 2",
      description: "This is Class 2",
      isPaid: false,
    },
    {
      id: 3,
      title: "Class 2",
      description: "This is Class 2",
      isPaid: false,
    },
    {
      id: 4,
      title: "Class 2",
      description: "This is Class 2",
      isPaid: false,
    },
  ]);

  const [enrolledClasses, setEnrolledClasses] = useState([
    {
      id: 3,
      title: "Class 3",
      description: "This is Class 3",
    },
    {
      id: 4,
      title: "Class 4",
      description: "This is Class 4",
    },
  ]);

  const handleDeleteClass = (classId) => {
    const updatedSelectedClasses = selectedClasses.filter(
      (classItem) => classItem.id !== classId
    );
    setSelectedClasses(updatedSelectedClasses);
  };

  const handlePayClass = (classId) => {
    const selectedClass = selectedClasses.find((classItem) => classItem.id === classId);
    if (selectedClass) {
      selectedClass.isPaid = true;
      const updatedEnrolledClasses = [...enrolledClasses, selectedClass];
      setEnrolledClasses(updatedEnrolledClasses);
      handleDeleteClass(classId);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>
      <h3 className="text-xl font-bold mb-2">Welcome,{user.email} </h3>

      <div className="my-8">
        <h4 className="text-lg font-bold mb-4">My Selected Classes</h4>
        {selectedClasses.length > 0 ? (
          <ul className="space-y-4">
            {selectedClasses.map((classItem) => (
              <li key={classItem.id} className="border p-4 rounded-md">
                <h5 className="text-lg font-bold">{classItem.title}</h5>
                <p className="text-gray-500">{classItem.description}</p>
                <div className="flex justify-end mt-4">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md mr-2"
                    onClick={() => handleDeleteClass(classItem.id)}
                  >
                    Delete
                  </button>
                  {!classItem.isPaid && (
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                      onClick={() => handlePayClass(classItem.id)}
                    >
                      Pay
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
          <ul className="space-y-4">
            {enrolledClasses.map((classItem) => (
              <li key={classItem.id} className="border p-4 rounded-md">
                <h5 className="text-lg font-bold">{classItem.title}</h5>
                <p className="text-gray-500">{classItem.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No enrolled classes.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
