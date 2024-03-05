// libraries/lodashLibrary.js
import _ from 'lodash';

function getProperty(object, path, defaultValue) {
  return _.get(object, path, defaultValue);
}

export default getProperty;