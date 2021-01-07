import { call as api_call, subscribe as api_subscribe } from './api';


export function get_temp_left_zone() {
    return api_call("hvac/get_temp_left_zone", {});
}

export function get_temp_right_zone() {
    return api_call("hvac/get_temp_right_zone", {});
}

export function get_fanspeed() {
    return api_call("hvac/get_fanspeed", {});
}


export function get() {
    return api_call("hvac/get", {});
}

export function set(i,comp) {
    return api_call("hvac/set", {"i":i , "comp":comp});
}

export function set_temp_left_zone_led() {
    return api_call("hvac/temp_left_zone_led", {  });
}

export function set_temp_right_zone_led() {
    return api_call("hvac/temp_right_zone_led", {});
}


