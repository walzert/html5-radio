import { call as api_call, subscribe as api_subscribe } from './api';


export function ping() {
    return api_call("helloworld/ping", {});
}

export function testargs(cezam) {
    return api_call("helloworld/set", { "cezam" : cezam });
}
