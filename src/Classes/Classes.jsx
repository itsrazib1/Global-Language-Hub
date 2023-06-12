import { useState, useEffect } from "react";

import Swal from "sweetalert2";
import ClassesQuare from "../Hooks/ClassesQuare";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [classe] = ClassesQuare();
  console.log(classe);
   useEffect(() => {
    fetch("https://b7a12-summer-camp-server-side-itsrazib1.vercel.app/Classes")
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
          fetch("https://b7a12-summer-camp-server-side-itsrazib1.vercel.app/Studentclass", {
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
    <h2 className="text-center text-5xl font-bold mt-5 text-[#3bbac3]">Total Class : {classes.length || 0} </h2>
    <div className="grid  p-3 ps-5 border-black rounded-tr-none rounded-3xl rounded-bl-none grid-cols-1 md:grid-cols-3 gap-4  my-10">
  {classes.map((classData) => (
    <div
      key={classData._id}
      className={`p-4 card  w-full gap-4 shadow-black my-2 rounded-tr-none rounded-3xl rounded-bl-none   bg-base-100 shadow-xl class-card ${
        classData.availableSeats === 0 ? "bg-red-400 text-white" : "bg-white"
      }`}
    >
      <div className="relative">
        <figure>
          <img
            className="h-[300px] object-cover rounded-tr-none rounded-3xl rounded-bl-none"
            src={classData.image}
            alt={classData.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">
            {classData.name}
            <div className="badge badge-secondary ml-2">{classData.price}$</div>
          </h2>
          <p className="text-gray-600">Instructor: {classData.instructor}</p>
          <p className="text-gray-600">Available Seats: {classData.availableSeats}</p>
        </div>
      </div>

      <button
        className="btn bg-[#6363f0] mt-4"
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
        <p className="class-status text-red-400">No seats available</p>
      )}
      {classData.isAdmin && <p className="class-status">Admin/Instructor</p>}
    </div>
  ))}
</div>

    </>
    
  );
};

export default Classes;
