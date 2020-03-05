$("#s01 div.form_02 ul li input:radio[name=sex]").click(function() {
  if ($("#s01 div.form_02 ul li input:radio[name=sex]:checked").val() == "1") {
    $("#s01 div.form_02 ul li:nth-child(1) label.1").addClass("on");
    $("#s01 div.form_02 ul li:nth-child(1) label.2").removeClass("on");
  } else if (
    $("#s01 div.form_02 ul li input:radio[name=sex]:checked").val() == "2"
  ) {
    $("#s01 div.form_02 ul li:nth-child(1) label.2").addClass("on");
    $("#s01 div.form_02 ul li:nth-child(1) label.1").removeClass("on");
  }
});

$("#s01 div.form_02 ul li input:radio[name=merried]").click(function() {
  if (
    $("#s01 div.form_02 ul li input:radio[name=merried]:checked").val() == "1"
  ) {
    $("#s01 div.form_02 ul li:nth-child(2) label.1").addClass("on");
    $("#s01 div.form_02 ul li:nth-child(2) label.2").removeClass("on");
  } else if (
    $("#s01 div.form_02 ul li input:radio[name=merried]:checked").val() == "2"
  ) {
    $("#s01 div.form_02 ul li:nth-child(2) label.2").addClass("on");
    $("#s01 div.form_02 ul li:nth-child(2) label.1").removeClass("on");
  }
});

$(".form_05 ul li input:radio[name=form_05_01]").click(function() {
  if ($(".form_05 ul li input:radio[name=form_05_01]:checked").val() == "1") {
    $(".form_05 ul li:nth-child(1) label").removeClass("on");
    $(".form_05 ul li:nth-child(1) label.1").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_01]:checked").val() == "2"
  ) {
    $(".form_05 ul li:nth-child(1) label").removeClass("on");
    $(".form_05 ul li:nth-child(1) label.2").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_01]:checked").val() == "3"
  ) {
    $(".form_05 ul li:nth-child(1) label").removeClass("on");
    $(".form_05 ul li:nth-child(1) label.3").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_01]:checked").val() == "4"
  ) {
    $(".form_05 ul li:nth-child(1) label").removeClass("on");
    $(".form_05 ul li:nth-child(1) label.4").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_01]:checked").val() == "5"
  ) {
    $(".form_05 ul li:nth-child(1) label").removeClass("on");
    $(".form_05 ul li:nth-child(1) label.5").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_01]:checked").val() == "6"
  ) {
    $(".form_05 ul li:nth-child(1) label").removeClass("on");
    $(".form_05 ul li:nth-child(1) label.6").addClass("on");
  }
});

$(".form_05 ul li input:radio[name=form_05_02]").click(function() {
  if ($(".form_05 ul li input:radio[name=form_05_02]:checked").val() == "1") {
    $(".form_05 ul li:nth-child(2) label").removeClass("on");
    $(".form_05 ul li:nth-child(2) label.1").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_02]:checked").val() == "2"
  ) {
    $(".form_05 ul li:nth-child(2) label").removeClass("on");
    $(".form_05 ul li:nth-child(2) label.2").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_02]:checked").val() == "3"
  ) {
    $(".form_05 ul li:nth-child(2) label").removeClass("on");
    $(".form_05 ul li:nth-child(2) label.3").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_02]:checked").val() == "4"
  ) {
    $(".form_05 ul li:nth-child(2) label").removeClass("on");
    $(".form_05 ul li:nth-child(2) label.4").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_02]:checked").val() == "5"
  ) {
    $(".form_05 ul li:nth-child(2) label").removeClass("on");
    $(".form_05 ul li:nth-child(2) label.5").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_02]:checked").val() == "6"
  ) {
    $(".form_05 ul li:nth-child(2) label").removeClass("on");
    $(".form_05 ul li:nth-child(2) label.6").addClass("on");
  }
});

$(".form_05 ul li input:radio[name=form_05_03]").click(function() {
  if ($(".form_05 ul li input:radio[name=form_05_03]:checked").val() == "1") {
    $(".form_05 ul li:nth-child(3) label").removeClass("on");
    $(".form_05 ul li:nth-child(3) label.1").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_03]:checked").val() == "2"
  ) {
    $(".form_05 ul li:nth-child(3) label").removeClass("on");
    $(".form_05 ul li:nth-child(3) label.2").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_03]:checked").val() == "3"
  ) {
    $(".form_05 ul li:nth-child(3) label").removeClass("on");
    $(".form_05 ul li:nth-child(3) label.3").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_03]:checked").val() == "4"
  ) {
    $(".form_05 ul li:nth-child(3) label").removeClass("on");
    $(".form_05 ul li:nth-child(3) label.4").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_03]:checked").val() == "5"
  ) {
    $(".form_05 ul li:nth-child(3) label").removeClass("on");
    $(".form_05 ul li:nth-child(3) label.5").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_03]:checked").val() == "6"
  ) {
    $(".form_05 ul li:nth-child(3) label").removeClass("on");
    $(".form_05 ul li:nth-child(3) label.6").addClass("on");
  }
});

$(".form_05 ul li input:radio[name=form_05_04]").click(function() {
  if ($(".form_05 ul li input:radio[name=form_05_04]:checked").val() == "1") {
    $(".form_05 ul li:nth-child(4) label").removeClass("on");
    $(".form_05 ul li:nth-child(4) label.1").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_04]:checked").val() == "2"
  ) {
    $(".form_05 ul li:nth-child(4) label").removeClass("on");
    $(".form_05 ul li:nth-child(4) label.2").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_04]:checked").val() == "3"
  ) {
    $(".form_05 ul li:nth-child(4) label").removeClass("on");
    $(".form_05 ul li:nth-child(4) label.3").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_04]:checked").val() == "4"
  ) {
    $(".form_05 ul li:nth-child(4) label").removeClass("on");
    $(".form_05 ul li:nth-child(4) label.4").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_04]:checked").val() == "5"
  ) {
    $(".form_05 ul li:nth-child(4) label").removeClass("on");
    $(".form_05 ul li:nth-child(4) label.5").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_04]:checked").val() == "6"
  ) {
    $(".form_05 ul li:nth-child(4) label").removeClass("on");
    $(".form_05 ul li:nth-child(4) label.6").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_04]:checked").val() == "7"
  ) {
    $(".form_05 ul li:nth-child(4) label").removeClass("on");
    $(".form_05 ul li:nth-child(4) label.7").addClass("on");
  }
});

