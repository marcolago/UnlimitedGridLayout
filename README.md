Unlimited Grid Layout
=====================

During my work as a frontend developer I coded many sites with a full page layout, both before and after the Flash decline.

Coding this type of layout was, every time, one step forward towards a better and more maintainable CSS structure; however, even if every single length was expressed as a relative and flexible unit, we need to know the number of pages.

For example: if we have an horizontal structure of 6 pages we set the pages’ container width to 600% and every single child page width to 16.66%. But if the number of pages changed to 5 or 7 we have to edit the CSS.

Even if we built the section wider than needed, for example setting the container to 1000% and the single pages to 10%, we can’t be sure that the number of pages never changed to a higher value.

With this problem in mind I’ve searched a solution to compose a full-page grid layout that doesn’t need to know how many pages compose the site; so if I need to add or remove pages at runtime the structure adapts itself to contain the new content.

The result is my new Unlimited Grid Layout Boilerplate; a brand new application of simple basic CSS rules that allow developers to build flexible full-page sites with the flexibility to add or remove pages, or even entire sections, without breaking the layout.
The current version, the 1.0a, uses two simple declarations to achieve the task.

white-space: nowrap; on the container of the horizontal structure, and display: inline-block; on the inner pages.

These two declarations prevent child pages to wrap.
Now we have an horizontal flow which generates a native scrolling and that can continue to infinite.
And If we don’t need the scrollbars we can simply remove them with an overflow: hidden; declaration and control the panning with javascript.
Considering that a demo is worth more than 1000 words let’s see two implementations of this boilerplate: but before, let me say just two words (so eventually the words will be 1002) about this proper demo.

- The demo runs slow on webkit browsers because of an issue with background-size property; try the demo on Firefox or (strange but true) in Internet Explorer to have the best experience; anyway, the background-size declaration is just for eye candy and the layout complexity may vary in the real world.
- In Internet Explorer the control panel in the upper right corner does not work because the lack of support of querySelector API; so if you look at the demo in IE you can see only a 3x3 grid. Sorry about this but it’s a demo and I didn’t want include any external library like jQuery.
- The demo uses text-shadow and multiple backgrounds properties only for presentation purpose, so I’ve build the demo on graceful degradation concepts: in IE you can’t see any shadow on text and in IE 8 or less you can’t even see any background image or background colour but you can still explore the functionality of the boilerplate with the base grid; even in IE 7.
- The CSS is fully commented so you can take a look directly at the code to discover the tricks. The CSS is separated in tree parts; only the first part, the structure, is really important for our scopes; the second part, the eye candy, is for the beauty side of the demo; and the last one, the demo logic, it’s only to dress the control panel and the credits.

Demo ordered by columns: http://marcolago.com/absolide/demo/unlimited-grid-layout/columns.html

Demo ordered by rows: http://marcolago.com/absolide/demo/unlimited-grid-layout/rows.html

Do you like it? I hope you do.
Feel free to experiment with the code and use it in production if you feel comfortable with it. If anyone makes a website or a webapp based on this boilerplate, please, let me know; I will appreciate.


UPDATE - FlexBox Version
========================

Updated code and demos with the FlexBox (current syntax) implementation.

More info on the implementation on: http://absolide.tumblr.com/post/34943657374/unlimited-grid-layout-now-with-flexbox-flavour

Demo ordered by columns: http://marcolago.com/absolide/demo/unlimited-grid-layout/columns-flex.html

Demo ordered by rows: http://marcolago.com/absolide/demo/unlimited-grid-layout/rows-flex.html



Have fun, stay tuned and let me know