import usePagination from '../../store/page.store';
import { AngleLeft, AngleRight } from '../Icons';
const MAX_PAGE = 10;
const Pagination = () => {
  const { pageNumber, nextPage, previousPage, changePage } = usePagination();
  return (
    <div className='flex justify-center items-center'>
      <button
        onClick={() => {
          pageNumber > 1 ? previousPage() : null;
        }}
        className={`${pageNumber === 1 ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'}`}
      >
        <AngleLeft />
      </button>
      <div className='flex'>
        {Array(MAX_PAGE)
          .fill(0)
          .map((_, index) => (
            <span
              className={`text-sm font-bold w-8 leading-8 px-1.5 rounded-md text-center hover:bg-slate-50 cursor-pointer ${
                pageNumber === index + 1 ? 'border-2 border-blue-400 ' : ''
              }  ${pageNumber > index + 2 || pageNumber <= index - 1 ? 'hidden' : 'block'}`}
              onClick={() => changePage(index + 1)}
            >
              {index + 1}
            </span>
          ))}
      </div>
      <button
        onClick={() => {
          pageNumber < MAX_PAGE ? nextPage() : null;
        }}
        className={`${pageNumber === MAX_PAGE ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'}`}
      >
        <AngleRight />
      </button>
    </div>
  );
};

export default Pagination;
