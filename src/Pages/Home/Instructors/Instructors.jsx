import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Slide } from "react-awesome-reveal";
import SectionTitle from '../../Shared/Sectiontitle/Sectiontitle';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      const response = await fetch('https://b7a12-summer-camp-server-side-itsrazib1.vercel.app/instactor');
      const data = await response.json();
      setInstructors(data);
    };

    fetchInstructors();
  }, []);

  return (
    
    <>
    <SectionTitle heading={'Popular Instructors Section'}></SectionTitle>
    <div className="grid my-10 grid-cols-1 md:grid-cols-2 gap-4 mx-5">
      <AnimatePresence>
        {instructors.map((instructor) => (
          <motion.div
            key={instructor.email}
            className="bg-white rounded-lg shadow p-4 flex items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <Slide>
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-20 h-20 rounded-lg mr-4"
            />
            </Slide>
            
            <div>
              <h2 className="text-lg font-bold">{instructor.name}</h2>
              <p className="text-gray-600 text-sm">{instructor.email}</p>
              <p className="text-gray-600 text-sm">
                Number of classes taken: {instructor.numClassesTaken}
              </p>
              <p className="text-gray-600 text-sm">
                Classes taken: {instructor.classesTaken.join(', ')}
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
    </>
    
  );
};

export default Instructors;
