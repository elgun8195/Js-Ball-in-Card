const ball = document.getElementById("ball");
const input = document.getElementById("input");

$(document).ready(function () {
  $("#sol").click(function (e) {
    e.preventDefault();
    let move = $("#input").val();
    $("#ball")
      .finish()
      .animate({
        right: `+=${move}`,
        left: `-=${move}`,
      });
  });

  $("#sag").click(function (e) {
    e.preventDefault();
    let move = $("#input").val();
    $("#ball")
      .finish()
      .animate({
        left: `+=${move}`,
        right: `-=${move}`,
      });
  });

  $("#yuxari").click(function (e) {
    e.preventDefault();
    let move = $("#input").val();
    if ($("#ball").offset().top - move > 58) {
      console.log($("#ball").offset().top);
      $("#ball")
        .finish()
        .animate({
          bottom: `+=${move}`,
          top: `-=${move}`,
        });
    } else {
      $("#ball")
        .finish()
        .animate({
          bottom: `+=${$("#ball").offset().top - 58}`,
          top: `-=${$("#ball").offset().top - 58}`,
        });
    }
  });

  $("#asagi").click(function (e) {
    e.preventDefault();
    let move = $("#input").val();
    $("#ball")
      .finish()
      .animate({
        top: `+=${move}`,
        bottom: `-=${move}`,
      });
  });

  $("#solyuxari").click(function (e) {
    e.preventDefault();
    let move = $("#input").val();
    $("#ball")
      .finish()
      .animate({
        right: `+=${move}`,
        left: `-=${move}`,
        bottom: `+=${move}`,
        top: `-=${move}`,
      });
  });

  $("#sagyuxari").click(function (e) {
    e.preventDefault();
    let move = $("#input").val();

    $("#ball")
      .finish()
      .animate({
        right: `-=${move}`,
        left: `+=${move}`,
        bottom: `+=${move}`,
        top: `-=${move}`,
      });
  });

  $("#sagasagi").click(function (e) {
    e.preventDefault();
    let move = $("#input").val();

    $("#ball")
      .finish()
      .animate({
        right: `-=${move}`,
        left: `+=${move}`,
        bottom: `-=${move}`,
        top: `+=${move}`,
      });
  });

  $("#solasagi").click(function (e) {
    e.preventDefault();
    let move = $("#input").val();

    $("#ball")
      .finish()
      .animate({
        right: `+=${move}`,
        left: `-=${move}`,
        bottom: `-=${move}`,
        top: `+=${move}`,
      });
  });

  $("#reset").click(function (e) {
    e.preventDefault();
    $("#ball").finish().animate({
      right: `0`,
      left: `0`,
      bottom: `0`,
      top: `0`,
    });
  });

  $(document).keydown(function (e) {
    let change = $("#input").val();
    switch (e.key) {
      case "ArrowLeft":
        $("#ball")
          .finish()
          .animate({
            left: `-=${change}`,
            right: `+=${change}`,
          });
        break;
      case "ArrowUp":
        $("#ball")
          .finish()
          .animate({
            top: `-=${change}`,
            bottom: `+=${change}`,
          });
        break;
      case "ArrowRight":
        $("#ball")
          .finish()
          .animate({
            left: `+=${change}`,
            right: `-=${change}`,
          });
        break;
      case "ArrowDown":
        $("#ball")
          .finish()
          .animate({
            top: `+=${change}`,
            bottom: `-=${change}`,
          });
        break;
    }
  });
});
