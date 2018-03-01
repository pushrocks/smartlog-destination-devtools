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
            if (regexResult && regexResult.length === 3) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVFBO0lBQUE7UUFLRTs7V0FFRztRQUNLLGFBQVEsR0FBRyxDQUFDLGdCQUF3QixFQUFvQixFQUFFO1lBQ2hFLE1BQU0sYUFBYSxHQUFHLHNDQUFzQyxDQUFDO1lBQzdELE1BQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN6RCxFQUFFLENBQUEsQ0FBQyxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxNQUFNLENBQUM7b0JBQ0wsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO2lCQUMxQixDQUFBO1lBQ0gsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQztvQkFDTCxPQUFPLEVBQUUsS0FBSztvQkFDZCxTQUFTLEVBQUUsZ0JBQWdCO2lCQUM1QixDQUFBO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQztJQTRDSixDQUFDO0lBakVDLFNBQVMsQ0FBQyxVQUF1QjtRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQXFCTyxZQUFZLENBQUMsa0JBQW9DO1FBQ3ZELE1BQU0sRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFDLEdBQUcsa0JBQWtCLENBQUM7UUFDaEQsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNoQixLQUFLLE9BQU87Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FDVCxlQUFlLEdBQUcsU0FBUyxFQUMzQixtQ0FBbUMsRUFDbkMsZ0JBQWdCLENBQ2pCLENBQUM7Z0JBQ0YsS0FBSyxDQUFDO1lBQ1IsS0FBSyxNQUFNO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQ1QsY0FBYyxHQUFHLFNBQVMsRUFDMUIsbUNBQW1DLEVBQ25DLGdCQUFnQixDQUNqQixDQUFDO2dCQUNGLEtBQUssQ0FBQztZQUNSLEtBQUssSUFBSTtnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxTQUFTLEVBQUUsbUNBQW1DLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQkFDN0YsS0FBSyxDQUFDO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQ1QsaUJBQWlCLEdBQUcsU0FBUyxFQUM3QixtQ0FBbUMsRUFDbkMsZ0JBQWdCLENBQ2pCLENBQUM7Z0JBQ0YsS0FBSyxDQUFDO1lBQ1IsS0FBSyxNQUFNO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQ1QsY0FBYyxHQUFHLFNBQVMsRUFDMUIsbUNBQW1DLEVBQ25DLGdCQUFnQixDQUNqQixDQUFDO2dCQUNGLEtBQUssQ0FBQztZQUNSLEtBQUssS0FBSztnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxTQUFTLEVBQUUsa0NBQWtDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQkFDN0YsS0FBSyxDQUFDO1lBQ1I7Z0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZELEtBQUssQ0FBQztRQUNWLENBQUM7SUFDSCxDQUFDO0NBQ0Y7QUFsRUQsc0NBa0VDIn0=