var _this;

function MegaMenu($) {
  this.MegaMenuData;
  this.SelectedItem;
  this.Width;
  this.Height;

  // Databinding for property MegaMenuData
  this.SetMegaMenuData = function (data) {
    ///UserCodeRegionStart:[SetMegaMenuData] (do not remove this comment.)

    this.MegaMenuData = data;

    ///UserCodeRegionEnd: (do not remove this comment.)
  };

  // Databinding for property MegaMenuData
  this.GetMegaMenuData = function () {
    ///UserCodeRegionStart:[GetMegaMenuData] (do not remove this comment.)

    return this.MegaMenuData;

    ///UserCodeRegionEnd: (do not remove this comment.)
  };

  // Databinding for property SelectedItem
  this.SetSelectedItem = function (data) {
    ///UserCodeRegionStart:[SetSelectedItem] (do not remove this comment.)

    this.SelectedItem = data;

    ///UserCodeRegionEnd: (do not remove this comment.)
  };

  // Databinding for property SelectedItem
  this.GetSelectedItem = function () {
    ///UserCodeRegionStart:[GetSelectedItem] (do not remove this comment.)

    return this.SelectedItem;

    ///UserCodeRegionEnd: (do not remove this comment.)
  };

  this.show = function () {
    ///UserCodeRegionStart:[show] (do not remove this comment.)

    var selected = this.SelectedItem;
    var wasLoaded = false;
    _this = this;
    var lang = document.getElementsByTagName("html")[0].getAttribute("lang");

    if ((this.MasterPage = true)) {
      window.onload = function () {
        wasLoaded = true;
      };
    }

    var buffer = "";

    if (!this.IsPostBack) {
      buffer += '	<div class="new-hamburger-menu">';
      buffer += '			<section class="menuSectionHidden">';
      buffer += '				<div class="Menu-module_submenuStage">';
      buffer += '					<nav class="Menu-nav">';
      buffer += '					  <ul class="Menu-module_firstCategories">';
      buffer += _this.MegaMenuData
        ? getMenu(_this.MegaMenuData, 0)
        : "<h1> Not found data </h1>";
      buffer += "					  </ul> ";
      buffer += "				  </nav>";
      buffer += '				  <section class="SecondLevelItems_SubMenuDesktop">';
      buffer += '					  <div class="SecondLevelItems_itemElements">';
      buffer += '						  <div class="SecondLevelItems_submenuElements">';
      buffer += "<!-- ITEMS -->";
      buffer += "						  </div>";
      buffer += "					  </div>";
      buffer += "				  </section>";
      buffer += "				</div>";
      buffer += "			</section>";
      buffer += '			<section class="menuHamburger">';
      buffer += '			  <div id="hamburgerMenu" class="hamburgerSlider">';
      buffer += '				  <div class="hamburgerContain">';
      buffer += '					  <div class="hamburgerBox">';
      buffer += '						  <div class="hamburgerInner"></div>';
      buffer += "					  </div>";
      buffer += "				  </div>";
      buffer += '				  <div class="hamburgerTriangleHidden"></div> ';
      buffer += '				  <p class="hamburgerText">CATEGORÃAS</p>';
      buffer += '				  <p class="hamburgerTextTwo">MENU</p>';
      buffer += "			  </div>";
      buffer += "			</section>";
      buffer += "		</div>";

      $("#MEGAMENUContainer").html(buffer);
      init();
    }

    ///UserCodeRegionEnd: (do not remove this comment.)
  };
  ///UserCodeRegionStart:[User Functions] (do not remove this comment.)

  ///UserCodeRegionEnd: (do not remove this comment.):
}

var section = document.createElement("section");
section.className = "overlayMenu";

var isdisplay = false;

function menueffect() {
  var menu = document.querySelector(".new-hamburger-menu");
  menu.parentNode.insertBefore(section, menu.nextSibling);

  if (isdisplay === true) {
    document.querySelector(".menuSection").className = "menuSectionHidden";
    document.querySelector(".HamburgerIcon_isActive").className =
      "hamburgerSlider";
    document.querySelector(".hamburgerTriangle").className =
      "hamburgerTriangleHidden";
    section.remove();
    isdisplay = false;
  } else if (isdisplay === false) {
    document.querySelector(".menuSectionHidden").className = "menuSection";
    document.querySelector(".hamburgerSlider").className =
      "hamburgerSlider HamburgerIcon_isActive";
    document.querySelector(".hamburgerTriangleHidden").className =
      "hamburgerTriangle";

    isdisplay = true;
  }
}

function getMenu(data, level) {
  var i;
  var z;
  var menu = "";

  level++;
  try {
    for (var i = 0; i < data.length; i++) {
      var menuData = data[i];
      menu +=
        '<li class="FirstLevelItems_menuElementsDesktop" id="item-' +
        i +
        '" onmouseover="elementhover(this,' +
        menuData.ID +
        ')">';
      menu +=
        '<div class="FirstLevelItems_menuText">' + menuData.TITLE + "</div>";
      menu += '	<div class="FirstLevelItems_arrowCon">';
      menu += '	  <i class="FirstLevelItems_arrowRight"></i>';
      menu += "	</div>";
      menu += "</li>";
    }
  } catch (error) {
    console.error(error);
  }

  return menu;
}

function getMenuLevel(data, level) {
  var menulevel = "";
  for (var i = 0; i < data.length; i++) {
    var menuleveldata = data[i];
    menulevel += '<ul class="SecondLevelItems_detailsElements">';
    menulevel += '<div class="SecondLevelItems_submenuTitleCon">';
    menulevel += '<div class="SecondLevelItems_menuText">';
    menulevel +=
      '	 <a class="SecondLevelItems_submenuTitle" href="#">' +
      menuleveldata.TITLE +
      "</a>";
    menulevel += "</div>";
    menulevel += "<div>";
    menulevel += '	<i class="undefined undefined"></i>';
    menulevel += "</div>";
    menulevel += "</div>";
    menulevel += '<div class="ThirdLevelItems_leafNodes">';
    var itemsdata = menuleveldata.ITEMS;
    if (Object.keys(itemsdata.ITEM).length >= 0) {
      menulevel += getMenuLevelli(itemsdata, level);
    }
    menulevel += "</div>";
    menulevel += '<div class="SecondLevelItems_itadapts"></div>';
    menulevel += "</ul>";
  }
  return menulevel;
}

function getMenuLevelli(data, level) {
  var menulevel = "";
  for (var i = 0; i < data.ITEM.length; i++) {
    var menuli = data.ITEM[i];
    menulevel +=
      '<li class="ThirdLevelItems_listElements"><a href="' +
      menuli.URL +
      '" class="ThirdLevelItems_submenuElementLi">' +
      menuli.TITLE +
      "</a></li>";
  }
  return menulevel;
}

function init() {
  document
    .getElementById("hamburgerMenu")
    .addEventListener("click", menueffect);
}

function elementhover(el, pos) {
  let obj;
  var MenuLevel;
  var MenuEl = document.getElementsByClassName(
    "SecondLevelItems_submenuElements"
  );
  MenuEl[0].innerHTML = "";

  if (_this.MegaMenuData.find((e) => e.ID === pos).length != 0) {
    obj = _this.MegaMenuData.find((e) => e.ID === pos);
    var menuleveldata = obj.ITEMS;
    MenuLevel = getMenuLevel(menuleveldata.ITEM, 2);
    if (MenuLevel.length > 0) MenuEl[0].innerHTML = MenuLevel;
  }
}
