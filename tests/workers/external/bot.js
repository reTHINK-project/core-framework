self.addEventListener('message', function(e){

  console.log("Bot:", e.data);

});

self.addEventListener('error', function(e){
  console.log("error:", e);
});
