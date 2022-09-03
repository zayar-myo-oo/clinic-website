$(document).ready(function () {
  // Start Header Section

  // Start Banner Section

  // $(".carousel").carousel({
  //   interval: 1000
  // })


  // End Banner Secion


  // End Header Section


  // Start Info Section

  $(window).scroll(function () {
    let getscrollpoint = $(this).scrollTop();
    console.log(getscrollpoint)
    if (getscrollpoint >= 583) {
      $(".infoeffects").children(":eq(0)").addClass("fromlefts");
      $(".infoeffects").children(":eq(1)").addClass("fromrights");
    } else {
      $(".infoeffects").children(":eq(0)").removeClass("fromlefts");
      $(".infoeffects").children(":eq(1)").removeClass("fromrights");
    }
  })
  // End Info Section


})


