'use strict'
import {ableSearch, disableSearch,toggleNav,toDown,slickSlider} from './homepage'
import accordionFunc from './accordion';
import autoToggleClassNav from "./autoToggleClassNav";

$(document).ready(function(){

 ableSearch();
 disableSearch()
 toggleNav();
 toDown();
 slickSlider();

accordionFunc();
 
autoToggleClassNav();

});