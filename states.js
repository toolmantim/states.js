$(function() {
  if ($(".state").length == 0) return;
  
  var stateSelector = $("<div id='state-selector'></div>");
  stateSelector.append("States: ");

  var states = [];
  $(".state").each(function() { states[$(this).attr("title")] = true });
  
  for (var state in states) {
    $("<a href='#'></a>").
      text(state).
      click(function() {
        $(".state").hide();
        $(".state[title='" + $(this).text() + "']").show();
        return false;
      }).
      appendTo(stateSelector);
  }
  
  $("<a href='#' class='none'>None</a>").click(function() {
    $(".state").hide();
    return false;
  }).appendTo(stateSelector);
  
  stateSelector.find("a").click(function() {
    stateSelector.find("a").css("font-weight", "normal");
    $(this).css("font-weight", "bold");
  });
  
  stateSelector.find("a.none").click();
  
  stateSelector.css({
    "z-index": "99",
    "background-color": "#ddd",
    "color": "#000",
    "position": "fixed",
    "bottom": "10px",
    "right": "10px",
    "font-size": "14px",
    "padding": "5px 8px",
    "opacity": "0.7",
  });
  
  stateSelector.find("a").css({
    "margin-left": "10px"
  });
  
  $(document.body).append(stateSelector);
});