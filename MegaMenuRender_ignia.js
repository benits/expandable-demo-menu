function MegaMenu($)
{
	this.MegaMenuData;
	this.SelectedItem;
	this.Width;
	this.Height;

	// Databinding for property MegaMenuData
	this.SetMegaMenuData = function(data)
	{
		///UserCodeRegionStart:[SetMegaMenuData] (do not remove this comment.)
		
			this.MegaMenuData = data;
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property MegaMenuData
	this.GetMegaMenuData = function()
	{
		///UserCodeRegionStart:[GetMegaMenuData] (do not remove this comment.)

		return this.MegaMenuData;
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property SelectedItem
	this.SetSelectedItem = function(data)
	{
		///UserCodeRegionStart:[SetSelectedItem] (do not remove this comment.)

		this.SelectedItem = data;
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property SelectedItem
	this.GetSelectedItem = function()
	{
		///UserCodeRegionStart:[GetSelectedItem] (do not remove this comment.)

		return this.SelectedItem;
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)

        var selected     = this.SelectedItem;
        var wasLoaded    = false;
        var _this        = this;
        var lang         = document.getElementsByTagName("html")[0].getAttribute("lang");
        

        if (this.MasterPage = true) {

            window.onload = function () {
				wasLoaded = true;
			}
		}

		var buffer = '';
		
		if (!this.IsPostBack) { 

			buffer += '<div id="menu-wrapper">'
			buffer += '<ul class="megamenu">'
			buffer += (this.MegaMenuData ? getMenu(this.MegaMenuData,0) : '<h1> Not found data </h1>');
			buffer += '	</ul>'
			buffer += '</div>'

			$('#' + this.ContainerName).html(buffer);
		}
		
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)


	///UserCodeRegionEnd: (do not remove this comment.):
}

function getMenu(data, level) {

    var i;
    var z;
    var menu = "";
    level++;
    try {
        for (var i = 0; i < data.length; i++) {
			var menuData = data[i];		
            menu += ' <li>'
            menu += '  <a href="#">' + menuData.TITLE + '</a>'
			var itemsdata = menuData.ITEMS;
            if (Object.keys(itemsdata.ITEM).length > 0) {
				menu += '<div>'
                menu += getMenuLevel(itemsdata.ITEM, level);
                menu += '</div>'
            }
            menu += ' </li>'
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
		menulevel += '<div class="megamenu-column">';
		menulevel += "	<h3>" + menuleveldata.TITLE + "</h3>";
		var itemsdata = menuleveldata.ITEMS;		
        if (Object.keys(itemsdata.ITEM).length >= 0) {
            menulevel += " <ul>";
            menulevel += getMenuLevelli(itemsdata, level);
            menulevel += "</ul>";
        }
        menulevel += "</div>";
    }
    return menulevel;
}


function getMenuLevelli(data, level) {
	var menulevel = "";
	for (var i = 0; i < data.ITEM.length; i++) {    
		var menuli = data.ITEM[i];
    	menulevel += '<li><a href="'+menuli.URL+'">'+menuli.TITLE+'</a></li>'	}
    return menulevel;
}