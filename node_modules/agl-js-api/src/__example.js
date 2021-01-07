import { call as api_call, subscribe as api_subscribe } from './api';


export function get_frequency() {
    return api_call("example/get", {});
}

export function set_frequency(set_parameter) {
    return api_call("example/set", { "value" : set_parameter });
}




export function function(function_parameter,) {
    return api_call("example/function_parameter", {"function_parameter": function_parameter });
}



export function on_change(handler) {
    return api_subscribe("example/subscribe", {
        value: "change"
    }, handler);
}

