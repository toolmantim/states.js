(function ($) {
  $(function () {
    var stateNodes = $(".state").add("<i>");
    if (stateNodes.length == 1) return;
    var stateSelector = $("<div id='state-selector'>States: </div>"),
        unique = {};
    stateNodes.each(function () {
      var stateName = this.title || "none",
          stateNode = $(this);
      unique[stateName] || (unique[stateName] = $("<a href='#'>" + stateName + "</a>").click(function () {
        $(this).trigger("stateChanged", $(this).text());
        stateNodes.hide();
        stateNodes.filter(function() { return $(this).attr("title") == stateName; }).show();
        return false;
      }).appendTo(stateSelector));
    });
    
    var links = $("a", stateSelector).click(function () {
      links.css("font-weight", 400);
      $(this).css("font-weight", 800);
    });
    $(links[links.length - 1]).click();

    stateSelector.css({
      "background-color": "#ddd",
      "bottom": 10,
      "color": "#000",
      "font-size": "14px",
      "opacity": .7,
      "padding": "5px 8px",
      "position": "fixed",
      "right": 10,
      "z-index": 99
    });
    links.css({
      "margin-left": 10
    });

    $(document.body).append(stateSelector);
  });
})(jQuery);