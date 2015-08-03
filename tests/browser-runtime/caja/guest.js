var obj = {
  name: 'vitor silva'
};

try {

  var t = setTimeout(function(){

    console.log('setTimeout function supported');
    obj.name = 'xpto';

  }, 1000);

  console.log('try to use setTimeout function: ', t);

} catch (e) {
  console.log("setTimeout function", e.message);
}

try {

  Object.observe(obj, function(e){
    console.log("change:", e);
  });

}

catch (err) {

  console.log("Have a open issues https://github.com/google/caja/issues/1934, and don't have any response;", err);

}

return '<div>'+ obj + '</div>';
