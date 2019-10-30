import BaseFormatter from './Base';


class SimpleFormatter extends BaseFormatter {
  format (record) {
    return `[${record.level}] ${record.message}`;
  }
}

export default SimpleFormatter;
