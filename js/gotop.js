// build time:Sat Apr 24 2021 04:00:11 GMT+0000 (Coordinated Universal Time)
(function(i){jQuery.fn.gotoTop=function(o){var n=this;var a=i(window);var e=i("html,body");var t=false;var s={offset:420,speed:500,iconSpeed:200,animationShow:{opacity:"1"},animationHide:{opacity:"0"}};var c=i.extend(s,o);n.click(function(){e.animate({scrollTop:"0"},c.speed)});i.each(c.animationShow,function(i){if(i=="transform"){t=true}});function f(){if(t){n.css(c.animationShow)}else{n.stop().animate(c.animationShow,c.iconSpeed)}}function l(){if(t){n.css(c.animationHide)}else{n.stop().animate(c.animationHide,c.iconSpeed)}}a.scroll(function(){if(a.scrollTop()>c.offset){f()}else{l()}});if(a.scrollTop()>c.offset){n.css(c.animationShow)}else{n.css(c.animationHide)}}})(jQuery);
//rebuild by hrmmi 