import { expect, tap } from '@pushrocks/tapbundle';

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

let testDestination: smartlogDestinationDevtools.SmartlogDestinationDevtools;

tap.test('first test', async () => {
  testDestination = new smartlogDestinationDevtools.SmartlogDestinationDevtools();
});

tap.test('should log a normal message', async () => {
  testDestination.handleLog({
    timestamp: Date.now(),
    type: 'log',
    context: logContext,
    level: 'info',
    message: 'wait, what? Hi, this is a message!'
  });
});

tap.test('should log a success message', async () => {
  testDestination.handleLog({
    timestamp: Date.now(),
    context: logContext,
    type: 'log',
    level: 'info',
    message: 'success: Hi, this is a message!'
  });
});

tap.start();
