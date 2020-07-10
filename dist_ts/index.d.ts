import { ILogDestination, ILogPackage } from '@pushrocks/smartlog-interfaces';
export declare class SmartlogDestinationDevtools implements ILogDestination {
    handleLog(logPackageArg: ILogPackage): Promise<void>;
    private logInBrowser;
}
