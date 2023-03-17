import React from 'react';
import usePagination from '../../store/page.store';

interface ISelector {
  level: number[];
}
const Selector: React.FC<ISelector> = (props: ISelector) => {
  const { level } = props;
  const { setItemOnPage } = usePagination();
  return (
    <select onChange={(e) => setItemOnPage(parseInt(e.target.value))}>
      {level.map((item) => (
        <option value={item}>{item + ' / page'}</option>
      ))}
    </select>
  );
};

export default Selector;
