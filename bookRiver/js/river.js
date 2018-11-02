
var url = 'https://pac.sals.edu/ContentXChange/APICarouselToolKit/47/26/4?callback=?';
$.getJSON(url, function (data) {{
var Div1 = document.createElement("div");
Div1.id = "id-drawer-head-xri" + data.CarrouselUniqueID;
Div1.className = "statichead";
Div1.innerHTML = data.CarouselName;
var Div2 = document.createElement("div");
Div2.id = "id-drawer-body-xri" + data.CarrouselUniqueID;
Div2.className = "drawer-body";
Div2.innerHTML = data.Carousel_Str;
 $("#div1").append(Div1);
 $("#div1").append(Div2);
 var DivName = "#" + data.CarrouselUniqueID
 var nItems = data.nCarLength
 if (nItems > 0)
 {{
   jQuery(DivName).slick({
      dots: false,
      infinite: true,
      variableWidth: true,
      nextArrow: " <button type='button' class='content-carousel__right-arrow' aria-label='Carousel move right'><i class='glyphicon glyphicon-menu-right'></i></button>",
      prevArrow: "<button type='button' class='content-carousel__left-arrow' aria-label='Carousel move left'><i class='glyphicon glyphicon-menu-left'></i></button>",
      slidesToShow: 3,
      slidesToScroll: 3,
      mobileFirst: true
   });

   var layoutManager = ContentCarouselLayoutManager.getInstance();
   layoutManager.autoLayout(DivName);
 }}
 else
 {{
 var Div3 = document.createElement("div");
 Div3.id = "id-drawer-body-xri" + "NoItemsFound";
 Div3.className = "drawer-body2";
 Div3.innerHTML = "No titles are available for display at this time.  For more information, please consult with a library staff member.";
 $("#div1").append(Div3);
 }}
}});
