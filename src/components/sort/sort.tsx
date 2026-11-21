import { useState } from 'react';
import { SortType, SORT_TYPES } from './const';

type SortProps = {
  currentSort: SortType;
  onSortChange: (sort: SortType) => void;
};

function Sort({ currentSort, onSortChange }: SortProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleSortClick = (sort: SortType) => {
    onSortChange(sort);
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom${
          isOpen ? ' places__options--opened' : ''
        }`}
      >
        {SORT_TYPES.map((sort) => (
          <li
            key={sort}
            className={`places__option${
              sort === currentSort ? ' places__option--active' : ''
            }`}
            tabIndex={0}
            onClick={() => handleSortClick(sort)}
          >
            {sort}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;
