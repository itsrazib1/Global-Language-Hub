const SectionTitle = ({ heading }) => {
    return (
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 mx-auto text-center text-4xl font-bold text-white shadow-lg  transform hover:scale-105 transition-transform duration-300 rounded-tl-lg rounded-br-lg rounded-full bg-gray-500 ">
        {heading}
      </div>
    );
  };
  
  export default SectionTitle;
  