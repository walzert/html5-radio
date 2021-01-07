import { call as api_call, subscribe as api_subscribe } from './api';


export function add_fence(name,bbox) {
    return api_call("geofence/add_fence", {"name": name, "bbox": bbox});
}

export function remove_fence(name) {
    return api_call("geofence/set", { "name" : name });
}


export function get_list_fences() {
    return api_call("geofence/list_fences", { });
}

export function get_dwell_transition() {
    return api_call("geofence/dwell_transition", { });
}

export function set_dwell_transition(value) {
    return api_call("geofence/dwell_transition", { "value" : value });
}


export function on_fence_event(handler) {
    return api_subscribe("geofence/subscribe", {
        value: "fence_event"
    }, handler);
}

