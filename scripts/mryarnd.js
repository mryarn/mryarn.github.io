	function modalSetup() {
        var modal = $("yarnpopup"), fadeOut;
        if (!modal) return;
        fadeOut = function(e) { modal.fade("out"); };
           
        modal.set("opacity", 0);
        modal.addEvent("click", fadeOut);
        window.addEvent('keypress',function(e) { if(e.key == 'esc') { fadeOut() } });
        $(document.body).addEvent('click',
            function(e) {
                if(modal.get("opacity") == 1 && !$(e.target).getParent('.popup')) {
                    fadeOut();
                }
            });
		needleModalSetup(modal, fadeOut);
        $(document.body).getElements(".itemsContainer img.thumb").each(
            function(i) {
                i.addEvent("click",
                    function() {
                        //$('fb-modal').position();
                        
                        var acc = $("accessories");
                        var popupImg = modal.getElement(".popupcontent img");
                        var popupContent = popupImg.getParent();
                        var isAccessory = (function(a) {
                            var g = a.getParent(".lineItemGroup");
                            if (g && g.getElement("h3").get("text") == "Accessories") {
                                return true;   
                            }
                            return false;
                        })(i);
						var isNewImage = (function(a) {
							var h = $(document).getElement(".yarntype h2 span");
							var h2 = $(document).getElement(".yarntype h2");
							if (
								h2 && h2.get("text").indexOf("Everlasting DK") >= 0 ||								
								h2 && h2.get("text").indexOf("Tosh Sock") >= 0 ||								
								(h && h.get("text") == "Shibui" && h2 && h2.get("text").indexOf("Sock") >= 0)) {
								return false;
							}
							var g = a.getParent(".lineItemGroup");
							var h3;
							if (g) { h3 = g.getElement("h3").get("text") };
							if (g && 
								(
									h3.indexOf("Everlasting DK") >= 0 ||						
									h3.indexOf("Tosh Sock") >= 0 ||									
									h3.indexOf("Shibui Sock") >= 0)) {
									return false;
							}
							return true;
						})(i);	
                        if (acc || isAccessory) {
                            popupImg.set("height", "480");
                            popupImg.set("width", "360");
                            popupContent.setStyle("width", "360px");
                            popupContent.getParent().setStyle("width", "380px");
                            var ggp = popupContent.getParent().getParent().getParent(); 
                            ggp.setStyle("width", "380px");
                            ggp.setStyle("height", "522px");
                            ggp.setStyle("margin-left", "-110px");
                        } else if (isNewImage) {
							popupImg.set("height", "405");
                            popupImg.set("width", "720");
                            popupContent.setStyle("width", "720px");
                            popupContent.getParent().setStyle("width", "740px");
                            var ggp = popupContent.getParent().getParent().getParent(); 
                            ggp.setStyle("width", "740px");
                            ggp.setStyle("height", "447px");
                            ggp.setStyle("margin-left", "-291px");
                        } else if (!acc) {
                            popupImg.set("height", "320");
                            popupImg.set("width", "480");
                            popupContent.setStyle("width", "480px");
                            popupContent.getParent().setStyle("width", "500px");
                            var ggp = popupContent.getParent().getParent().getParent(); 
                            ggp.setStyle("width", "500px");
                            ggp.setStyle("height", "362px");
                            ggp.setStyle("margin-left", "-170px");
                        }
                        var yOffset = $(document).getScroll().y,
                            windowHeight = $(document).getHeight(),
                            newY =  ((windowHeight - modal.getElement(".border").getHeight()) >> 1)
                                    + yOffset;
                        var dotIndex = i.src.lastIndexOf(".");
						var largePicUrl = i.src.substring(0, dotIndex) + "_large.jpg";
						if (i.src.indexOf("?") > 0) {
							largePicUrl += i.src.substring(dotIndex + 4, i.src.length - 1);
						}
                        popupImg.set('src', largePicUrl);
                        modal.setPosition({y : newY });
                        modal.fade('in');
                    })
            });
    }

	function needleModalSetup(modal, fadeOut) {		
		if (!$("needlePage")) { return; }				
        $(document.body).getElements("img.needlethumb").each(
            function(i) {
                i.addEvent("click",
                    function() {                        
                        var popupImg = modal.getElement(".popupcontent img");
                        var popupContent = popupImg.getParent();
                                                
						popupImg.set("height", "480");
						popupImg.set("width", "720");
						popupContent.setStyle("width", "720px");
						popupContent.getParent().setStyle("width", "740px");
						var ggp = popupContent.getParent().getParent().getParent(); 
						ggp.setStyle("width", "740px");
						ggp.setStyle("height", "522px");
						ggp.setStyle("margin-left", "-291px");
                        
                        var yOffset = $(document).getScroll().y,
                            windowHeight = $(document).getHeight(),
                            newY =  ((windowHeight - modal.getElement(".border").getHeight()) >> 1)
                                    + yOffset;
                        var dotIndex = i.src.lastIndexOf(".");
						var largePicUrl = i.src.substring(0, dotIndex) + "_large.jpg";
						if (i.src.indexOf("?") > 0) {
							largePicUrl += i.src.substring(dotIndex + 4, i.src.length - 1);
						}
                        popupImg.set('src', largePicUrl);
                        modal.setPosition({y : newY });
                        modal.fade('in');
                    })
            });
    }
	
modalSetup();
needleModalSetup();