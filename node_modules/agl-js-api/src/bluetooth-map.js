import { call as api_call, subscribe as api_subscribe } from './api';



export function do_compose(recipient,message) {
    return api_call("bluetooth-map/compose", { "recipient" : recipient, "message" : message });
}

export function get_message(handle) {
    return api_call("bluetooth-map/message", {"handle": handle});
}


export function list_messages(folder) {
    return api_call("bluetooth-map/list_messages", {"folder": folder});
}



export function on_notification(handler) {
    return api_subscribe("bluetooth-map/subscribe", {
        value: "notification"
    }, handler);
}

