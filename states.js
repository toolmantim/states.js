(function ($) {
  $(function () {
    var stateNodes = $(".state").add("<i>");
    if (stateNodes.length == 1) return;

    var stateSelector = $("<div id='state-selector'>States: </div>");
    stateNodes.each(function () {
      var stateName = this.title || "none",
          stateNode = $(this);
      $("<a href='#'>" + stateName + "</a>").click(function () {
        stateNodes.hide();
        stateNode.show();
        return false;
      }).appendTo(stateSelector);
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