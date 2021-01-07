import Mustache from 'mustache';
import { audiomixer, api,radio, lowcan  } from 'agl-js-api';
import { setValue } from './sliders';


var channels =  {
    1: {name : "Dasding", frequency : 97700000},
    2: {name : "SWR1", frequency : 94700000}
}

var template;

// function render_sliders(sliders) {
//     var sliderContainer = document.getElementById('SliderContainer');
//     for( var i=0; i<sliders.length; i++) {
//         var node = Mustache.render(template, sliders[i]);
//         sliderContainer.innerHTML += node;
//     }
// }

export function init() {
    api.init();
    
    //radio.start()
    //radio.set_frequency(97700000)
    // template = document.getElementById('slider-template').innerHTML;
    // Mustache.parse(template);
    attach_buttons();
/*     audiomixer.list_controls().then(function(result) {
        var sliders =  [];
       for( var i=0; i<result.length; i++) {
            sliders.push({
                id: result[i].control,
                name: result[i].control,
                value: Math.floor(result[i].volume*100)
            });
        }
        attach_buttons();
        render_sliders(sliders);
    }).catch(function(error) {
        console.error('ERROR loading sliders', error);
    });
 */
    // audiomixer.on_volume_changed(function(data){
    //     setValue(document.getElementById("slider-"+data.control), Math.ceil(data.value*100), true);
    // }).then(function(result) {
    //     console.log("SUBSCRIBED TO VOLUME CHANGED");
    // });
}


function attach_buttons() {
    var button_stop = document.getElementById('button_stop');
    var button_start = document.getElementById('button_start');
    var button_dasding = document.getElementById('button_dasding');
    var button_swr3 = document.getElementById('button_swr3');
    var button_start_scan = document.getElementById('button_start_scan');
    var button_stop_scan = document.getElementById('button_stop_scan');
    var frequncy_slider = document.getElementById('frequncy_slider');
    var frequncy_number = document.getElementById('frequncy_number');
    button_stop.addEventListener("click", function(){radio.stop()});
    button_start.addEventListener("click",attach_start );
    button_dasding.addEventListener("click", function(){radio.set_frequency(97700000)});
    button_swr3.addEventListener("click", function(){radio.set_frequency(103700000)});
    button_start_scan.addEventListener("click", scanner );
    button_stop_scan.addEventListener("click", radio.scan_stop());
    frequncy_slider.addEventListener("input", radio_slider);
    console.log(radio.get_band()+" BAND");
    console.log(radio.get_frequency()+ " Frequency");
    console.log(radio.get_band_supported("FM") + " Bands supported");
    console.log(radio.get_frequency_step("FM") + " Frequency step");
    console.log(radio.get_frequency_range("FM") + " Frequency range");
    radio.on_status(function(data){
        console.log("on_status CHANGED");
        console.log(data);
    }).then(function(result) {
        console.log("SUBSCRIBED TO on_status CHANGED");
    });


    radio.on_station_found(function(data){
        console.log("on_station_found CHANGED");
        console.log(data);
    }).then(function(result) {
        console.log("SUBSCRIBED TO on_status CHANGED");
    });

    radio.on_frequency(function(data){
        console.log("on_frequency CHANGED");
        console.log(data);
        frequncy_slider.value=data.value/1000000;
        frequncy_number.value=data.value;
    }).then(function(result) {
        console.log("SUBSCRIBED TO on_frequency CHANGED");
    });

    radio.on_frequency(function(data){
        console.log("on_frequency CHANGED");
        console.log(data);
        frequncy_slider.value=data.value/1000000;
        frequncy_number.value=data.value;
    }).then(function(result) {
        console.log("SUBSCRIBED TO on_frequency CHANGED");
    });

    lowcan.subscribe_by_event(function(data){
        console.log("can subscribe_by_event left temp CHANGED");
        console.log(data);
    },"messages.hvac.temperature.left").then(function(result) {
        console.log("SUBSCRIBED TO can subscribe_by_event CHANGED");
    });
    lowcan.subscribe_by_event(function(data){
        console.log("can subscribe_by_event right temp CHANGED");
        console.log(data);
    },"messages.hvac.temperature.right").then(function(result) {
        console.log("SUBSCRIBED TO can subscribe_by_event CHANGED");
    });
}

function scanner()
{
    radio.scan_start("forward"); console.log("Radio scan started");
    console.log(lowcan.get_signal("messages.hvac.temperature.left"));
    //console.log(lowcan.do_write("hvac.temperature.left",22));

}

function radio_slider(){
    console.log(frequncy_slider.value + "input ");
    console.log(frequncy_slider.value*1000000 + "input frequncy ");
    radio.set_frequency(frequncy_slider.value*1000000);

}

function attach_start()
{
    radio.start();
    console.log("Radio started");
    radio.set_frequency(97700000);
    console.log(lowcan.get_list());
    //console.log(lowcan.do_auth());
    //lowcan.get("messages.hvac.fan.speed")
}