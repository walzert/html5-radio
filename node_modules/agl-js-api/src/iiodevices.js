import { call as api_call, subscribe as api_subscribe } from './api';


export function on_acceleration(handler, event, args,frequency) {
    return api_subscribe("iiodevices/subscribe", {
        event: "acceleration", "args": args, "frequency" : frequency
    }, handler);
}

export function on_gyroscope(handler, event, args,frequency) {
    return api_subscribe("iiodevices/subscribe", {
        event: "gyroscope", "args": args, "frequency" : frequency
    }, handler);
}


export function on_compass(handler, event, args,frequency) {
    return api_subscribe("iiodevices/subscribe", {
        event: "compass", "args": args, "frequency" : frequency
    }, handler);
}

