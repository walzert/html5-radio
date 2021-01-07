import { call as api_call, subscribe as api_subscribe } from './api';


export function fake_login() {
    return api_call("identity/fake-login", {});
}

export function logout() {
    return api_call("identity/logout", {});
}

export function fake_auth() {
    return api_call("identity/fake-auth", {});
}

export function get() {
    return api_call("identity/get", {});
}


export function on_identity_event(handler) {
    return api_subscribe("identity/subscribe", {
        value: "event"
    }, handler);
}

