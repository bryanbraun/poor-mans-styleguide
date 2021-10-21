// Function for selecting text. See http://stackoverflow.com/a/987376/1154642.
function selectText(element) {
  var doc = document,
      text = doc.getElementById(element),
      range,
      selection;
  if (doc.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(text);
      range.select();
  } else if (window.getSelection) {
      selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
  }
}

// Add click listeners to our `Select All` buttons.
var htmlButton = document.getElementById('select-html');
var mdButton = document.getElementById('select-md');
var selectHtml = function(){ selectText('html-snippet'); };
var selectMd = function(){ selectText('markdown-snippet'); };
htmlButton.addEventListener('click', selectHtml);
mdButton.addEventListener('click', selectMd);

// var checkbox = document.getElementById("some-checkbox");
// checkbox.indeterminate = true;
// function ts(cb) {
//     if (cb.readOnly) cb.checked=cb.readOnly=false;
//     else if (!cb.checked) cb.readOnly=cb.indeterminate=true;
//   }
