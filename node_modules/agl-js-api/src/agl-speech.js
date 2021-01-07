import { call as api_call, subscribe as api_subscribe } from './api';


export function subscribe() {
    return api_call("agl-speech/subscribe", {});
}

export function tts_play_prompt(language,text) {
    return api_call("agl-speech/tts_play_prompt", { "language" : language, "text": text });
}

export function get_tts_get_available_languages() {
    return api_call("agl-speech/tts_get_available_languages", {});
}

export function stt_recognize() {
    return api_call("agl-speech/stt_recognize", {});
}


export function on_change(handler) {
    return api_subscribe("agl-speech/subscribe", {
        value: "change"
    }, handler);
}

export function on_event_tts_prompt_playing(handler) {
    return api_subscribe("agl-speech/subscribe", {
        value: "event_tts_prompt_playing"
    }, handler);
}

export function on_event_tts_prompt_completed(handler) {
    return api_subscribe("agl-speech/subscribe", {
        value: "event_tts_prompt_completed"
    }, handler);
}

export function on_event_stt_final_result(handler) {
    return api_subscribe("agl-speech/subscribe", {
        value: "event_stt_final_result"
    }, handler);
}

