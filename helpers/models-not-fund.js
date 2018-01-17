import httpStatus from 'http-status';
import APIError   from './APIError';

/**
 * Check if the item exists
 * @param model
 */
function notFoundChecker(model) {
  if (!model) {
    throw new APIError('This element doesn\'t exist', httpStatus.NOT_FOUND);
  }
}

export { notFoundChecker };