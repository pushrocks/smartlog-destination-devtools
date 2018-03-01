import { expect, tap } from 'tapbundle';

// preparation
import { ILogContext } from 'smartlog-interfaces';
import * as smartlog from 'smartlog'

const logger = smartlog.getDefaultLogger();
const logContext: ILogContext = {
  company: 'Lossless GmbH',
  companyunit: 'Lossless.Cloud',
  containerName: 'testContainer',
  environment: 'staging',
  runtime: 'browser',
  zone: 'serve.zone'
}

// import the module to test
import * as beautybrowser from '../ts/index';

let testBeautyBrowser: beautybrowser.BeautyBrowser;

tap.test('first test', async () => {
  testBeautyBrowser = new beautybrowser.BeautyBrowser()
});

tap.test('should log a normal message', async () => {
  testBeautyBrowser.handleLog({
    logContext: logContext,
    logLevel: 'info',
    message: 'wait, what? Hi, this is a message!'
  })
})

tap.test('should log a success message', async () => {
  testBeautyBrowser.handleLog({
    logContext: logContext,
    logLevel: 'info',
    message: 'success: Hi, this is a message!'
  })
})

tap.test('should log a ok message', async () => {
  testBeautyBrowser.handleLog({
    logContext: logContext,
    logLevel: 'info',
    message: 'ok: Hi, this is a message!'
  })
})

tap.test('should log a error message', async () => {
  testBeautyBrowser.handleLog({
    logContext: logContext,
    logLevel: 'info',
    message: 'error: Hi, this is a message!'
  })
})

tap.start();