$(".form_05 ul li input:radio[name=form_05_05]").click(function() {
  if ($(".form_05 ul li input:radio[name=form_05_05]:checked").val() == "1") {
    $(".form_05 ul li:nth-child(5) label").removeClass("on");
    $(".form_05 ul li:nth-child(5) label.1").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_05]:checked").val() == "2"
  ) {
    $(".form_05 ul li:nth-child(5) label").removeClass("on");
    $(".form_05 ul li:nth-child(5) label.2").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_05]:checked").val() == "3"
  ) {
    $(".form_05 ul li:nth-child(5) label").removeClass("on");
    $(".form_05 ul li:nth-child(5) label.3").addClass("on");
  } else if (
    $(".form_05 ul li input:radio[name=form_05_05]:checked").val() == "4"
  ) {
    $(".form_05 ul li:nth-child(5) label").removeClass("on");
    $(".form_05 ul li:nth-child(5) label.4").addClass("on");
  }
});

$(".yesOrNo ul li input:radio[name=form_06_01]").click(function() {
  if ($(".yesOrNo ul li input:radio[name=form_06_01]:checked").val() == "1") {
    $(".yesOrNo ul li label").removeClass("on");
    $(".yesOrNo ul li label.1").addClass("on");
    $("#s04").addClass("on");
    $("#end").removeClass("on");
  } else if (
    $(".yesOrNo ul li input:radio[name=form_06_01]:checked").val() == "2"
  ) {
    $(".yesOrNo ul li label").removeClass("on");
    $(".yesOrNo ul li label.2").addClass("on");
    $("#s04").removeClass("on");
    $("#end").addClass("on");
  }
});

$(".check ul li:nth-child(1) input:checkbox[name=form_07_01]").click(function() {
  if ($(".check ul li:nth-child(1) input:checkbox[name=form_07_01]").val() == "1") {
    $(".check ul li label.1").toggleClass("on");
    $(".hide ul li.neck").toggleClass("on");
    $("#end").addClass("on");
  } else if (true){
    a=1;
  }
});
$(".check ul li:nth-child(2) input:checkbox[name=form_07_01]").click(function() {
  if ($(".check ul li:nth-child(2) input:checkbox[name=form_07_01]").val() == "2") {
    $(".check ul li label.2").toggleClass("on");
    $(".hide ul li.shoulder").toggleClass("on");
    $("#end").addClass("on");
  } else if (true){
    a=1;
  }
});
$(".check ul li:nth-child(3) input:checkbox[name=form_07_01]").click(function() {
  if ($(".check ul li:nth-child(3) input:checkbox[name=form_07_01]").val() == "3") {
    $(".check ul li label.3").toggleClass("on");
    $(".hide ul li.arm").toggleClass("on");
    $("#end").addClass("on");
  } else if (true){
    a=1;
  }
});
$(".check ul li:nth-child(4) input:checkbox[name=form_07_01]").click(function() {
  if ($(".check ul li:nth-child(4) input:checkbox[name=form_07_01]").val() == "4") {
    $(".check ul li label.4").toggleClass("on");
    $(".hide ul li.hand").toggleClass("on");
    $("#end").addClass("on");
  } else if (true){
    a=1;
  }
});
$(".check ul li:nth-child(5) input:checkbox[name=form_07_01]").click(function() {
  if ($(".check ul li:nth-child(5) input:checkbox[name=form_07_01]").val() == "5") {
    $(".check ul li label.5").toggleClass("on");
    $(".hide ul li.waist").toggleClass("on");
    $("#end").addClass("on");
  } else if (true){
    a=1;
  }
});
$(".check ul li:nth-child(6) input:checkbox[name=form_07_01]").click(function() {
  if ($(".check ul li:nth-child(6) input:checkbox[name=form_07_01]").val() == "6") {
    $(".check ul li label.6").toggleClass("on");
    $(".hide ul li.leg").toggleClass("on");
    $("#end").addClass("on");
  } else if (true){
    a=1;
  }
});

$(".hide ul li.neck ul li:nth-child(1) input:radio[name=form_08_01]").click(function() {
  if ($(".hide ul li.neck ul li:nth-child(1) input:radio[name=form_08_01]:checked").val() == "1") {
    $(".hide ul li.neck ul li:nth-child(1) label").removeClass("on");
    $(".hide ul li.neck ul li:nth-child(1) label.1").addClass("on");
  } else if (
    $(".hide ul li.neck ul li:nth-child(1) input:radio[name=form_08_01]:checked").val() == "2"
  ) {
    $(".hide ul li.neck ul li:nth-child(1) label").removeClass("on");
    $(".hide ul li.neck ul li:nth-child(1) label.2").addClass("on");
  } else if (
    $(".hide ul li.neck ul li:nth-child(1) input:radio[name=form_08_01]:checked").val() == "3"
  ) {
    $(".hide ul li.neck ul li:nth-child(1) label").removeClass("on");
    $(".hide ul li.neck ul li:nth-child(1) label.3").addClass("on");
  } else if (
    $(".hide ul li.neck ul li:nth-child(1) input:radio[name=form_08_01]:checked").val() == "4"
  ) {
    $(".hide ul li.neck ul li:nth-child(1) label").removeClass("on");
    $(".hide ul li.neck ul li:nth-child(1) label.4").addClass("on");
  }else if (
    $(".hide ul li.neck ul li:nth-child(1) input:radio[name=form_08_01]:checked").val() == "5"
  ) {
    $(".hide ul li.neck ul li:nth-child(1) label").removeClass("on");
    $(".hide ul li.neck ul li:nth-child(1) label.5").addClass("on");
  }
});

