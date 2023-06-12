import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Providers/Authprovider';

const AddClassForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);
  console.log(user);
  const email = user?.email ;
  const name = user?.displayName||'Razib' ;
  // Assuming you have the user object with `displayName` and `email`
//   const user = {
//     displayName: 'Razib',
//     email: 'johndoe@example.com',
//   };

  const onSubmit = () => {
    // Perform your logic to add the class to the database
    // Access the form data via the `data` object
    // Set the status field to "pending"

    // Reset the form fields
    reset();
  };

  return (
    <div className="w-full  mx-auto bg-teal-200 border-2 p-10 rounded-3xl  rounded-tl-none rounded-br-none ">
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex gap-4'>
        <div className="mb-4">
          <label htmlFor="className" className="font-semibold">
            Class name
          </label>
          <input
            type="text"
            id="className"
            {...register('className', { required: true })}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="classImage" className="font-semibold">
            Class Image
          </label>
          <input
            type="text"
            id="classImage"
            {...register('classImage', { required: true })}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
          />
        </div>
        </div>
       <div className='flex gap-4'>
       <div className="mb-4">
          <label htmlFor="instructorName" className="font-semibold">
            Instructor name
          </label>
          <input
            type="text"
            id="instructorName"
            value={name}
            readOnly
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="instructorEmail" className="font-semibold">
            Instructor email
          </label>
          <input
            type="text"
            id="instructorEmail"
            value={email}
            readOnly
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 bg-gray-100"
          />
        </div>
       </div>

       <div className='flex gap-4'>
       <div className="mb-4">
          <label htmlFor="availableSeats" className="font-semibold">
            Available seats
          </label>
          <input
            type="number"
            id="availableSeats"
            {...register('availableSeats', { required: true })}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="font-semibold">
            Price
          </label>
          <input
            type="number"
            id="price"
            {...register('price', { required: true })}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
          />
        </div>
       </div>

       

       <button
              className=" btn btn-secondary btn-block mx-auto text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add
            </button>
      </form>
    </div>
  );
};

export default AddClassForm;
