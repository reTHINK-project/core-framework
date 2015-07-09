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

var worker = new Worker('worker.js');

worker.addEventListener('message', function(e){

  console.log("listen for worker message: ", e);
  renderMessage(e);

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
    time: new Date()
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
  resetForm();
}

function renderMessage(envelope) {

  var data = envelope.data.data;
  var user = envelope.topic;
  var side = 'left'; //_.isMatch(envelope, {topic: 'bot.message'}) ? 'right' : 'left';
  var message = data.message.replace(/\r?\n/g, '<br />');

  var li = '<li class="message-item '+ side +'"><div class="user"><label class="name">'+ data.name +'</label><label class="time">'+ data.time +'</label></div><span class="text">'+ message +'</span></li>';
  $('.messages-list').append(li);
}

function resetForm(){
  $form[0].reset();
}