$(".hide ul li.neck ul li:nth-child(2) input:radio[name=form_08_02]").click(function() {
  if ($(".hide ul li.neck ul li:nth-child(2) input:radio[name=form_08_02]:checked").val() == "1") {
    $(".hide ul li.neck ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.neck ul li:nth-child(2) label.1").addClass("on");
  } else if (
    $(".hide ul li.neck ul li:nth-child(2) input:radio[name=form_08_02]:checked").val() == "2"
  ) {
    $(".hide ul li.neck ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.neck ul li:nth-child(2) label.2").addClass("on");
  } else if (
    $(".hide ul li.neck ul li:nth-child(2) input:radio[name=form_08_02]:checked").val() == "3"
  ) {
    $(".hide ul li.neck ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.neck ul li:nth-child(2) label.3").addClass("on");
  } else if (
    $(".hide ul li.neck ul li:nth-child(2) input:radio[name=form_08_02]:checked").val() == "4"
  ) {
    $(".hide ul li.neck ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.neck ul li:nth-child(2) label.4").addClass("on");
  }
});

$(".hide ul li.neck ul li:nth-child(3) input:radio[name=form_08_03]").click(function() {
  if ($(".hide ul li.neck ul li:nth-child(3) input:radio[name=form_08_03]:checked").val() == "1") {
    $(".hide ul li.neck ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.neck ul li:nth-child(3) label.1").addClass("on");
  } else if (
    $(".hide ul li.neck ul li:nth-child(3) input:radio[name=form_08_03]:checked").val() == "2"
  ) {
    $(".hide ul li.neck ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.neck ul li:nth-child(3) label.2").addClass("on");
  } else if (
    $(".hide ul li.neck ul li:nth-child(3) input:radio[name=form_08_03]:checked").val() == "3"
  ) {
    $(".hide ul li.neck ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.neck ul li:nth-child(3) label.3").addClass("on");
  } else if (
    $(".hide ul li.neck ul li:nth-child(3) input:radio[name=form_08_03]:checked").val() == "4"
  ) {
    $(".hide ul li.neck ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.neck ul li:nth-child(3) label.4").addClass("on");
  } else if (
    $(".hide ul li.neck ul li:nth-child(3) input:radio[name=form_08_03]:checked").val() == "5"
  ) {
    $(".hide ul li.neck ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.neck ul li:nth-child(3) label.5").addClass("on");
  }
});
$(".hide ul li.neck ul li:nth-child(4) input:radio[name=form_08_04]").click(function() {
  if ($(".hide ul li.neck ul li:nth-child(4) input:radio[name=form_08_04]:checked").val() == "1") {
    $(".hide ul li.neck ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.neck ul li:nth-child(4) label.1").addClass("on");
  } else if (
    $(".hide ul li.neck ul li:nth-child(4) input:radio[name=form_08_04]:checked").val() == "2"
  ) {
    $(".hide ul li.neck ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.neck ul li:nth-child(4) label.2").addClass("on");
  }
});
$(".hide ul li.neck ul li:nth-child(5) input:radio[name=form_08_05]").click(function() {
  if ($(".hide ul li.neck ul li:nth-child(5) input:radio[name=form_08_05]:checked").val() == "1") {
    $(".hide ul li.neck ul li:nth-child(5) label").removeClass("on");
    $(".hide ul li.neck ul li:nth-child(5) label.1").addClass("on");
  } else if (
    $(".hide ul li.neck ul li:nth-child(5) input:radio[name=form_08_05]:checked").val() == "2"
  ) {
    $(".hide ul li.neck ul li:nth-child(5) label").removeClass("on");
    $(".hide ul li.neck ul li:nth-child(5) label.2").addClass("on");
  } else if (
    $(".hide ul li.neck ul li:nth-child(5) input:radio[name=form_08_05]:checked").val() == "3"
  ) {
    $(".hide ul li.neck ul li:nth-child(5) label").removeClass("on");
    $(".hide ul li.neck ul li:nth-child(5) label.3").addClass("on");
  } else if (
    $(".hide ul li.neck ul li:nth-child(5) input:radio[name=form_08_05]:checked").val() == "4"
  ) {
    $(".hide ul li.neck ul li:nth-child(5) label").removeClass("on");
    $(".hide ul li.neck ul li:nth-child(5) label.4").addClass("on");
  }else if (
    $(".hide ul li.neck ul li:nth-child(5) input:radio[name=form_08_05]:checked").val() == "5"
  ) {
    $(".hide ul li.neck ul li:nth-child(5) label").removeClass("on");
    $(".hide ul li.neck ul li:nth-child(5) label.5").addClass("on");
  }else if (
    $(".hide ul li.neck ul li:nth-child(5) input:radio[name=form_08_05]:checked").val() == "6"
  ) {
    $(".hide ul li.neck ul li:nth-child(5) label").removeClass("on");
    $(".hide ul li.neck ul li:nth-child(5) label.6").addClass("on");
  }
});

$(".hide ul li.shoulder ul li:nth-child(1) input:radio[name=form_09_00]").click(function() {
  if ($(".hide ul li.shoulder ul li:nth-child(1) input:radio[name=form_09_00]:checked").val() == "1") {
    $(".hide ul li.shoulder ul li:nth-child(1) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(1) label.1").addClass("on");
  } else if (
    $(".hide ul li.shoulder ul li:nth-child(1) input:radio[name=form_09_00]:checked").val() == "2"
  ) {
    $(".hide ul li.shoulder ul li:nth-child(1) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(1) label.2").addClass("on");
  } else if (
    $(".hide ul li.shoulder ul li:nth-child(1) input:radio[name=form_09_00]:checked").val() == "3"
  ) {
    $(".hide ul li.shoulder ul li:nth-child(1) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(1) label.3").addClass("on");
  }
});

