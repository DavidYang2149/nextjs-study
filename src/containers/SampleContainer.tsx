import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SampleInput from 'src/components/SampleInput';

import SampleItem from 'src/components/SampleItem';
import { RootState } from 'src/slices/rootReducer';
import { setSample } from 'src/slices/sample/sample';

const SampleContainer = () => {
  const dispatch = useDispatch();
  const { sample } = useSelector((state: RootState) => ({
    sample: state.sample,
  }));
  const value = sample.sample;

  const handleChangeSample = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = (event.target as HTMLInputElement);
    dispatch(setSample({ name, value }));
  };

  return (
    <>
      <SampleItem />
      <SampleInput
        value={value}
        onChangeSample={handleChangeSample}
      />
    </>
  )
};

export default SampleContainer;
