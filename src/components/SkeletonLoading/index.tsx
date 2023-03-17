const SkeletonLoading = () => {
  return (
    <div className='w-full h-full'>
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <tr className='border-b flex animate-pulse'>
            <td className='h-[60px] w-1/2 p-2 flex items-center border-r basis-2/5'>
              <span className='h-10 w-full bg-slate-200 rounded-md'></span>
            </td>
            <td className='h-[60px] w-1/2 p-2 flex items-center border-r basis-2/5'>
              <span className='h-10 w-full bg-slate-200 rounded-md'></span>
            </td>
            <td className='h-[60px] w-1/2 p-2 flex items-center border-r basis-1/5'>
              <span className='h-10 w-full bg-slate-200 rounded-md'></span>
            </td>
          </tr>
        ))}
    </div>
  );
};

export default SkeletonLoading;