$(".hide ul li.shoulder ul li:nth-child(2) input:radio[name=form_09_01]").click(function() {
  if ($(".hide ul li.shoulder ul li:nth-child(2) input:radio[name=form_09_01]:checked").val() == "1") {
    $(".hide ul li.shoulder ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(2) label.1").addClass("on");
  } else if (
    $(".hide ul li.shoulder ul li:nth-child(2) input:radio[name=form_09_01]:checked").val() == "2"
  ) {
    $(".hide ul li.shoulder ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(2) label.2").addClass("on");
  } else if (
    $(".hide ul li.shoulder ul li:nth-child(2) input:radio[name=form_09_01]:checked").val() == "3"
  ) {
    $(".hide ul li.shoulder ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(2) label.3").addClass("on");
  } else if (
    $(".hide ul li.shoulder ul li:nth-child(2) input:radio[name=form_09_01]:checked").val() == "4"
  ) {
    $(".hide ul li.shoulder ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(2) label.4").addClass("on");
  }else if (
    $(".hide ul li.shoulder ul li:nth-child(2) input:radio[name=form_09_01]:checked").val() == "5"
  ) {
    $(".hide ul li.shoulder ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(2) label.5").addClass("on");
  }
});

$(".hide ul li.shoulder ul li:nth-child(3) input:radio[name=form_09_02]").click(function() {
  if ($(".hide ul li.shoulder ul li:nth-child(3) input:radio[name=form_09_02]:checked").val() == "1") {
    $(".hide ul li.shoulder ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(3) label.1").addClass("on");
  } else if (
    $(".hide ul li.shoulder ul li:nth-child(3) input:radio[name=form_09_02]:checked").val() == "2"
  ) {
    $(".hide ul li.shoulder ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(3) label.2").addClass("on");
  } else if (
    $(".hide ul li.shoulder ul li:nth-child(3) input:radio[name=form_09_02]:checked").val() == "3"
  ) {
    $(".hide ul li.shoulder ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(3) label.3").addClass("on");
  } else if (
    $(".hide ul li.shoulder ul li:nth-child(3) input:radio[name=form_09_02]:checked").val() == "4"
  ) {
    $(".hide ul li.shoulder ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(3) label.4").addClass("on");
  }
});

$(".hide ul li.shoulder ul li:nth-child(4) input:radio[name=form_09_03]").click(function() {
  if ($(".hide ul li.shoulder ul li:nth-child(4) input:radio[name=form_09_03]:checked").val() == "1") {
    $(".hide ul li.shoulder ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(4) label.1").addClass("on");
  } else if (
    $(".hide ul li.shoulder ul li:nth-child(4) input:radio[name=form_09_03]:checked").val() == "2"
  ) {
    $(".hide ul li.shoulder ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(4) label.2").addClass("on");
  } else if (
    $(".hide ul li.shoulder ul li:nth-child(4) input:radio[name=form_09_03]:checked").val() == "3"
  ) {
    $(".hide ul li.shoulder ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(4) label.3").addClass("on");
  } else if (
    $(".hide ul li.shoulder ul li:nth-child(4) input:radio[name=form_09_03]:checked").val() == "4"
  ) {
    $(".hide ul li.shoulder ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(4) label.4").addClass("on");
  } else if (
    $(".hide ul li.shoulder ul li:nth-child(4) input:radio[name=form_09_03]:checked").val() == "5"
  ) {
    $(".hide ul li.shoulder ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(4) label.5").addClass("on");
  }
});
$(".hide ul li.shoulder ul li:nth-child(5) input:radio[name=form_09_04]").click(function() {
  if ($(".hide ul li.shoulder ul li:nth-child(5) input:radio[name=form_09_04]:checked").val() == "1") {
    $(".hide ul li.shoulder ul li:nth-child(5) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(5) label.1").addClass("on");
  } else if (
    $(".hide ul li.shoulder ul li:nth-child(5) input:radio[name=form_09_04]:checked").val() == "2"
  ) {
    $(".hide ul li.shoulder ul li:nth-child(5) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(5) label.2").addClass("on");
  }
});
$(".hide ul li.shoulder ul li:nth-child(6) input:radio[name=form_09_05]").click(function() {
  if ($(".hide ul li.shoulder ul li:nth-child(6) input:radio[name=form_09_05]:checked").val() == "1") {
    $(".hide ul li.shoulder ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(6) label.1").addClass("on");
  } else if (
    $(".hide ul li.shoulder ul li:nth-child(6) input:radio[name=form_09_05]:checked").val() == "2"
  ) {
    $(".hide ul li.shoulder ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(6) label.2").addClass("on");
  } else if (
    $(".hide ul li.shoulder ul li:nth-child(6) input:radio[name=form_09_05]:checked").val() == "3"
  ) {
    $(".hide ul li.shoulder ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(6) label.3").addClass("on");
  } else if (
    $(".hide ul li.shoulder ul li:nth-child(6) input:radio[name=form_09_05]:checked").val() == "4"
  ) {
    $(".hide ul li.shoulder ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(6) label.4").addClass("on");
  }else if (
    $(".hide ul li.shoulder ul li:nth-child(6) input:radio[name=form_09_05]:checked").val() == "5"
  ) {
    $(".hide ul li.shoulder ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(6) label.5").addClass("on");
  }else if (
    $(".hide ul li.shoulder ul li:nth-child(6) input:radio[name=form_09_05]:checked").val() == "6"
  ) {
    $(".hide ul li.shoulder ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.shoulder ul li:nth-child(6) label.6").addClass("on");
  }
});

$(".hide ul li.arm ul li:nth-child(1) input:radio[name=form_10_00]").click(function() {
  if ($(".hide ul li.arm ul li:nth-child(1) input:radio[name=form_10_00]:checked").val() == "1") {
    $(".hide ul li.arm ul li:nth-child(1) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(1) label.1").addClass("on");
  } else if (
    $(".hide ul li.arm ul li:nth-child(1) input:radio[name=form_10_00]:checked").val() == "2"
  ) {
    $(".hide ul li.arm ul li:nth-child(1) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(1) label.2").addClass("on");
  } else if (
    $(".hide ul li.arm ul li:nth-child(1) input:radio[name=form_10_00]:checked").val() == "3"
  ) {
    $(".hide ul li.arm ul li:nth-child(1) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(1) label.3").addClass("on");
  }
});

