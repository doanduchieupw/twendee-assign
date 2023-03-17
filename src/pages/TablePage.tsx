import { useEffect } from 'react';
import axios from 'axios';

import Table, { IColumn } from '../components/Table';
import usePagination from '../store/page.store';
import useUser from '../store/user.store';
import { IUser } from '../types/user.type';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../api/user.api';

const columns: IColumn[] = [
  {
    title: 'Fullname',
    key: 'fullname',
    width: '40%',
  },
  {
    title: 'User',
    key: 'username',
    width: '40%',
    sort: true,
  },
  {
    title: 'Thumbnail',
    key: 'thumbnail',
    width: '20%',
  },
];
const level: number[] = [10, 20, 50, 100];
const TablePage = () => {
  const { user, setUser } = useUser();
  const { pageNumber, itemOnPage } = usePagination();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await axios.get(`https://randomuser.me/api/?page=${pageNumber}&results=${itemOnPage}`);

  //     const convertData: IUser[] = data.results.map((result: any) => ({
  //       fullname: Object.values(result.name).join(' '),
  //       username: result?.login?.username,
  //       thumbnail: (
  //         <img
  //           src={result?.picture?.large}
  //           className='w-4 h-4 sm:w-6 sm:h-6  md:w-12 md:h-12 rounded-full object-cover'
  //         />
  //       ),
  //     }));

  //     setUser(convertData);
  //   };
  //   fetchData();
  // }, [pageNumber, itemOnPage]);

  const { data, isLoading } = useQuery({
    queryKey: ['users', { pageNumber, itemOnPage }],
    queryFn: () => getUsers(pageNumber, itemOnPage),
  });

  useEffect(() => {
    const convertData: IUser[] = data?.data.results.map((result: any) => ({
      fullname: Object.values(result.name).join(' '),
      username: result?.login?.username,
      thumbnail: (
        <img
          src={result?.picture?.large}
          className='w-4 h-4 sm:w-6 sm:h-6  md:w-12 md:h-12 rounded-full object-cover'
        />
      ),
    }));
    setUser(convertData ?? []);
  }, [data]);

  return <Table columns={columns} data={user} level={level} isLoading={isLoading} />;
};

export default TablePage;
