import { call as api_call, subscribe as api_subscribe } from './api';


export function get_location() {
    return api_call("geoclue/location", {});
}


export function on_location(handler) {
    return api_subscribe("geoclue/subscribe", {
        value: "location"
    }, handler);
}

