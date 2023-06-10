import { useState, useEffect } from "react";

import Swal from "sweetalert2";
import ClassesQuare from "../Hooks/ClassesQuare";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [classe] = ClassesQuare();
   useEffect(() => {
    fetch("http://localhost:5000/Classes")
      .then((response) => response.json())
      .then((data) => setClasses(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSelectClass = (_id, instructor, availableSeats, isAdmin) => {
    if (!isAdmin) {
      if (availableSeats === 0) {
        alert("No available seats for this class.");
      } else {
        const selectedClass = classes.find(
          (classData) => classData._id === _id
        );
        if (selectedClass) {
          fetch("http://localhost:5000/Studentclass", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(selectedClass),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Class selection successful",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            })
            .catch((error) => {
              console.error("Error selecting class:", error);
              Swal.fire({
                icon: "error",
                title: "Class selection failed",
                text: "Failed to select the class. Please try again.",
              });
            });
        }
      }
    } else {
      alert("Admin/Instructor cannot select a class.");
    }
  };

  return (
    <>
    <h2 className="text-center text-5xl font-bold mt-5 text-[#3bbac3]">Total Class : {classe.length || 0} </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
      
      {classes.map((classData) => (
        <div
          key={classData._id}
          className={`p-4 card w-96 bg-base-100 shadow-xl class-card ${
            classData.availableSeats === 0
              ? "bg-red-400 text-cyan-50"
              : "bg-white"
          }`}
        >
          <div className="">
            <figure>
              <img
                className="h-[300px]"
                src={classData.image}
                alt={classData.name}
              />
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
                classData._id,
                classData.instructor,
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
    </>
    
  );
};

export default Classes;
