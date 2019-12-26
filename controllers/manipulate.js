const convertToArray = data => {
  const result = data.split(',,');
  return result;
};

module.exports.convertToArray = convertToArray;