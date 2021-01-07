import { call as api_call, subscribe as api_subscribe } from './api';



export function get_process_list() {
    return api_call("taskmanager/get_process_list", {});
}

export function kill_process(tid) {
    return api_call("taskmanager/kill_process", { "tid" : tid });
}


export function get_extra_info(tid) {
    return api_call("taskmanager/get_extra_info", {"tid": tid});
}

export function get_load_avg() {
    return api_call("taskmanager/get_load_avg", {});
}

export function get_netstat() {
    return api_call("taskmanager/get_netstat", {});
}