$(".hide ul li.arm ul li:nth-child(2) input:radio[name=form_10_01]").click(function() {
  if ($(".hide ul li.arm ul li:nth-child(2) input:radio[name=form_10_01]:checked").val() == "1") {
    $(".hide ul li.arm ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(2) label.1").addClass("on");
  } else if (
    $(".hide ul li.arm ul li:nth-child(2) input:radio[name=form_10_01]:checked").val() == "2"
  ) {
    $(".hide ul li.arm ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(2) label.2").addClass("on");
  } else if (
    $(".hide ul li.arm ul li:nth-child(2) input:radio[name=form_10_01]:checked").val() == "3"
  ) {
    $(".hide ul li.arm ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(2) label.3").addClass("on");
  } else if (
    $(".hide ul li.arm ul li:nth-child(2) input:radio[name=form_10_01]:checked").val() == "4"
  ) {
    $(".hide ul li.arm ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(2) label.4").addClass("on");
  }else if (
    $(".hide ul li.arm ul li:nth-child(2) input:radio[name=form_10_01]:checked").val() == "5"
  ) {
    $(".hide ul li.arm ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(2) label.5").addClass("on");
  }
});

$(".hide ul li.arm ul li:nth-child(3) input:radio[name=form_10_02]").click(function() {
  if ($(".hide ul li.arm ul li:nth-child(3) input:radio[name=form_10_02]:checked").val() == "1") {
    $(".hide ul li.arm ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(3) label.1").addClass("on");
  } else if (
    $(".hide ul li.arm ul li:nth-child(3) input:radio[name=form_10_02]:checked").val() == "2"
  ) {
    $(".hide ul li.arm ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(3) label.2").addClass("on");
  } else if (
    $(".hide ul li.arm ul li:nth-child(3) input:radio[name=form_10_02]:checked").val() == "3"
  ) {
    $(".hide ul li.arm ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(3) label.3").addClass("on");
  } else if (
    $(".hide ul li.arm ul li:nth-child(3) input:radio[name=form_10_02]:checked").val() == "4"
  ) {
    $(".hide ul li.arm ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(3) label.4").addClass("on");
  }
});

$(".hide ul li.arm ul li:nth-child(4) input:radio[name=form_10_03]").click(function() {
  if ($(".hide ul li.arm ul li:nth-child(4) input:radio[name=form_10_03]:checked").val() == "1") {
    $(".hide ul li.arm ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(4) label.1").addClass("on");
  } else if (
    $(".hide ul li.arm ul li:nth-child(4) input:radio[name=form_10_03]:checked").val() == "2"
  ) {
    $(".hide ul li.arm ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(4) label.2").addClass("on");
  } else if (
    $(".hide ul li.arm ul li:nth-child(4) input:radio[name=form_10_03]:checked").val() == "3"
  ) {
    $(".hide ul li.arm ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(4) label.3").addClass("on");
  } else if (
    $(".hide ul li.arm ul li:nth-child(4) input:radio[name=form_10_03]:checked").val() == "4"
  ) {
    $(".hide ul li.arm ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(4) label.4").addClass("on");
  } else if (
    $(".hide ul li.arm ul li:nth-child(4) input:radio[name=form_10_03]:checked").val() == "5"
  ) {
    $(".hide ul li.arm ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(4) label.5").addClass("on");
  }
});
$(".hide ul li.arm ul li:nth-child(5) input:radio[name=form_10_04]").click(function() {
  if ($(".hide ul li.arm ul li:nth-child(5) input:radio[name=form_10_04]:checked").val() == "1") {
    $(".hide ul li.arm ul li:nth-child(5) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(5) label.1").addClass("on");
  } else if (
    $(".hide ul li.arm ul li:nth-child(5) input:radio[name=form_10_04]:checked").val() == "2"
  ) {
    $(".hide ul li.arm ul li:nth-child(5) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(5) label.2").addClass("on");
  }
});
$(".hide ul li.arm ul li:nth-child(6) input:radio[name=form_10_05]").click(function() {
  if ($(".hide ul li.arm ul li:nth-child(6) input:radio[name=form_10_05]:checked").val() == "1") {
    $(".hide ul li.arm ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(6) label.1").addClass("on");
  } else if (
    $(".hide ul li.arm ul li:nth-child(6) input:radio[name=form_10_05]:checked").val() == "2"
  ) {
    $(".hide ul li.arm ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(6) label.2").addClass("on");
  } else if (
    $(".hide ul li.arm ul li:nth-child(6) input:radio[name=form_10_05]:checked").val() == "3"
  ) {
    $(".hide ul li.arm ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(6) label.3").addClass("on");
  } else if (
    $(".hide ul li.arm ul li:nth-child(6) input:radio[name=form_10_05]:checked").val() == "4"
  ) {
    $(".hide ul li.arm ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(6) label.4").addClass("on");
  }else if (
    $(".hide ul li.arm ul li:nth-child(6) input:radio[name=form_10_05]:checked").val() == "5"
  ) {
    $(".hide ul li.arm ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(6) label.5").addClass("on");
  }else if (
    $(".hide ul li.arm ul li:nth-child(6) input:radio[name=form_10_05]:checked").val() == "6"
  ) {
    $(".hide ul li.arm ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.arm ul li:nth-child(6) label.6").addClass("on");
  }
});

$(".hide ul li.hand ul li:nth-child(1) input:radio[name=form_11_00]").click(function() {
  if ($(".hide ul li.hand ul li:nth-child(1) input:radio[name=form_11_00]:checked").val() == "1") {
    $(".hide ul li.hand ul li:nth-child(1) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(1) label.1").addClass("on");
  } else if (
    $(".hide ul li.hand ul li:nth-child(1) input:radio[name=form_11_00]:checked").val() == "2"
  ) {
    $(".hide ul li.hand ul li:nth-child(1) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(1) label.2").addClass("on");
  } else if (
    $(".hide ul li.hand ul li:nth-child(1) input:radio[name=form_11_00]:checked").val() == "3"
  ) {
    $(".hide ul li.hand ul li:nth-child(1) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(1) label.3").addClass("on");
  }
});

