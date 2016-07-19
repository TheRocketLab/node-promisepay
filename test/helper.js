import path from 'path';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { addPath } from 'app-module-path';

const appPath = (p = '/') => path.join(__dirname, '..', p);

addPath(appPath());

global.ROOT = appPath();
global.TEST_ROOT = appPath('test');
global.SRC = appPath('src');

// Chai Configuration - http://chaijs.com/plugins
global.chai = chai;
global.should = chai.should();
global.chaiAsPromised = chaiAsPromised;
global.chai.use(chaiAsPromised);
global.expect = chai.expect;

// Sinon
global.sinon = sinon;
global.sinonChai = sinonChai;
global.chai.use(sinonChai);
