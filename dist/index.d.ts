import { ILogDestination, ILogPackage } from 'smartlog-interfaces';
export interface IBeautyLogObject {
    logType: string;
    logString: string;
}
export declare class BeautyBrowser implements ILogDestination {
    handleLog(logPackage: ILogPackage): void;
    /**
     * parse logs for display
     */
    private parseLog;
    private logInBrowser(beautyLogObjectArg);
}
