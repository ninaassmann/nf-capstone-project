let newSliceOptions = {};

function checkRange(newSliceOptions, setSliceOptions, breedsToShowCount) {
  if (newSliceOptions.start === 0) {
    newSliceOptions = {
      start: 0,
      end: 10,
      prevDisabled: true,
      nextDisabled: false,
    };
    setSliceOptions(newSliceOptions);
  }

  if (newSliceOptions.end > breedsToShowCount) {
    newSliceOptions = {
      start: newSliceOptions.start,
      end: newSliceOptions.start + 10,
      prevDisabled: false,
      nextDisabled: true,
    };
    setSliceOptions(newSliceOptions);
  }
  setSliceOptions(newSliceOptions);
}

export function handlePrevious(
  sliceOptions,
  setSliceOptions,
  breedsToShowCount
) {
  newSliceOptions = {
    start: sliceOptions.start - 10,
    end: sliceOptions.end - 10,
    prevDisabled: false,
    nextDisabled: false,
  };
  checkRange(newSliceOptions, setSliceOptions, breedsToShowCount);
}

export function handleNext(sliceOptions, setSliceOptions, breedsToShowCount) {
  newSliceOptions = {
    start: sliceOptions.start + 10,
    end: sliceOptions.end + 10,
    prevDisabled: false,
    nextDisabled: false,
  };
  checkRange(newSliceOptions, setSliceOptions, breedsToShowCount);
}
