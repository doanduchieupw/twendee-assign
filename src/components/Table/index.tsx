import React from 'react';
import Pagination from '../Pagination ';
import Selector from '../Selector';
import SkeletonLoading from '../SkeletonLoading';
import ColumnElement from './ColumnElement';

export interface IColumn {
  title: string;
  key: string;
  width: string;
  sort?: Boolean;
}

interface ITable {
  columns: IColumn[];
  data: any;
  level: number[];
  isLoading?: boolean;
}

const Table: React.FC<ITable> = (props: ITable) => {
  const { columns, data, level, isLoading }: ITable = props;
  return (
    <div className='h-full text-xs sm:text-sm md:text-base'>
      <table className='relative w-full h-4/5 block shadow-xl rounded-md'>
        <thead className='w-full sticky bg-[#f1f5f8] text-center block rounded-t-md'>
          <tr className='flex'>
            {columns.map((col: IColumn, index: number) => (
              <ColumnElement col={col} key={index} />
            ))}
          </tr>
        </thead>
        <tbody className='w-full h-[calc(100%-50px)] overflow-y-auto scroll-smooth block font-medium'>
          {isLoading ? (
            <SkeletonLoading />
          ) : (
            data.map((item: any, index: number) => (
              <tr className='border-b flex' key={index}>
                {columns.map((col: IColumn, index: number) => (
                  <td
                    className={`p-1.5 w-1/2 flex items-center border-r ${
                      typeof item[col.key] === 'string' ? '' : 'justify-center'
                    }`}
                    style={{ flexBasis: col.width }}
                    key={index}
                  >
                    <span className='line-clamp-1'>{item[col.key]}</span>
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className='flex items-center mt-5 justify-between gap-x-10 flex-wrap'>
        <span className='hidden sm:block w-28 h-[28px] '></span>
        <Pagination />
        <Selector level={level} />
      </div>
    </div>
  );
};

export default Table;
