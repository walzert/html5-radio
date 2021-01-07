import { call as api_call, subscribe as api_subscribe } from './api';


export function get_location() {
    return api_call("gps/location", {});
}

export function do_record(state) {
    return api_call("gps/do_record", {"state": state});
}



export function on_location(handler) {
    return api_subscribe("gps/subscribe", {
        value: "location"
    }, handler);
}

