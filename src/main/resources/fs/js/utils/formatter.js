const formatter = {
  toBool: (s) => {
    return s === 'true';
  },
  sessionStorageRole: (s) => {
    switch (s) {
      case 'personal': {
        return 'GENERAL';
      }
      case 'enterprise': {
        return 'ENTERPRISE';
      }
      case 'pro': {
        return 'PROFESSIONAL';
      }
      default: {
        return 'GENERAL';
      }
    }
  },
};


export default formatter;
