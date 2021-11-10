const objRef = require('@danielcobo/objref');
const rmTrailing = require('@danielcobo/rmtrailing');

/**
 * Set a deep value within an object
 * @param {Object} obj - input object to set value on
 * @param {string} path - path of value
 * @param {string} separator - path separator
 * @param {*} valToSet - value that will be set
 * @returns {Object} - input object
 */
module.exports = function objSet(obj, path, separator, valToSet) {
  path = rmTrailing(path, separator);

  const i = path.lastIndexOf(separator);
  if (i < 1) {
    obj[path] = valToSet;
  } else {
    const prop = path.slice(i + 1);
    const tree = path.slice(0, i);
    objRef(obj, tree, separator, true)[prop] = valToSet;
  }

  return obj;
};
