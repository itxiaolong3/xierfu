(function($){$.fn.mnmenu=function(op){var tempLevelSettings={};if(typeof op!=='undefined'&&typeof op.levelSettings!=='undefined'){tempLevelSettings=op.levelSettings;delete op.levelSettings;}
var settings=$.extend({},$.fn.mnmenu.defaults,op);settings.levelSettings=$.extend({},settings.levelSettings,tempLevelSettings);return this.each(function(){var $parentMenu=$(this);if($parentMenu.prop("tagName").toUpperCase()!=="UL"){$.error("This function can only be called in <ul> elements.");}
$parentMenu.addClass(settings.menuClassName);$.fn.mnmenu.levelRecursion(settings,$parentMenu,0);$parentMenu.find("ul").each(function(){$(this).css("display","none");});if($.fn.hoverIntent){$parentMenu.find("li").each(function(){var $this=$(this);$this.hoverIntent(function(){$.fn.mnmenu.mouseEnter($(this),settings);},function(){$.fn.mnmenu.mouseLeave($(this),settings);});$this.click(function(e){$.fn.mnmenu.mouseClick($(this),settings);e.stopImmediatePropagation();});});}else{$parentMenu.find("li").each(function(){var $this=$(this);$this.mouseenter(function(){$.fn.mnmenu.mouseEnter($(this),settings);});$this.mouseleave(function(){$.fn.mnmenu.mouseLeave($(this),settings);});$this.click(function(e){$.fn.mnmenu.mouseClick($(this),settings);e.stopImmediatePropagation();});});}});};$.fn.mnmenu.mouseEnter=function($menu,settings){var windowWidth=$(window).width();clearTimeout($menu.data('timer'));$.fn.mnmenu.elementsToHover($menu,settings).each(function(){$(this).addClass(settings.hoverClassName);});$menu.children("ul").each(function(){var $this=$(this);var $parent=$this.parent("li");var $parentContainer=$parent.closest("ul");if($this.is(":animated")){$this.stop(true,true).show();}
else{var zindex=1;var current=$this;while(current.get(0)!==$(document).get(0)){var temp=parseInt(current.css("z-index"));if(!isNaN(temp)&&temp>zindex){zindex=temp;}
current=current.parent();}
$this.css("z-index",zindex+1);var currentLevel=0;var classList=$this[0].className.split(/\s+/);for(var i=0;i<classList.length;i++){if(classList[i].indexOf([settings.levelClassPrefix,'-'].join(''))>=0){currentLevel=parseInt(classList[i].substring(settings.levelClassPrefix.length+1));}}
var customLevelSettings=settings.levelSettings[currentLevel];if(typeof customLevelSettings==="undefined"){customLevelSettings=settings.levelSettings[0];}
var left="auto",right="auto",top="auto",bottom="auto";if(customLevelSettings.parentAttachmentPosition.toUpperCase().indexOf("W")>=0&&customLevelSettings.attachmentPosition.toUpperCase().indexOf("E")>=0){right=$parent.outerWidth()+"px";if($parent.offset().left-$this.outerWidth()<0){left=$parent.outerWidth()+"px";right="auto";}}else if(customLevelSettings.parentAttachmentPosition.toUpperCase().indexOf("E")>=0&&customLevelSettings.attachmentPosition.toUpperCase().indexOf("E")>=0){right="0px";}
else if(customLevelSettings.parentAttachmentPosition.toUpperCase().indexOf("E")>=0&&customLevelSettings.attachmentPosition.toUpperCase().indexOf("W")>=0){left=$parent.outerWidth()+"px";if(($parentContainer.offset().left+$parentContainer.outerWidth()+$this.outerWidth())>windowWidth){left="auto";right=$parent.outerWidth()+"px";}}else if(customLevelSettings.parentAttachmentPosition.toUpperCase().indexOf("W")>=0&&customLevelSettings.attachmentPosition.toUpperCase().indexOf("W")>=0){left="0px";}
if(customLevelSettings.parentAttachmentPosition.toUpperCase().indexOf("N")>=0&&customLevelSettings.attachmentPosition.toUpperCase().indexOf("S")>=0){bottom=$parent.outerHeight()+"px";}else if(customLevelSettings.parentAttachmentPosition.toUpperCase().indexOf("S")>=0&&customLevelSettings.attachmentPosition.toUpperCase().indexOf("S")>=0){bottom="0px";}
else if(customLevelSettings.parentAttachmentPosition.toUpperCase().indexOf("S")>=0&&customLevelSettings.attachmentPosition.toUpperCase().indexOf("N")>=0){top=$parent.outerHeight()+"px";}else if(customLevelSettings.parentAttachmentPosition.toUpperCase().indexOf("N")>=0&&customLevelSettings.attachmentPosition.toUpperCase().indexOf("N")>=0){top="0px";}
$this.css("left",left);$this.css("right",right);$this.css("top",top);$this.css("bottom",bottom);$this.slideDown(settings.duration);}});};$.fn.mnmenu.mouseLeave=function($menu,settings){clearTimeout($menu.data('timer'));$.fn.mnmenu.elementsToHover($menu,settings).each(function(){$(this).removeClass(settings.hoverClassName);});$menu.children("ul").each(function(){var $toHide=$(this);$menu.data('timer',setTimeout(function(){$toHide.hide(settings.duration);},settings.delay));});};$.fn.mnmenu.mouseClick=function($menu,settings){clearTimeout($menu.data('timer'));var $link=$menu.children('a');if($link.attr('href')){window.location.href=$link.attr('href');}};$.fn.mnmenu.elementsToHover=function($menu,settings){return $([$menu,$menu.children(":not(ul)")]);};$.fn.mnmenu.levelRecursion=function(settings,$component,level){if($component.prop("tagName").toUpperCase()==="LI"){var middle=true;if($component.parent().children().first().get(0)===$component.get(0)&&level>0){$component.parent().closest("li").append($(["<span ","class='",settings.arrowClassName,"'></span>"].join("")).append(settings.arrowCharacter));$component.addClass(settings.firstClassName);middle=false;}
if($component.parent().children().last().get(0)===$component.get(0)){$component.addClass(settings.lastClassName);middle=false;}
if(middle){$component.addClass(settings.middleClassName);}
level++;}
$component.children().each(function(){var $currentLevel=$(this);$currentLevel.addClass(settings.levelClassPrefix+"-"+level);$.fn.mnmenu.levelRecursion(settings,$currentLevel,level);});};$.fn.mnmenu.defaults={menuClassName:"mnmenu",hoverClassName:"hover",levelClassPrefix:"level",arrowClassName:"arrow",arrowCharacter:" &#187;",firstClassName:"first",middleClassName:"middle",lastClassName:"last",delay:150,duration:250,defaultParentAttachmentPosition:"NE",defaultAttachmentPosition:"NW"};$.fn.mnmenu.defaults.levelSettings={};$.fn.mnmenu.defaults.levelSettings[0]=new MNLevelSettings();$.fn.mnmenu.defaults.levelSettings[1]=new MNLevelSettings();$.fn.mnmenu.defaults.levelSettings[1].parentAttachmentPosition="SW";$.fn.mnmenu.defaults.levelSettings[1].attachmentPosition="NW";})(jQuery);function MNLevelSettings(){this.parentAttachmentPosition=$.fn.mnmenu.defaults.defaultParentAttachmentPosition;this.attachmentPosition=$.fn.mnmenu.defaults.defaultAttachmentPosition;this.arrowCharacter=$.fn.mnmenu.defaults.arrowCharacter;}