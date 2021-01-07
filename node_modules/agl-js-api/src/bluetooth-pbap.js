import { call as api_call, subscribe as api_subscribe } from './api';



export function do_import() {
    return api_call("bluetooth-pbap/import", {  });
}

export function get_contacts() {
    return api_call("bluetooth-pbap/contacts", {  });
}

export function get_entry(list) {
    return api_call("bluetooth-pbap/entry", { "list": list });
}

export function get_history(list) {
    return api_call("bluetooth-pbap/history", { "list": list });
}


export function get_message(handle) {
    return api_call("bluetooth-pbap/message", {"handle": handle});
}

export function search(parameter_name, parameter_value ) {
    return api_call("bluetooth-pbap/search", {parameter_name: parameter_value});
}


export function get_status() {
    return api_call("bluetooth-pbap/message", {});
}


export function on_status(handler) {
    return api_subscribe("bluetooth-pbap/subscribe", {
        value: "status"
    }, handler);
}

