const Level = {
  Trace: 'trace',
  Debug: 'debug',
  Info: 'info',
  Warning: 'warning',
  Error: 'error',
  Critical: 'critical'
};

export default Level;

const LevelValue = {
  [Level.Trace]: 0,
  [Level.Debug]: 10,
  [Level.Info]: 20,
  [Level.Warning]: 30,
  [Level.Error]: 40,
  [Level.Critical]: 50
};

export {LevelValue};
