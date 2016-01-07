---
layout:     	default
title:      	Parallax Gallery
description:    Just a photogallery with a nice parallax-like effect
modified:		2013-09-30
tags:       	['js', 'parallax', 'gallery', 'poc']
js:         	['page/parallax-gallery']
---

Here is the first of a series of ideas came to my mind.

### What is it?

It's just a fancy way to display photos in a gallery: there are two lists of photos, one scrolls to the top and the other to the bottom.
The user can control both columns (even from a mobile device).

### See it in action

<div class="gallery-wrapper">
	<div class="js-gallery-1 wrapper-1 wrapper">
	    <ul>
	        <li><img src="{{ site.url }}/images/a1.jpg"></li>
	        <li><img src="{{ site.url }}/images/a2.jpg"></li>
	        <li><img src="{{ site.url }}/images/a3.jpg"></li>
	        <li><img src="{{ site.url }}/images/a4.jpg"></li>
	    </ul>
	</div>

	<div class="js-gallery-2 wrapper-2 wrapper">
	    <ul>
	        <li><img src="{{ site.url }}/images/a5.jpg"></li>
	        <li><img src="{{ site.url }}/images/a6.jpg"></li>
	        <li><img src="{{ site.url }}/images/a7.jpg"></li>
	        <li><img src="{{ site.url }}/images/a8.jpg"></li>
	    </ul>
	</div>
</div>

### How is it made?