import './AFB.js';

import * as afmMain from './afm-main';
//import * as aglspeech from './agl-speech';
import * as audiomixer from './audiomixer';
import * as bluetooth from './bluetooth';
import * as bluetoothmap from './bluetooth-map';
import * as bluetoothpbap from './bluetooth';
//import * as cloudproxy from './cloudproxy';
//import * as geoclue from './geoclue';
//import * as geofence from './geofence';
//import * as gps from './gps';
//import * as harvester from './harvester';
//import * as helloworld from './helloworld';
//import * as highviwi from './high-viwi';
import * as homescreen from './homescreen';
import * as hvac from './hvac';
//import * as identity from './identity';
//import * as iiodevices from './iiodevices';
import * as lowcan from './low-can';
import * as mediaplayer from './mediaplayer';
//import * as mediascanner from './mediascanner';
//import * as navigation from './navigation';
import * as network from './network';
//import * as nfc from './nfc';
//import * as persistence from './persistence';
import * as radio from './radio';
import * as signalcomposer from './signal-composer';
//import * as taskmanager from './taskmanager';
//import * as telephony from './telephony';
//import * as unicens from './unicens';
//import * as unicenscontroller from './unicens-controller';
//import * as weather from './weather';

import * as api from './api';

api.init();

export {
    
    afmMain,
    //aglspeech,
    audiomixer,
    bluetooth,
    bluetoothmap,
    bluetoothpbap,
    //cloudproxy,
    //geoclue,
    //geofence,
    //gps,
    //harvester,
    //helloworld,
    //highviwi,
    homescreen,
    hvac,
    //identity,
    //iiodevices,
    lowcan,
    mediaplayer,
    //mediascanner,
    //navigation,
    //network,
    //nfc,
    //persistence,
    radio,
    signalcomposer,
    //taskmanager,
    //telephony,
    //unicens,
    //unicenscontroller,
    //weather,
    api
}
