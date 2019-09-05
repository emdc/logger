import BaseFormatter from './Base';


class SimpleFormatter extends BaseFormatter {
  format (record) {
    return `[${record.level}] ${record.args.join(', ')}`;
  }
}

export default SimpleFormatter;
