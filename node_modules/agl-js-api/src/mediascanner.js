import { call as api_call, subscribe as api_subscribe } from './api';

export function get_media_result() {
    return api_call("mediascanner/media_result", {});
}


export function on_media_added(handler) {
    return api_subscribe("mediascanner/subscribe", {
        value: "media_added"
    }, handler);
}

export function on_media_removed(handler) {
    return api_subscribe("mediascanner/subscribe", {
        value: "media_removed"
    }, handler);
}