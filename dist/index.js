"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BeautyBrowser {
    constructor() {
        /**
         * parse logs for display
         */
        this.parseLog = (stringToParseArg) => {
            const parseLogRegex = /^(success|ok|info|warn|error):\s(.*)/;
            const regexResult = parseLogRegex.exec(stringToParseArg);
            if (regexResult.length === 3) {
                return {
                    logType: regexResult[1],
                    logString: regexResult[2]
                };
            }
            else {
                return {
                    logType: 'log',
                    logString: stringToParseArg
                };
            }
        };
    }
    handleLog(logPackage) {
        this.logInBrowser(this.parseLog(logPackage.message));
    }
    logInBrowser(beautyLogObjectArg) {
        const { logType, logString } = beautyLogObjectArg;
        switch (logType) {
            case 'error':
                console.log('%c Error: %c ' + logString, 'background:#000000;color:#800000;', 'color:#000000;');
                break;
            case 'info':
                console.log('%c Info: %c ' + logString, 'background:#EC407A;color:#ffffff;', 'color:#EC407A;');
                break;
            case 'ok':
                console.log('%c OK: %c ' + logString, 'background:#000000;color:#8BC34A;', 'color:#000000;');
                break;
            case 'success':
                console.log('%c Success: %c ' + logString, 'background:#8BC34A;color:#ffffff;', 'color:#8BC34A;');
                break;
            case 'warn':
                console.log('%c Warn: %c ' + logString, 'background:#000000;color:#FB8C00;', 'color:#000000;');
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
exports.BeautyBrowser = BeautyBrowser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVFBO0lBQUE7UUFLRTs7V0FFRztRQUNLLGFBQVEsR0FBRyxDQUFDLGdCQUF3QixFQUFvQixFQUFFO1lBQ2hFLE1BQU0sYUFBYSxHQUFHLHNDQUFzQyxDQUFDO1lBQzdELE1BQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN6RCxFQUFFLENBQUEsQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQztvQkFDTCxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7aUJBQzFCLENBQUE7WUFDSCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sTUFBTSxDQUFDO29CQUNMLE9BQU8sRUFBRSxLQUFLO29CQUNkLFNBQVMsRUFBRSxnQkFBZ0I7aUJBQzVCLENBQUE7WUFDSCxDQUFDO1FBQ0gsQ0FBQyxDQUFDO0lBNENKLENBQUM7SUFqRUMsU0FBUyxDQUFDLFVBQXVCO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBcUJPLFlBQVksQ0FBQyxrQkFBb0M7UUFDdkQsTUFBTSxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUMsR0FBRyxrQkFBa0IsQ0FBQztRQUNoRCxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUssT0FBTztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUNULGVBQWUsR0FBRyxTQUFTLEVBQzNCLG1DQUFtQyxFQUNuQyxnQkFBZ0IsQ0FDakIsQ0FBQztnQkFDRixLQUFLLENBQUM7WUFDUixLQUFLLE1BQU07Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FDVCxjQUFjLEdBQUcsU0FBUyxFQUMxQixtQ0FBbUMsRUFDbkMsZ0JBQWdCLENBQ2pCLENBQUM7Z0JBQ0YsS0FBSyxDQUFDO1lBQ1IsS0FBSyxJQUFJO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLFNBQVMsRUFBRSxtQ0FBbUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUM3RixLQUFLLENBQUM7WUFDUixLQUFLLFNBQVM7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FDVCxpQkFBaUIsR0FBRyxTQUFTLEVBQzdCLG1DQUFtQyxFQUNuQyxnQkFBZ0IsQ0FDakIsQ0FBQztnQkFDRixLQUFLLENBQUM7WUFDUixLQUFLLE1BQU07Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FDVCxjQUFjLEdBQUcsU0FBUyxFQUMxQixtQ0FBbUMsRUFDbkMsZ0JBQWdCLENBQ2pCLENBQUM7Z0JBQ0YsS0FBSyxDQUFDO1lBQ1IsS0FBSyxLQUFLO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLFNBQVMsRUFBRSxrQ0FBa0MsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUM3RixLQUFLLENBQUM7WUFDUjtnQkFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDdkQsS0FBSyxDQUFDO1FBQ1YsQ0FBQztJQUNILENBQUM7Q0FDRjtBQWxFRCxzQ0FrRUMifQ==