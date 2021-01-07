import { call as api_call, subscribe as api_subscribe } from './api';



export function on_presence(handler) {
    return api_subscribe("nfc/subscribe", {
        value: "presence"
    }, handler);
}

