import { call as api_call, subscribe as api_subscribe } from './api';


export function get(signalparameter) {
    return api_call("signal-composer/get", {"signal": signalparameter});
}

export function list() {
    return api_call("signal-composer/list", {});
}

export function addObjects(file) {
    return api_call("signal-composer/addObjects", { "file" : file });
}