$(".hide ul li.hand ul li:nth-child(2) input:radio[name=form_11_01]").click(function() {
  if ($(".hide ul li.hand ul li:nth-child(2) input:radio[name=form_11_01]:checked").val() == "1") {
    $(".hide ul li.hand ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(2) label.1").addClass("on");
  } else if (
    $(".hide ul li.hand ul li:nth-child(2) input:radio[name=form_11_01]:checked").val() == "2"
  ) {
    $(".hide ul li.hand ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(2) label.2").addClass("on");
  } else if (
    $(".hide ul li.hand ul li:nth-child(2) input:radio[name=form_11_01]:checked").val() == "3"
  ) {
    $(".hide ul li.hand ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(2) label.3").addClass("on");
  } else if (
    $(".hide ul li.hand ul li:nth-child(2) input:radio[name=form_11_01]:checked").val() == "4"
  ) {
    $(".hide ul li.hand ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(2) label.4").addClass("on");
  }else if (
    $(".hide ul li.hand ul li:nth-child(2) input:radio[name=form_11_01]:checked").val() == "5"
  ) {
    $(".hide ul li.hand ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(2) label.5").addClass("on");
  }
});

$(".hide ul li.hand ul li:nth-child(3) input:radio[name=form_11_02]").click(function() {
  if ($(".hide ul li.hand ul li:nth-child(3) input:radio[name=form_11_02]:checked").val() == "1") {
    $(".hide ul li.hand ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(3) label.1").addClass("on");
  } else if (
    $(".hide ul li.hand ul li:nth-child(3) input:radio[name=form_11_02]:checked").val() == "2"
  ) {
    $(".hide ul li.hand ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(3) label.2").addClass("on");
  } else if (
    $(".hide ul li.hand ul li:nth-child(3) input:radio[name=form_11_02]:checked").val() == "3"
  ) {
    $(".hide ul li.hand ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(3) label.3").addClass("on");
  } else if (
    $(".hide ul li.hand ul li:nth-child(3) input:radio[name=form_11_02]:checked").val() == "4"
  ) {
    $(".hide ul li.hand ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(3) label.4").addClass("on");
  }
});

$(".hide ul li.hand ul li:nth-child(4) input:radio[name=form_11_03]").click(function() {
  if ($(".hide ul li.hand ul li:nth-child(4) input:radio[name=form_11_03]:checked").val() == "1") {
    $(".hide ul li.hand ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(4) label.1").addClass("on");
  } else if (
    $(".hide ul li.hand ul li:nth-child(4) input:radio[name=form_11_03]:checked").val() == "2"
  ) {
    $(".hide ul li.hand ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(4) label.2").addClass("on");
  } else if (
    $(".hide ul li.hand ul li:nth-child(4) input:radio[name=form_11_03]:checked").val() == "3"
  ) {
    $(".hide ul li.hand ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(4) label.3").addClass("on");
  } else if (
    $(".hide ul li.hand ul li:nth-child(4) input:radio[name=form_11_03]:checked").val() == "4"
  ) {
    $(".hide ul li.hand ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(4) label.4").addClass("on");
  } else if (
    $(".hide ul li.hand ul li:nth-child(4) input:radio[name=form_11_03]:checked").val() == "5"
  ) {
    $(".hide ul li.hand ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(4) label.5").addClass("on");
  }
});
$(".hide ul li.hand ul li:nth-child(5) input:radio[name=form_11_04]").click(function() {
  if ($(".hide ul li.hand ul li:nth-child(5) input:radio[name=form_11_04]:checked").val() == "1") {
    $(".hide ul li.hand ul li:nth-child(5) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(5) label.1").addClass("on");
  } else if (
    $(".hide ul li.hand ul li:nth-child(5) input:radio[name=form_11_04]:checked").val() == "2"
  ) {
    $(".hide ul li.hand ul li:nth-child(5) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(5) label.2").addClass("on");
  }
});
$(".hide ul li.hand ul li:nth-child(6) input:radio[name=form_11_05]").click(function() {
  if ($(".hide ul li.hand ul li:nth-child(6) input:radio[name=form_11_05]:checked").val() == "1") {
    $(".hide ul li.hand ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(6) label.1").addClass("on");
  } else if (
    $(".hide ul li.hand ul li:nth-child(6) input:radio[name=form_11_05]:checked").val() == "2"
  ) {
    $(".hide ul li.hand ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(6) label.2").addClass("on");
  } else if (
    $(".hide ul li.hand ul li:nth-child(6) input:radio[name=form_11_05]:checked").val() == "3"
  ) {
    $(".hide ul li.hand ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(6) label.3").addClass("on");
  } else if (
    $(".hide ul li.hand ul li:nth-child(6) input:radio[name=form_11_05]:checked").val() == "4"
  ) {
    $(".hide ul li.hand ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(6) label.4").addClass("on");
  }else if (
    $(".hide ul li.hand ul li:nth-child(6) input:radio[name=form_11_05]:checked").val() == "5"
  ) {
    $(".hide ul li.hand ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(6) label.5").addClass("on");
  }else if (
    $(".hide ul li.hand ul li:nth-child(6) input:radio[name=form_11_05]:checked").val() == "6"
  ) {
    $(".hide ul li.hand ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.hand ul li:nth-child(6) label.6").addClass("on");
  }
});

