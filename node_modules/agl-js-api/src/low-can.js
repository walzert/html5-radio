import { call as api_call, subscribe as api_subscribe } from './api';

export function get_list() {
    return api_call("low-can/list", {});
}

export function do_auth() {
    return api_call("low-can/auth", {});
}

export function do_write(signal_name,signal_value) {
    return api_call("low-can/write", { "signal_name": signal_name, "signal_value": signal_value});
}

export function get_signal(event) {
    return api_call("low-can/get", { "event": event });
}

export function subscribe_by_event(handler,event) {
    return api_subscribe("low-can/subscribe", {
        "event": event
    }, handler);
}

export function unsubscribe_by_event(handler,event) {
    return api_subscribe("low-can/unsubscribe", {
        "event": event
    }, handler);
}


export function subscribe_by_id(handler,id) {
    return api_subscribe("low-can/subscribe", {
        "id": id
    }, handler);
}


export function unsubscribe_by_id(handler,id) {
    return api_subscribe("low-can/unsubscribe", {
        "id": id
    }, handler);
}