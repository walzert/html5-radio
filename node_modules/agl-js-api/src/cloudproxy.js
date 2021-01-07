import { call as api_call, subscribe as api_subscribe } from './api';


export function ping() {
    return api_call("cloudproxy/ping", {});
}

export function sendMessage(data) {
    return api_call("cloudproxy/sendMessage", { "data" : data });
}

export function on_sendMessageConfirmation(handler) {
    return api_subscribe("cloudproxy/subscribe", {
        value: "sendMessageConfirmation"
    }, handler);
}

export function on_receivedMessage(handler) {
    return api_subscribe("cloudproxy/subscribe", {
        value: "receivedMessage"
    }, handler);
}

