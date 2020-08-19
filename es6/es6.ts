const obj = {};
Object.keys({}).forEach((key) => {
  if (obj[key] === 'undefined') {
    obj[key] = '';
  }
});
