/** @format */

import {AppRegistry} from 'react-native';
//import Root from './native/container/Root';
import Root from "./src/container/Root";
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Root);
