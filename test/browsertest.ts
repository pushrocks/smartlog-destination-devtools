// preparation
import { ILogContext } from '@pushrocks/smartlog-interfaces';
import * as smartlog from '@pushrocks/smartlog';

const logger = smartlog.defaultLogger;
const logContext: ILogContext = {
  company: 'Lossless GmbH',
  companyunit: 'Lossless.Cloud',
  containerName: 'testContainer',
  environment: 'staging',
  runtime: 'chrome',
  zone: 'servezone'
};

// import the module to test
import * as smartlogDestinationDevtools from '../ts/index';

const testDestination = new smartlogDestinationDevtools.SmartlogDestinationDevtools();

testDestination.handleLog({
  timestamp: Date.now(),
  type: 'log',
  context: logContext,
  level: 'info',
  message: 'wait, what? Hi, this is a message!'
});
