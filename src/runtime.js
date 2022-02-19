let fastUpdates = document.getElementById("fast-updates");

let input = document.getElementById("input");
let error = document.getElementById("error");
let output = document.getElementById("output");

var Module = {
  "preRun": () => {
    FS.writeFile("/tmp/input", input.value);
  },
  
  "arguments": ["/tmp/input", "/tmp/output"],
  
  "postRun": () => {
    output.srcdoc = FS.readFile("/tmp/output", {"encoding": "utf8"});
  },
  
  "print": (text) => {
    error.innerText += `${text}\n`;
  },
  "printErr": (text) => {
    error.innerText += `${text}\n`;
  },
};

function updateOutput() {
  FS.writeFile("/tmp/input", input.value);
  
  error.innerText = "";
  callMain(["/tmp/input", "/tmp/output"]);
  
  output.srcdoc = FS.readFile("/tmp/output", {"encoding": "utf8"});
}

let editTimeout;

input.addEventListener("input", () => {
  if (fastUpdates.checked) {
    updateOutput();
  } else {
    clearTimeout(editTimeout);
    editTimeout = setTimeout(updateOutput, 2000);
  }
});
