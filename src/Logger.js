import Level, {LevelValue} from './Level';
import Handler from './handlers';


class Logger {
  static get Level () {
    return Level;
  }

  constructor () {
    this._handlersByName = {};
    this._handlers = [];

    this.setLevel(Level.Debug);
  }

  addHandler (name, handler) {
    if (handler instanceof Handler.Base) {
      this._handlersByName[name] = handler;
      this._handlers = Object.values(this._handlersByName);
    }

    return this;
  }

  addHandlers (handlersMap) {
    Object
      .keys(handlersMap)
      .forEach((handlerName) => {
        this.addHandler(handlerName, handlersMap[handlerName])
      });

    return this;
  }

  setLevel (level) {
    const levels = Object.values(Logger.Level);

    this._level = levels.includes(level)
      ? level
      : this._level;

    const resultLevels = levels.filter((lvl) => LevelValue[lvl] >= LevelValue[this._level]);

    levels.forEach((level) => {
      if (resultLevels.includes(level)) {
        this[level] = (...args) => this._handleRecord({
          level,
          args
        });
      } else {
        this[level] = () => null;
      }
    });

    return this;
  }

  _handleRecord (record) {
    this._handlers.forEach((handler) => handler.handleRecord(record));
  }
}

export default Logger;
