'use strict'
import {ableSearch, disableSearch,toggleNav,toDown,slickSlider} from './homepage'
import accordionFunc from './accordion';
import autoToggleClassNav from "./autoToggleClassNav";
import lazyload from "./lazyload"

$(document).ready(function(){
lazyload()

 ableSearch();
 disableSearch()
 toggleNav();
 toDown();
 slickSlider();

accordionFunc();
 
autoToggleClassNav();

});