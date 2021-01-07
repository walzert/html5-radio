import { call as api_call, subscribe as api_subscribe } from './api';


export function get_listconfig(cfgpath) {
    return api_call("UNICENS/listconfig", {"cfgpath":cfgpath});
}

export function initialise(filename) {
    return api_call("UNICENS/initialise", {"filename": filename});
}


export function subscriberx() {
    return api_call("UNICENS/subscriberx", {});
}

export function writei2c(node,data) {
    return api_call("UNICENS/writei2c", {"node" : node, "data" : data});
}

export function sendmessage(node,msgid,data) {
    return api_call("UNICENS/sendmessage", {"node" : node, "msgid": msgid,"data" : data});
}

export function on_node_availibility(handler) {
    return api_subscribe("UNICENS/subscribe", {
        value: "node-availibility"
    }, handler);
}


export function on_rx_message(handler) {
    return api_subscribe("UNICENS/subscribex", {
        value: "rx-message"
    }, handler);
}

