import React from 'react';
import { useSelector } from 'react-redux';
import SampleInput from 'src/components/SampleInput';

import SampleItem from 'src/components/SampleItem';
import { RootState } from 'src/slices/rootReducer';

const SampleContainer = () => {
  const { sample } = useSelector((state: RootState) => ({
    sample: state.sample,
  }));
  const value = sample.sample;
  return (
    <>
      <SampleItem />
      <SampleInput value={value} />
    </>
  )
};

export default SampleContainer;
