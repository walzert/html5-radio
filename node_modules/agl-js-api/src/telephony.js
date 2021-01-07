import { call as api_call, subscribe as api_subscribe } from './api';



export function dial(number) {
    return api_call("telephony/dial", {"value": number});
}

export function hangup() {
    return api_call("telephony/hangup", { });
}

export function answer() {
    return api_call("telephony/answer", { });
}


export function on_callStateChanged(handler) {
    return api_subscribe("telephony/callStateChanged", {
        value: "callStateChanged"
    }, handler);
}

export function on_dialingCall(handler) {
    return api_subscribe("telephony/subscribe", {
        value: "dialingCall"
    }, handler);
}

export function on_incomingCall(handler) {
    return api_subscribe("telephony/subscribe", {
        value: "incomingCall"
    }, handler);
}

export function on_terminatedCall(handler) {
    return api_subscribe("telephony/subscribe", {
        value: "terminatedCall"
    }, handler);
}

export function on_online(handler) {
    return api_subscribe("telephony/subscribe", {
        value: "online"
    }, handler);
}
metadata