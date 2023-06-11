import { useState } from "react";
import CardFlip from "react-card-flip";
import AddClassForm from "./AddclassFrom";

const AddedClass = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <CardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front side */}
        <div className="card-front  h-[500px]">
          <div className="card-content">
            <h1 className="text-2xl font-bold mb-4"><AddClassForm></AddClassForm></h1>
            <button
              className="btn bg-blue-500 text-white"
              onClick={() => setIsFlipped(true)}
            >
              Flip Card
            </button>
          </div>
        </div>

        {/* Back side */}
        <div className="card-back h-[500px]">
          <div className="card-content">
            <h1 className="text-2xl font-bold mb-4">Back Side</h1>
            <button
              className="btn bg-blue-500 text-white"
              onClick={() => setIsFlipped(false)}
            >
              Flip Card
            </button>
          </div>
        </div>
      </CardFlip>
    </div>
  );
};

export default AddedClass;