$(".hide ul li.waist ul li:nth-child(1) input:radio[name=form_12_01]").click(function() {
  if ($(".hide ul li.waist ul li:nth-child(1) input:radio[name=form_12_01]:checked").val() == "1") {
    $(".hide ul li.waist ul li:nth-child(1) label").removeClass("on");
    $(".hide ul li.waist ul li:nth-child(1) label.1").addClass("on");
  } else if (
    $(".hide ul li.waist ul li:nth-child(1) input:radio[name=form_12_01]:checked").val() == "2"
  ) {
    $(".hide ul li.waist ul li:nth-child(1) label").removeClass("on");
    $(".hide ul li.waist ul li:nth-child(1) label.2").addClass("on");
  } else if (
    $(".hide ul li.waist ul li:nth-child(1) input:radio[name=form_12_01]:checked").val() == "3"
  ) {
    $(".hide ul li.waist ul li:nth-child(1) label").removeClass("on");
    $(".hide ul li.waist ul li:nth-child(1) label.3").addClass("on");
  } else if (
    $(".hide ul li.waist ul li:nth-child(1) input:radio[name=form_12_01]:checked").val() == "4"
  ) {
    $(".hide ul li.waist ul li:nth-child(1) label").removeClass("on");
    $(".hide ul li.waist ul li:nth-child(1) label.4").addClass("on");
  }else if (
    $(".hide ul li.waist ul li:nth-child(1) input:radio[name=form_12_01]:checked").val() == "5"
  ) {
    $(".hide ul li.waist ul li:nth-child(1) label").removeClass("on");
    $(".hide ul li.waist ul li:nth-child(1) label.5").addClass("on");
  }
});

$(".hide ul li.waist ul li:nth-child(2) input:radio[name=form_12_02]").click(function() {
  if ($(".hide ul li.waist ul li:nth-child(2) input:radio[name=form_12_02]:checked").val() == "1") {
    $(".hide ul li.waist ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.waist ul li:nth-child(2) label.1").addClass("on");
  } else if (
    $(".hide ul li.waist ul li:nth-child(2) input:radio[name=form_12_02]:checked").val() == "2"
  ) {
    $(".hide ul li.waist ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.waist ul li:nth-child(2) label.2").addClass("on");
  } else if (
    $(".hide ul li.waist ul li:nth-child(2) input:radio[name=form_12_02]:checked").val() == "3"
  ) {
    $(".hide ul li.waist ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.waist ul li:nth-child(2) label.3").addClass("on");
  } else if (
    $(".hide ul li.waist ul li:nth-child(2) input:radio[name=form_12_02]:checked").val() == "4"
  ) {
    $(".hide ul li.waist ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.waist ul li:nth-child(2) label.4").addClass("on");
  }
});

$(".hide ul li.waist ul li:nth-child(3) input:radio[name=form_12_03]").click(function() {
  if ($(".hide ul li.waist ul li:nth-child(3) input:radio[name=form_12_03]:checked").val() == "1") {
    $(".hide ul li.waist ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.waist ul li:nth-child(3) label.1").addClass("on");
  } else if (
    $(".hide ul li.waist ul li:nth-child(3) input:radio[name=form_12_03]:checked").val() == "2"
  ) {
    $(".hide ul li.waist ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.waist ul li:nth-child(3) label.2").addClass("on");
  } else if (
    $(".hide ul li.waist ul li:nth-child(3) input:radio[name=form_12_03]:checked").val() == "3"
  ) {
    $(".hide ul li.waist ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.waist ul li:nth-child(3) label.3").addClass("on");
  } else if (
    $(".hide ul li.waist ul li:nth-child(3) input:radio[name=form_12_03]:checked").val() == "4"
  ) {
    $(".hide ul li.waist ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.waist ul li:nth-child(3) label.4").addClass("on");
  } else if (
    $(".hide ul li.waist ul li:nth-child(3) input:radio[name=form_12_03]:checked").val() == "5"
  ) {
    $(".hide ul li.waist ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.waist ul li:nth-child(3) label.5").addClass("on");
  }
});
$(".hide ul li.waist ul li:nth-child(4) input:radio[name=form_12_04]").click(function() {
  if ($(".hide ul li.waist ul li:nth-child(4) input:radio[name=form_12_04]:checked").val() == "1") {
    $(".hide ul li.waist ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.waist ul li:nth-child(4) label.1").addClass("on");
  } else if (
    $(".hide ul li.waist ul li:nth-child(4) input:radio[name=form_12_04]:checked").val() == "2"
  ) {
    $(".hide ul li.waist ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.waist ul li:nth-child(4) label.2").addClass("on");
  }
});
$(".hide ul li.waist ul li:nth-child(5) input:radio[name=form_12_05]").click(function() {
  if ($(".hide ul li.waist ul li:nth-child(5) input:radio[name=form_12_05]:checked").val() == "1") {
    $(".hide ul li.waist ul li:nth-child(5) label").removeClass("on");
    $(".hide ul li.waist ul li:nth-child(5) label.1").addClass("on");
  } else if (
    $(".hide ul li.waist ul li:nth-child(5) input:radio[name=form_12_05]:checked").val() == "2"
  ) {
    $(".hide ul li.waist ul li:nth-child(5) label").removeClass("on");
    $(".hide ul li.waist ul li:nth-child(5) label.2").addClass("on");
  } else if (
    $(".hide ul li.waist ul li:nth-child(5) input:radio[name=form_12_05]:checked").val() == "3"
  ) {
    $(".hide ul li.waist ul li:nth-child(5) label").removeClass("on");
    $(".hide ul li.waist ul li:nth-child(5) label.3").addClass("on");
  } else if (
    $(".hide ul li.waist ul li:nth-child(5) input:radio[name=form_12_05]:checked").val() == "4"
  ) {
    $(".hide ul li.waist ul li:nth-child(5) label").removeClass("on");
    $(".hide ul li.waist ul li:nth-child(5) label.4").addClass("on");
  }else if (
    $(".hide ul li.waist ul li:nth-child(5) input:radio[name=form_12_05]:checked").val() == "5"
  ) {
    $(".hide ul li.waist ul li:nth-child(5) label").removeClass("on");
    $(".hide ul li.waist ul li:nth-child(5) label.5").addClass("on");
  }else if (
    $(".hide ul li.waist ul li:nth-child(5) input:radio[name=form_12_05]:checked").val() == "6"
  ) {
    $(".hide ul li.waist ul li:nth-child(5) label").removeClass("on");
    $(".hide ul li.waist ul li:nth-child(5) label.6").addClass("on");
  }
});

