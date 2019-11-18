const hideElementFixed = (element, setRemove) => {
  if (element) {
    const bounding = element.getBoundingClientRect().top;
    const spaceBelow = bounding - window.innerHeight;
    if (spaceBelow < 0) {
      setRemove('-removed');
    } else {
      setRemove('');
    }
  }
};

export default hideElementFixed;
