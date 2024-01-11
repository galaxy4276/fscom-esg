const validator = {
  checkAtLeastDirtyByStrings: (strings) => {
    for (const s of strings) {
      console.log('test');
      if (s.length === 0) {
        return false;
      }
    }
    return true;
  },
};

export default validator;
