import React from 'react';

export interface Props {
  value: string;
}

const SampleInput = ({ value }: Props) => {
  return (
    <div>
      <label htmlFor="sample-input">입력</label>
      <input type="text" id="sample-input" value={value} />
    </div>
  )
};

export default SampleInput;
