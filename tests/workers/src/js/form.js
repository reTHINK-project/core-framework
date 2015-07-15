// jspm imports
import $ from 'jquery';
import _ from 'underscore';

// Bower imports
import lodash from 'lodash';
import riveter from 'riveter';
import postal from 'postal.js';
import federation from 'postal.federation';
import xframe from 'postal.xframe';

var $form = $("#messages");
var $message = $form.find('.message-textarea');

// Instance a Worker to Process information
var worker = new Worker('worker.js');

// Instance a SharedWorker to comunicate with other window/separator
var myWorker = new SharedWorker("sharedWorker.js", 'rethink');
myWorker.port.start();

function getLastIndex(){
  var lastIndex = localStorage.length;
  var newIndex = lastIndex + 1;
  return newIndex;
}

myWorker.port.addEventListener('message', function(e){

  // localStorage.setItem("web-worker1-" + getLastIndex(), JSON.stringify(e));
  renderMessage(e);

}, false);

worker.addEventListener('message', function(e){

  console.log("postajs worker:", e);

  localStorage.setItem("postal-worker1-" + getLastIndex(), JSON.stringify(e));
  renderPostalMessage(e);

}, false);

$message.on('keypress', function(e){

  if (e.keyCode === 13 && !e.shiftKey){

    $form.submit();
    e.preventDefault();

  }

});

$form.on('submit', function(e){

  e.preventDefault();

  if( _.isEmpty($message.val())) return;

  var list = $form.serializeArray();
  var result = {
    name: 'Vitor Silva',
    timeStamp: new Date()
  };

  _.reduce(list, function(target, object, label){

    if (_.isEmpty(object.value)) return;
    target[object.name] = object.value;

    return target[object.name];

  }, result);

  sendMessage(result);

});

function sendMessage(message) {

  worker.postMessage(message);
  myWorker.port.postMessage(message);

  resetForm();

}

function renderPostalMessage(envelope) {

  var data = envelope.data.data;

  var time = envelope.timeStamp;
  var topic = envelope.data.topic;
  var channel = envelope.data.channel;
  var side = _.isMatch(envelope, {direction: 'out'}) ? 'right' : 'left';
  var message = data.message.replace(/\r?\n/g, '<br />');

  var li = '<li class="message-item '+ side +'"><div class="user"><label class="name">'+ data.name +'</label><label class="time"><strong>Time:</strong> '+ time +'</label><label class="topic"><strong>Topic:</strong> '+ topic +'</label><label class="channel"><strong>Channel:</strong> '+ channel +'</label></div><span class="text">'+ message +'</span></li>';
  $('.messages-list-postal').append(li);
}

function renderMessage(envelope) {

  var data = envelope.data;
  var time = data.timeStamp;
  var side = _.isMatch(envelope, {direction: 'out'}) ? 'right' : 'left';
  var message = data.message.replace(/\r?\n/g, '<br />');

  var li = '<li class="message-item '+ side +'"><div class="user"><label class="name">'+ data.name +'</label><label class="time"><strong>Time:</strong> '+ time +'</label></div><span class="text">'+ message +'</span></li>';
  $('.messages-list-worker').append(li);
}

function resetForm(){
  $form[0].reset();
}

function storageChange(e) {

  if ( _.isEmpty(e.newValue) ){
    console.log('remove');
  } else {

    var data = JSON.parse(e.newValue);

    if( data.data.hasOwnProperty('channel')){
      renderPostalMessage(data);
    } else {
      renderMessage(data);
    }
  }

}

function fillHistory(){

  console.log(localStorage);

  var postals = _.reduce(localStorage, function(a, b, c){
    return a;
  }, {});

}

// fillHistory();

window.addEventListener('storage', storageChange, false);
