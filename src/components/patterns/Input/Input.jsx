import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useDebounce from 'customHooks/useDebounce';

const Input = ({ type, value, placeholder, onChange, icon, debounceTime }) => {
  const [query, setQuery] = useState(value);
  const debouncedValue = useDebounce(query, debounceTime);

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue, onChange]);

  return (
    <div className="flex w-full input-border outline-none text-sm text-[#33323eb3] focus-text-[#33323ee6] bg-[#f7f7f9] border-[#e1e3e6]">
      {icon && (
        <span className="pl-3 flex items-center pointer-events-none bg-transparent text-[#33323eb3]">{icon}</span>
      )}
      <input
        type={type}
        value={query}
        className="w-full bg-transparent outline-none text-sm px-2.5 py-3"
        placeholder={placeholder}
        onChange={(event) => setQuery(event.target.value)}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  icon: PropTypes.node,
  debounceTime: PropTypes.number,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  icon: null,
  placeholder: '',
  onChange: () => null,
  debounceTime: 0,
};

export default Input;
