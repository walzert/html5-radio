import { call as api_call, subscribe as api_subscribe } from './api';


export function auth() {
    return api_call("harvester/auth", {});
}

export function write(metric) {
    return api_call("harvester/write", { "metric" : metric });
}

