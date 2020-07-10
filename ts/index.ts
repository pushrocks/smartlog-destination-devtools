import * as plugins from './beautybrowser.plugins';
import { ILogDestination, ILogPackage } from '@pushrocks/smartlog-interfaces';


export class SmartlogDestinationDevtools implements ILogDestination {
  public async handleLog(logPackageArg: ILogPackage) {
    await this.logInBrowser(logPackageArg);
  }

  private async logInBrowser(logPackage: ILogPackage) {
    switch (logPackage.level) {
      case 'error':
        console.log(
          `%c Error: %c ${logPackage.message}`,
          'background:#000000;color:#800000;',
          'color:#000000;'
        );
        break;
      case 'info':
        console.log(
          `%c Info: %c ${logPackage.message}`,
          'background:#EC407A;color:#ffffff;',
          'color:#EC407A;'
        );
        break;
      case 'ok':
        console.log(
          `%c OK: %c ${logPackage.message}`,
          'background:#000000;color:#8BC34A;',
          'color:#000000;'
        );
        break;
      case 'success':
        console.log(
          `%c Success: %c ${logPackage.message}`,
          'background:#8BC34A;color:#ffffff;',
          'color:#8BC34A;'
        );
        break;
      case 'warn':
        console.log(
          `%c Warn: %c ${logPackage.message}`,
          'background:#000000;color:#FB8C00;',
          'color:#000000;'
        );
        break;
      case 'note':
        console.log(
          `%c Note: %c ${logPackage.message}`,
          'background:#42A5F5;color:#ffffff',
          'color:#42A5F5;'
        );
        break;
      default:
        console.log(`unknown logType for "${logPackage.message}"`);
        break;
    }
  }
}
