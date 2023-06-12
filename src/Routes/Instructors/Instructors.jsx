import { useState, useEffect } from "react";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  console.log(instructors);
  useEffect(() => {
    // Fetching instructor data from the JSON file
    fetch("https://b7a12-summer-camp-server-side-itsrazib1.vercel.app/instactor")
      .then((response) => response.json())
      .then((data) => setInstructors(data))
      .catch((error) => console.log("Error fetching instructors:", error));
  }, []);

  return (
    <div >
      <div className="grid grid-cols-1 md:grid-cols-3 my-5 justify-items-center gap-4">
  {instructors.map((instructor) => (
    <>
      <div className="card w-96 bg-[#f5e9e2] shadow-lg rounded-tr  shadow-red-500 rounded-bl">
        <div className="card-body">
          <figure>
            <img src={instructor.image} alt={instructor.name} />
          </figure>
          <h2 className="card-title text-xl font-bold mt-4 mb-2">{instructor.name}</h2>
          <p className="text-gray-600">{instructor.email}</p>
          {instructor.classesTaken && (
            <p className="mt-2">Number of Classes taken: {instructor.numClassesTaken}</p>
          )}
          {instructor.classNames && (
            <p className="mt-2">
              Classes taken by the Instructor: {instructor.classesTaken.join(", ")}
            </p>
          )}
        </div>
      </div>
    </>
  ))}
</div>

      
    </div>
  );
};

export default Instructors;
