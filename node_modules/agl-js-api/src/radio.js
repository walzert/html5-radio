import { call as api_call, subscribe as api_subscribe } from './api';


export function get_frequency() {
    return api_call("radio/frequency", {});
}

export function set_frequency(frequency) {
    return api_call("radio/frequency", { "value" : frequency });
}


export function get_band() {
    return api_call("radio/band", {});
}

export function set_band(band) {
    return api_call("radio/band", { "band" : band });
}

export function get_band_supported(band) {
    return api_call("radio/band_supported", {"band": band });
}

export function get_frequency_range(band) {
    return api_call("radio/frequency_range", {"band": band });
}
export function get_frequency_step(band) {
    return api_call("radio/frequency_range", {"band": band });
}

export function start() {
    return api_call("radio/start", {});
}

export function stop() {
    return api_call("radio/stop", {});
}


export function scan_start(direction) {
    return api_call("radio/scan_start", {"direction": direction });
}

export function scan_stop() {
    return api_call("radio/scan_stop", {});
}

export function get_stereo_mode() {
    return api_call("radio/stereo_mode", {});
}

export function set_stereo_mode(mode) {
    return api_call("radio/stereo_mode", {"value": mode});
}

export function on_frequency(handler) {
    return api_subscribe("radio/subscribe", {
        value: "frequency"
    }, handler);
}


export function on_station_found(handler) {
    return api_subscribe("radio/subscribe", {
        value: "station_found"
    }, handler);
}

export function on_status(handler) {
    return api_subscribe("radio/subscribe", {
        value: "status"
    }, handler);
}
