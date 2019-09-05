import BaseHandler from './Base';
import Level from '../Level';


// eslint-disable-next-line complexity
const getStyleByLevel = (level) => {
  switch (level) {
    case Level.Trace:
      return 'background: #ffffff; color: #969696';
    case Level.Info:
      return 'background: #ffffff; color: #00aecc';
    case Level.Warning:
      return 'background: #ffffff; color: #f67731';
    case Level.Error:
    case Level.Critical:
      return 'background: #ffffff; color: #ff4162';
    case Level.Debug:
    default:
      return 'background: #ffffff; color: #333333';
  }
};

class ConsoleHandler extends BaseHandler {
  handleRecord (record) {
    if (this.formatter) {
      console.log(`%c ${this.formatter.format(record)}`, getStyleByLevel(record.level)); // eslint-disable-line no-console
    }
  }
}

export default ConsoleHandler;
