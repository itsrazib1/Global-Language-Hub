import { useState, useEffect } from "react";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetching data from JSON file (replace 'Classes.json' with your actual JSON file path)
    fetch("Classes.json")
      .then((response) => response.json())
      .then((data) => setClasses(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSelectClass = (classId, availableSeats, isAdmin) => {
    if (!isAdmin) {
      if (availableSeats === 0) {
        alert("No available seats for this class.");
      } else {
        // Logic for selecting the class
        // Replace this with your desired action (e.g., redirect to a checkout page)
        alert(`Selected class with ID: ${classId}`);
      }
    } else {
      alert("Admin/Instructor cannot select a class.");
    }
  };

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
      {classes.map((classData) => (
        <div
          key={classData.id}
          className={` p-4 card w-96 bg-base-100 shadow-xl class-card ${
            classData.availableSeats === 0 ? "bg-red-400 text-cyan-50" : "bg-white"
          }`}
        >
          <div className="">
            <figure>
              <img className="h-[300px]" src={classData.image} alt={classData.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {classData.name}
                <div className="badge badge-secondary">{classData.price}$</div>
              </h2>
              <p>Instructor: {classData.instructor}</p>
              <p>Available Seats: {classData.availableSeats}</p>
            </div>
          </div>

          <button
          className="btn bg-[#6363f0]"
            disabled={classData.availableSeats === 0}
            onClick={() =>
              handleSelectClass(
                classData.id,
                classData.availableSeats,
                classData.isAdmin
              )
            }
          >
            {classData.isAdmin ? "Admin/Instructor" : "Select"}
          </button>
          {!classData.isAdmin && classData.availableSeats === 0 && (
            <p className="class-status">No seats available</p>
          )}
          {classData.isAdmin && (
            <p className="class-status">Admin/Instructor</p>
          )}

          
        </div>
      ))}
    </div>
  );
};

export default Classes;
