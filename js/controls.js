var pages;
		var pageTemplate = '<section class="page page%%n%% full-size"><section>';
		var subPageTemplate = '<article class="sub-page sub-page%%n%% full-size"><h1 class="page-title">Section %%p%% / Article %%n%%</h1></article>';
			
		var pageContainer = document.querySelector(".page-container");
		var cc = document.querySelector("#page-count");
		var rc = document.querySelector("#sub-page-count");
		
		cc.addEventListener("change", onChange);
		rc.addEventListener("change", onChange);
		
		function onChange(e)
		{
			pages = document.querySelectorAll(".page");
			
			// columns
			if (pages.length > cc.value)
			{
				for (var i = pages.length - 1; i >= cc.value; i--)
				{
					var p = pages[i];
					pageContainer.removeChild(p);
				}
			}
			else if (pages.length < cc.value)
			{
				var range = document.createRange();
				range.selectNode(pageContainer);
				for (var i = pages.length; i < cc.value; i++)
				{
					var newPage = pageTemplate;
					newPage = newPage.replace(/%%n%%/g, "" + (i + 1));
					var documentFragment = range.createContextualFragment(newPage);
					pageContainer.appendChild(documentFragment);
				}
			}
			
			// rows
			
			pages = document.querySelectorAll(".page");
			
			for (var i = 0; i < pages.length; i++)
			{
				var page = pages[i];
				var subPages = page.querySelectorAll(".sub-page");
				
				if(subPages.length > rc.value)
				{
					for (var ii = subPages.length - 1; ii >= rc.value; ii--)
					{
						var r = subPages[ii];
						page.removeChild(r);
					}
				}
				else if (subPages.length < rc.value)
				{
					var range = document.createRange();
					range.selectNode(page);
					for (var ii = subPages.length; ii < rc.value; ii++)
					{
						var newSubPage = subPageTemplate;
						newSubPage = newSubPage.replace(/%%n%%/g, "" + (ii + 1));
						newSubPage = newSubPage.replace(/%%p%%/g, "" + (i + 1));
						var documentFragment = range.createContextualFragment(newSubPage);
						page.appendChild(documentFragment);
					}
				}
			}
		}
		
		onChange(null);