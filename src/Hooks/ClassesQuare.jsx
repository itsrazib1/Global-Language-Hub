import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/Authprovider';

const ClassesQuare = () => 
{
    const {user} = useContext(AuthContext);
    const { refetch, data: classe = [] } = useQuery({
        queryKey: ['classes',user?.email],
        queryFn: async() =>{
            const res = await fetch(`https://b7a12-summer-camp-server-side-itsrazib1.vercel.app/Classes?email=${user.email}`)
            return res.json();
        },
      })
      return[classe,refetch]
}

export default ClassesQuare;