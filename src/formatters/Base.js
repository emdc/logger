class BaseFormatter {
  // eslint-disable-next-line no-unused-vars, class-methods-use-this
  format (record) {
    throw new Error('Using of Logger.BaseFormatter method');
  }
}

export default BaseFormatter;
