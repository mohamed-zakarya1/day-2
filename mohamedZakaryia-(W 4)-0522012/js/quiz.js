function Quiz() {
  var no = 0;
  var yes = 0;
  for (var i = 0; i < 3; i++) {
    try {
      var x = document.querySelector(`input[name="q${i + 1}"]:checked`)
      if (x.value == "Yes") {
        yes++;
      } else {
        no++;
      }
    } catch {
      alert("choose all of the questions!?")
      return false;
    }
  }
  alert("the yes answers are" + yes + "the no answers are " + no);
  window.location.assign("file:///C:/Users/IT/Desktop/mohamedZakaryia-(W%204)-0522012/index.html")
}