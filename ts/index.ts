import * as plugins from './beautybrowser.plugins';
import { ILogDestination, ILogPackage } from 'smartlog-interfaces';

export interface IBeautyLogObject {
  logType: string;
  logString: string;
}

export class BeautyBrowser implements ILogDestination {
  handleLog(logPackage: ILogPackage) {
    this.logInBrowser(this.parseLog(logPackage.message));
  }

  /**
   * parse logs for display
   */
  private parseLog = (stringToParseArg: string): IBeautyLogObject => {
    const parseLogRegex = /^(success|ok|info|warn|error):\s(.*)/;
    const regexResult = parseLogRegex.exec(stringToParseArg);
    if(regexResult && regexResult.length === 3) {
      return {
        logType: regexResult[1],
        logString: regexResult[2]
      }
    } else {
      return {
        logType: 'log',
        logString: stringToParseArg
      }
    }
  };

  private logInBrowser(beautyLogObjectArg: IBeautyLogObject) {
    const {logType, logString} = beautyLogObjectArg;
    switch (logType) {
      case 'error':
        console.log(
          '%c Error: %c ' + logString,
          'background:#000000;color:#800000;',
          'color:#000000;'
        );
        break;
      case 'info':
        console.log(
          '%c Info: %c ' + logString,
          'background:#EC407A;color:#ffffff;',
          'color:#EC407A;'
        );
        break;
      case 'ok':
        console.log('%c OK: %c ' + logString, 'background:#000000;color:#8BC34A;', 'color:#000000;');
        break;
      case 'success':
        console.log(
          '%c Success: %c ' + logString,
          'background:#8BC34A;color:#ffffff;',
          'color:#8BC34A;'
        );
        break;
      case 'warn':
        console.log(
          '%c Warn: %c ' + logString,
          'background:#000000;color:#FB8C00;',
          'color:#000000;'
        );
        break;
      case 'log':
        console.log('%c Log: %c ' + logString, 'background:#42A5F5;color:#ffffff', 'color:#42A5F5;');
        break;
      default:
        console.log('unknown logType for "' + logString + '"');
        break;
    }
  }
}
