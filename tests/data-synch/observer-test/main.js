var btnStart = document.getElementById("start");
var btnChange = document.getElementById("change");
var btnRemove = document.getElementById("remove");

function logChange(name, changes) {
  for(var i in changes) {
    var field = name + "." + changes[i].name;
    var oldValue = changes[i].oldValue;
    var newValue = changes[i].object[changes[i].name];

    if(changes[i].type === "update") {
      console.log(field + " (old=" + JSON.stringify(oldValue) + ", new=" + JSON.stringify(newValue) + ")");
    }

    if(changes[i].type === "add") {
      console.log(field + " + " + JSON.stringify(newValue));
    }

    if(changes[i].type === "delete") {
      console.log(field + " - ");
    }
  }
}

//create initial object
var obj = { foo: "foo-value" };
Object.observe(obj, function(changes) {
    logChange("obj", changes);
});

btnStart.addEventListener("click", function() {
  obj.foo = "foo-value-update";
  obj.bar = { p1: "v1"};
  Object.observe(obj.bar, function(changes) {
    logChange("obj.bar", changes);
  });
});

btnChange.addEventListener("click", function() {
  obj.bar.p1 = "v1-update";
  obj.bar.p2 = "v2";
});

btnRemove.addEventListener("click", function() {
  delete obj.bar.p2;
});
