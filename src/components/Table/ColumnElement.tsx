import React, { useState } from 'react';
import { IColumn } from '.';
import useUser from '../../store/user.store';
import { SortAToZ, SortZToA } from '../Icons';

interface IColumnElement {
  col: IColumn;
}
const ColumnElement: React.FC<IColumnElement> = (props: IColumnElement) => {
  const { col } = props;
  const { sortUser } = useUser();
  const [asc, setAsc] = useState<Boolean>(true);
  return (
    <th
      key={col.key}
      className='relative py-3 px-1.5 cursor-pointer line-clamp-1'
      style={{
        flexBasis: col.width,
      }}
      onClick={() => {
        console.log(col.key);
        if (col?.sort) {
          asc === true ? sortUser('username', 'asc') : sortUser('username', 'desc');
        }
        setAsc((prev) => !prev);
      }}
    >
      {col.title}
      <span className='absolute right-2 top-1/2 -translate-y-1/2'>
        {col?.sort ? asc ? <SortAToZ /> : <SortZToA /> : null}
      </span>
    </th>
  );
};

export default ColumnElement;
