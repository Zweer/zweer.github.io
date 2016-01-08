'use strict';

const $ = require('jquery');

$(function () {
    const $body = $('body');
    const $wrapper = $('.menu-wrapper');
    
    if ($wrapper.length === 0) {
        return;
    }
    
    const $trigger = $('.menu-trigger');
    const $menu = $('.menu-menu');
    const $submenu = $('.menu-submenu');
    const $submenuTrigger = $('.menu-submenu-trigger');
    
    function closeMenu () {
        $menu.hide();
        $submenu.hide();
        $trigger.show();
    }
    
    function openMenu (event) {
        event.stopPropagation();
        
        $menu.show();
        $trigger.hide();
        
        $body
            .off('click')
            .on('click.menu', closeMenu);
    }
    
    function openSubmenu (event) {
        event.stopPropagation();
        
        const $this = $(this);
        const $thisMenu = $this.next('.menu-submenu');
        
        $thisMenu.show();
    }
    
    $menu.hide();
    $submenu.hide();
    $wrapper.removeClass('menu-loading');
    
    $trigger.on('click.menu', openMenu);
    
    $submenuTrigger.on('click.menu', openSubmenu);
});