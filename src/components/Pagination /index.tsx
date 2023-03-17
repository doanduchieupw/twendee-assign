import usePagination from '../../store/page.store';
import { AngleLeft, AngleRight } from '../Icons';

const Pagination = () => {
  const { pageNumber, nextPage, previousPage, changePage, pagination, setPagination, maxPage } = usePagination();
  return (
    <div className='flex justify-center items-center'>
      <button
        onClick={() => {
          if (pageNumber > 1) {
            previousPage();
            setPagination(pageNumber - 1);
          }
        }}
        className={`${pageNumber === 1 ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'}`}
      >
        <AngleLeft />
      </button>
      <div className='flex'>
        {pagination.map((itemOfPagination, index: number) => (
          <span
            className={`text-sm font-bold w-8 leading-8 px-1.5 rounded-md text-center hover:bg-slate-50 cursor-pointer ${
              itemOfPagination === pageNumber ? 'border-2 border-blue-400 ' : ''
            }`}
            onClick={() => {
              changePage(itemOfPagination);
              setPagination(itemOfPagination);
            }}
            key={index}
          >
            {itemOfPagination}
          </span>
        ))}
      </div>
      <button
        onClick={() => {
          if (pageNumber > 1) {
            nextPage();
            setPagination(pageNumber + 1);
          }
        }}
        className={`${pageNumber === maxPage ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'}`}
      >
        <AngleRight />
      </button>
    </div>
  );
};

export default Pagination;
