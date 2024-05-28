import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';

const useMenu = () => {
  const axiosPublic = useAxiosPublic();
  //   const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/menus")
  //     .then((res) => res.json())
  //     .then((data) => {
        
  //       setMenu(data);
  //     });
  // }, []);

  const {data: menu=[], isPending: loading, refetch} = useQuery({
    queryKey:['menu'],
    queryFn: async ()=>{
      const res = await axiosPublic('/menus');
      return res.data;
    }
  })


  return [menu, loading, refetch];
};

export default useMenu;