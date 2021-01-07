import { call as api_call, subscribe as api_subscribe } from './api';


export function set_slimamp_master_volume(value) {
    return api_call("unicens-controller/slimamp_master_volume_set", { "value" : value });
}


export function set_amplifier_master_volume(value) {
    return api_call("unicens-controller/amplifier_master_volume_set", { "value" : value });
}

export function get_microphone_is_available() {
    return api_call("unicens-controller/microphone_is_available", {});
}

export function set_microphone_mode(value) {
    return api_call("unicens-controller/microphone_mode_set", { "value" : value });
}

export function get_microphone_doa() {
    return api_call("unicens-controller/microphone_doa_get", {});
}

export function set_microphone_doa(value) {
    return api_call("unicens-controller/microphone_doa_set", {"value":value});
}

export function set_microphone_static_color(red, green, blue) {
    return api_call("unicens-controller/microphone_static_color_set", {"red":red,"green": green, "blue": blue});
}



