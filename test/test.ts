import { expect, tap } from 'tapbundle';
import * as beautybrowser from '../ts/index';

let testBeautyBrowser: beautybrowser.BeautyBrowser;

tap.test('first test', async () => {
  testBeautyBrowser = new beautybrowser.BeautyBrowser()
});

tap.test('should log a message', async () => {
  testBeautyBrowser.handleLog({
    logContext: {
      company: 'Lossless GmbH',
      companyunit: 'Lossless.Cloud',
      containerName: 'testContainer',
      environment: 'test',
      runtime: 'browser',
      zone: 'serve.zone'
    },
    logLevel: 'info',
    message: 'ok: Hi, this is a message!'
  })
})

tap.start();
