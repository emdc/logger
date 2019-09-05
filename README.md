# @emdc/logger
Modern syntax JS logging library

## Dependencies

Zero!

_Note: the project uses modern JS syntax with classes and import/export/etc keywords._

## Install

`npm i --save @emdc/logger`

## Using

Example of init:

```
import Logger, {Handler, Formatter} from '@emdc/logger';


const logger = new Logger();

logger
  .setLevel(Logger.Level.Warning)
  .addHandler('console', new Handler.Console(new Formatter.Simple));
```

And using:

```
logger.warning('Test');   // Should write: '[warning] Test'
```

## Levels

* _Trace_ — for behavior tracking at development. Value: 0.
* _Debug_. Value: 10.
* _Info_ — information messages for users or someone else. Value: 20.
* _Warning_. Value: 30.
* _Error_. Value: 40.
* _Critical_ — crash reports after which the application closes. Value: 50.

## Record format

```
{
  args: [string],         // argument of method logger[level](...args),
  level: string           // name of level. For example: 'warning' or 'debug'
}
```

## Custom handlers

You should extend the Handler.Base interface. For example:

```
class ConsoleHandler extends BaseHandler {
  handleRecord (record) {
    if (this.formatter) {
      console.log(this.formatter.format(record));
    }
  }
}
```

## Custom formatters

You should extend Formatter.Base interface. For example:

```
class SimpleFormatter extends BaseFormatter {
  format (record) {
    return `[${record.level}] ${record.args.join(', ')}`;
  }
}
```
