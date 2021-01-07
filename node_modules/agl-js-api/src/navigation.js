import { call as api_call, subscribe as api_subscribe } from './api';


export function set_broadcast_status(state) {
    return api_call("navigation/broadcast_status", {"state":state});
}

export function set_broadcast_position(position) {
    return api_call("navigation/broadcast_position", { "position":position});
}


export function set_broadcast_waypoints(waypoints) {
    return api_call("navigation/broadcast_waypoints", {"waypoints": waypoints});
}



export function on_status(handler) {
    return api_subscribe("navigation/subscribe", {
        value: "status"
    }, handler);
}


export function on_position(handler) {
    return api_subscribe("navigation/subscribe", {
        value: "position"
    }, handler);
}

export function on_waypoints(handler) {
    return api_subscribe("navigation/subscribe", {
        value: "waypoints"
    }, handler);
}
