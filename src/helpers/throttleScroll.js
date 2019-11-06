const throttle = (fn, wait) => {
  let time = Date.now();
  // eslint-disable-next-line func-names
  return function() {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
};

export default throttle;
