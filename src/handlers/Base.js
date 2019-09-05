import Formatter from '../formatters';


class BaseHandler {
  constructor (formatter) {
    this._formatter = formatter instanceof Formatter.Base
      ? formatter
      : null;
  }

  get formatter () {
    return this._formatter;
  }

  // eslint-disable-next-line no-unused-vars, class-methods-use-this
  handleRecord (record) {
    throw new Error('Using of Logger.Handler.Base');
  }
}

export default BaseHandler;
