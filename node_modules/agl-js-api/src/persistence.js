import { call as api_call, subscribe as api_subscribe } from './api';


export function do_insert(key,value) {
    return api_call("persistence/insert", { "key": key, "value":value});
}

export function do_update(key,value) {
    return api_call("persistence/update", { "key": key, "value":value});
}

export function do_delete(key) {
    return api_call("persistence/delete", {"key":key});
}

export function do_read(key) {
    return api_call("persistence/read", {"key":key});
}


