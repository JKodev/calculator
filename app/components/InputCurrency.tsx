import React, { FC, InputHTMLAttributes, useCallback, useRef, useState } from "react";

interface InputCurrencyProps extends InputHTMLAttributes<HTMLInputElement> {
  symbol: string,
  onUpdate: (value: string | number | readonly string[] | undefined) => void,
}


const InputCurrency: FC<InputCurrencyProps> = ({ symbol, value, onUpdate, ...props }) => {
  const [editEnabled, setEditEnabled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEditEnabled(value != e.target.value);
  }, [setEditEnabled, value]);

  const handleUpdate = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (onUpdate && typeof onUpdate === 'function') {
      onUpdate(inputRef?.current?.value);
    }
  }, [onUpdate]);

  return (
    <div className="border-b-2 border-dotted flex">
      <span>{symbol}</span>
      <input {...props} type="number" defaultValue={value} className="border-0 outline-0 text-right w-11/12" onChange={handleChange} ref={inputRef} step="0.01" />
      { editEnabled && (<button disabled={!editEnabled} type="button" onClick={handleUpdate}
               className="p-1 bg-blue-600 border-0 text-white text-xs rounded disabled:bg-blue-400 disabled:text-gray-600">
        Save
      </button>)}
    </div>
  );
};

export default InputCurrency;
