let newSliceOptions = {};

function checkRange(newSliceOptions) {
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
      end: newSliceOptions.end,
      prevDisabled: false,
      nextDisabled: true,
    };
    setSliceOptions(newSliceOptions);
  }
  setSliceOptions(newSliceOptions);
}

export function handlePrevious() {
  newSliceOptions = {
    start: sliceOptions.start - 10,
    end: sliceOptions.end - 10,
    prevDisabled: false,
    nextDisabled: false,
  };
  checkRange(newSliceOptions);
}

export function handleNext() {
  newSliceOptions = {
    start: sliceOptions.start + 10,
    end: sliceOptions.end + 10,
    prevDisabled: false,
    nextDisabled: false,
  };
  checkRange(newSliceOptions);
}
