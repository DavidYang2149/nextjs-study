import React from 'react';

export interface Props {
  value: string;
  onChangeSample: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SampleInput = ({ value, onChangeSample }: Props) => {
  return (
    <div>
      <label htmlFor="sample-input">입력</label>
      <input
        type="text"
        id="sample-input"
        name="sample"
        value={value}
        onChange={onChangeSample}
      />
    </div>
  );
};

export default SampleInput;
