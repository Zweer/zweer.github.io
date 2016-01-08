---
layout:     	post
title:      	Parallax Gallery
description:    Just a photogallery with a nice parallax-like effect
modified:		2013-09-30
tags:       	['js', 'parallax', 'gallery', 'poc']
---

Here is the first of a series of ideas that came to my mind: a fancy way to 
display photos in a gallery: there are two lists of photos, one scrolls to the 
top and the other to the bottom. The user can control both columns (even from a 
mobile device).

Wonna see it in action?

<div class="row parallax-gallery">
	<div class="col-xs-6">
	    <ul class="list-unstyled">
	        <li><img src="{{ site.url }}/img/background/a1.jpg"></li>
	        <li><img src="{{ site.url }}/img/background/a2.jpg"></li>
	        <li><img src="{{ site.url }}/img/background/a3.jpg"></li>
	        <li><img src="{{ site.url }}/img/background/a4.jpg"></li>
	    </ul>
	</div>
	
	<div class="col-xs-6">
	    <ul class="list-unstyled">
	        <li><img src="{{ site.url }}/img/background/a5.jpg"></li>
	        <li><img src="{{ site.url }}/img/background/a6.jpg"></li>
	        <li><img src="{{ site.url }}/img/background/a7.jpg"></li>
	        <li><img src="{{ site.url }}/img/background/a8.jpg"></li>
	    </ul>
	</div>
</div>

### How is it made?