$(".hide ul li.leg ul li:nth-child(1) input:radio[name=form_13_00]").click(function() {
  if ($(".hide ul li.leg ul li:nth-child(1) input:radio[name=form_13_00]:checked").val() == "1") {
    $(".hide ul li.leg ul li:nth-child(1) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(1) label.1").addClass("on");
  } else if (
    $(".hide ul li.leg ul li:nth-child(1) input:radio[name=form_13_00]:checked").val() == "2"
  ) {
    $(".hide ul li.leg ul li:nth-child(1) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(1) label.2").addClass("on");
  } else if (
    $(".hide ul li.leg ul li:nth-child(1) input:radio[name=form_13_00]:checked").val() == "3"
  ) {
    $(".hide ul li.leg ul li:nth-child(1) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(1) label.3").addClass("on");
  }
});

$(".hide ul li.leg ul li:nth-child(2) input:radio[name=form_13_01]").click(function() {
  if ($(".hide ul li.leg ul li:nth-child(2) input:radio[name=form_13_01]:checked").val() == "1") {
    $(".hide ul li.leg ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(2) label.1").addClass("on");
  } else if (
    $(".hide ul li.leg ul li:nth-child(2) input:radio[name=form_13_01]:checked").val() == "2"
  ) {
    $(".hide ul li.leg ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(2) label.2").addClass("on");
  } else if (
    $(".hide ul li.leg ul li:nth-child(2) input:radio[name=form_13_01]:checked").val() == "3"
  ) {
    $(".hide ul li.leg ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(2) label.3").addClass("on");
  } else if (
    $(".hide ul li.leg ul li:nth-child(2) input:radio[name=form_13_01]:checked").val() == "4"
  ) {
    $(".hide ul li.leg ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(2) label.4").addClass("on");
  }else if (
    $(".hide ul li.leg ul li:nth-child(2) input:radio[name=form_13_01]:checked").val() == "5"
  ) {
    $(".hide ul li.leg ul li:nth-child(2) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(2) label.5").addClass("on");
  }
});

$(".hide ul li.leg ul li:nth-child(3) input:radio[name=form_13_02]").click(function() {
  if ($(".hide ul li.leg ul li:nth-child(3) input:radio[name=form_13_02]:checked").val() == "1") {
    $(".hide ul li.leg ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(3) label.1").addClass("on");
  } else if (
    $(".hide ul li.leg ul li:nth-child(3) input:radio[name=form_13_02]:checked").val() == "2"
  ) {
    $(".hide ul li.leg ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(3) label.2").addClass("on");
  } else if (
    $(".hide ul li.leg ul li:nth-child(3) input:radio[name=form_13_02]:checked").val() == "3"
  ) {
    $(".hide ul li.leg ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(3) label.3").addClass("on");
  } else if (
    $(".hide ul li.leg ul li:nth-child(3) input:radio[name=form_13_02]:checked").val() == "4"
  ) {
    $(".hide ul li.leg ul li:nth-child(3) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(3) label.4").addClass("on");
  }
});

$(".hide ul li.leg ul li:nth-child(4) input:radio[name=form_13_03]").click(function() {
  if ($(".hide ul li.leg ul li:nth-child(4) input:radio[name=form_13_03]:checked").val() == "1") {
    $(".hide ul li.leg ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(4) label.1").addClass("on");
  } else if (
    $(".hide ul li.leg ul li:nth-child(4) input:radio[name=form_13_03]:checked").val() == "2"
  ) {
    $(".hide ul li.leg ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(4) label.2").addClass("on");
  } else if (
    $(".hide ul li.leg ul li:nth-child(4) input:radio[name=form_13_03]:checked").val() == "3"
  ) {
    $(".hide ul li.leg ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(4) label.3").addClass("on");
  } else if (
    $(".hide ul li.leg ul li:nth-child(4) input:radio[name=form_13_03]:checked").val() == "4"
  ) {
    $(".hide ul li.leg ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(4) label.4").addClass("on");
  } else if (
    $(".hide ul li.leg ul li:nth-child(4) input:radio[name=form_13_03]:checked").val() == "5"
  ) {
    $(".hide ul li.leg ul li:nth-child(4) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(4) label.5").addClass("on");
  }
});
$(".hide ul li.leg ul li:nth-child(5) input:radio[name=form_13_04]").click(function() {
  if ($(".hide ul li.leg ul li:nth-child(5) input:radio[name=form_13_04]:checked").val() == "1") {
    $(".hide ul li.leg ul li:nth-child(5) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(5) label.1").addClass("on");
  } else if (
    $(".hide ul li.leg ul li:nth-child(5) input:radio[name=form_13_04]:checked").val() == "2"
  ) {
    $(".hide ul li.leg ul li:nth-child(5) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(5) label.2").addClass("on");
  }
});
$(".hide ul li.leg ul li:nth-child(6) input:radio[name=form_13_05]").click(function() {
  if ($(".hide ul li.leg ul li:nth-child(6) input:radio[name=form_13_05]:checked").val() == "1") {
    $(".hide ul li.leg ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(6) label.1").addClass("on");
  } else if (
    $(".hide ul li.leg ul li:nth-child(6) input:radio[name=form_13_05]:checked").val() == "2"
  ) {
    $(".hide ul li.leg ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(6) label.2").addClass("on");
  } else if (
    $(".hide ul li.leg ul li:nth-child(6) input:radio[name=form_13_05]:checked").val() == "3"
  ) {
    $(".hide ul li.leg ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(6) label.3").addClass("on");
  } else if (
    $(".hide ul li.leg ul li:nth-child(6) input:radio[name=form_13_05]:checked").val() == "4"
  ) {
    $(".hide ul li.leg ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(6) label.4").addClass("on");
  }else if (
    $(".hide ul li.leg ul li:nth-child(6) input:radio[name=form_13_05]:checked").val() == "5"
  ) {
    $(".hide ul li.leg ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(6) label.5").addClass("on");
  }else if (
    $(".hide ul li.leg ul li:nth-child(6) input:radio[name=form_13_05]:checked").val() == "6"
  ) {
    $(".hide ul li.leg ul li:nth-child(6) label").removeClass("on");
    $(".hide ul li.leg ul li:nth-child(6) label.6").addClass("on");
  }
});