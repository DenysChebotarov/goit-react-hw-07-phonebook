import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';

import { setStatusFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  const onChange = e => {
    dispatch(setStatusFilter(e.currentTarget.value.toLocaleLowerCase()));
  };

  return (
    <div className={s.container}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={value}
          placeholder="Name"
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default Filter;