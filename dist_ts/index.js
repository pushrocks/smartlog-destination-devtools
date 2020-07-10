"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartlogDestinationDevtools = void 0;
class SmartlogDestinationDevtools {
    async handleLog(logPackageArg) {
        await this.logInBrowser(logPackageArg);
    }
    async logInBrowser(logPackage) {
        switch (logPackage.level) {
            case 'error':
                console.log(`%c Error: %c ${logPackage.message}`, 'background:#000000;color:#800000;', 'color:#000000;');
                break;
            case 'info':
                console.log(`%c Info: %c ${logPackage.message}`, 'background:#EC407A;color:#ffffff;', 'color:#EC407A;');
                break;
            case 'ok':
                console.log(`%c OK: %c ${logPackage.message}`, 'background:#000000;color:#8BC34A;', 'color:#000000;');
                break;
            case 'success':
                console.log(`%c Success: %c ${logPackage.message}`, 'background:#8BC34A;color:#ffffff;', 'color:#8BC34A;');
                break;
            case 'warn':
                console.log(`%c Warn: %c ${logPackage.message}`, 'background:#000000;color:#FB8C00;', 'color:#000000;');
                break;
            case 'note':
                console.log(`%c Note: %c ${logPackage.message}`, 'background:#42A5F5;color:#ffffff', 'color:#42A5F5;');
                break;
            default:
                console.log(`unknown logType for "${logPackage.message}"`);
                break;
        }
    }
}
exports.SmartlogDestinationDevtools = SmartlogDestinationDevtools;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxNQUFhLDJCQUEyQjtJQUMvQixLQUFLLENBQUMsU0FBUyxDQUFDLGFBQTBCO1FBQy9DLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxVQUF1QjtRQUNoRCxRQUFRLFVBQVUsQ0FBQyxLQUFLLEVBQUU7WUFDeEIsS0FBSyxPQUFPO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQ1QsZ0JBQWdCLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFDcEMsbUNBQW1DLEVBQ25DLGdCQUFnQixDQUNqQixDQUFDO2dCQUNGLE1BQU07WUFDUixLQUFLLE1BQU07Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FDVCxlQUFlLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFDbkMsbUNBQW1DLEVBQ25DLGdCQUFnQixDQUNqQixDQUFDO2dCQUNGLE1BQU07WUFDUixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FDVCxhQUFhLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFDakMsbUNBQW1DLEVBQ25DLGdCQUFnQixDQUNqQixDQUFDO2dCQUNGLE1BQU07WUFDUixLQUFLLFNBQVM7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FDVCxrQkFBa0IsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUN0QyxtQ0FBbUMsRUFDbkMsZ0JBQWdCLENBQ2pCLENBQUM7Z0JBQ0YsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUNULGVBQWUsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUNuQyxtQ0FBbUMsRUFDbkMsZ0JBQWdCLENBQ2pCLENBQUM7Z0JBQ0YsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUNULGVBQWUsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUNuQyxrQ0FBa0MsRUFDbEMsZ0JBQWdCLENBQ2pCLENBQUM7Z0JBQ0YsTUFBTTtZQUNSO2dCQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLFVBQVUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUMzRCxNQUFNO1NBQ1Q7SUFDSCxDQUFDO0NBQ0Y7QUF0REQsa0VBc0RDIn0=