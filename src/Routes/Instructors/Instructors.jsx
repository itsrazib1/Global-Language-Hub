import { useState, useEffect } from "react";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  console.log(instructors);
  useEffect(() => {
    // Fetching instructor data from the JSON file
    fetch("http://localhost:5000/instactor")
      .then((response) => response.json())
      .then((data) => setInstructors(data))
      .catch((error) => console.log("Error fetching instructors:", error));
  }, []);

  return (
    <div >
      
      <div className="grid grid-cols-1 md:grid-cols-3 my-5 justify-items-center gap-4 ">
        {instructors.map((instructor) => (
          <>
            <div className="card w-96 bg-[#bad3d0] shadow-xl">
              <div className="card-body">
              <figure>
                <img src={instructor.image} alt={instructor.name} />
              </figure>
                <h2 className="card-title">{instructor.name}</h2>
                <p>Email: {instructor.email}</p>
                {instructor.classesTaken && (
                <p >Number of Classes taken: {instructor.numClassesTaken}</p>
              )}
              {instructor.classNames && (
                <p>
                  Classes taken by the Instructor:{" "}
                  {instructor.classesTaken.join(", ")}
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
