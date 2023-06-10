import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/Authprovider';

const ClassesQuare = () => 
{
    const {user} = useContext(AuthContext);
    const { refetch, data: classe = [] } = useQuery({
        queryKey: ['classes',user?.email],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/Classes?email=${user.email}`)
            return res.json();
        },
      })
      return[classe,refetch]
}

export default ClassesQuare;