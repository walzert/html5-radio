import { call as api_call, subscribe as api_subscribe } from './api';


export function subscribe(name,interval) {
    return api_call("high-viwi/subscribe", {"name":name, "interval":interval});
}
export function unsubscribe(name,interval) {
    return api_call("high-viwi/unsubscribe", {"name":name, "interval":interval});
}


export function get_board(name) {
    return api_call("high-viwi/get", {"name":name});
}

export function get_board_fields(name,fields) {
    return api_call("high-viwi/get", {"name":name, "fields":fields});
}

