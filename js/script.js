        // navbar <nav></nav>
    var menuElem = document.querySelector(".menu") ,
        // ++++++++++ "overlay Layer" on "navbar" ++++++++++
        overlayLayerElem = document.querySelector(".menu-overlay") ,
        // navbar <ul></ul>
        menuMainElem = menuElem.querySelector(".menu-main") ,
        // "go back arrow" of "Sidebar"
        goBack = menuElem.querySelector(".go-back") ,
        // "Close Icon" of "Sidebar"
        closeMenu = menuElem.querySelector(".mobile-menu-close") ,
        // Menubar Button
        menuTrigger = document.querySelector(".mobile-menu-trigger") ,
        // Megamenu of the clicked element
        subMenu ;

    // +++++++++++++++++++++++++ When click on "<ul></ul>" of navbar +++++++++++++++++++++++++
    menuMainElem.addEventListener("click",function(e){
        if( !menuElem.classList.contains('active') )
        {
            return; 
        }
        // e.target == the element you clicked on العنصر اللي انته ضغطت عليه
        // e.target.closet(".menu-item-has-children") ==> children بتحتوي علي dropdown يعني داخل اي .menu-item-has-children هترجع العنصر اللي انته ضغطت عليه بشرط انه يكون موجود داخل العنصر اللي واخد كلاس 
        // children بتحتوي علي dropdown يعني داخل اي .menu-item-has-children لو العنصر اللي انته ضغطت عليه كان موجود داخل العنصر اللي واخد كلاس
        if ( e.target.closest(".menu-item-has-children") )
        {
                // Store the Clicked Element :  هخزن العنصر اللي انا ضغطت عليه في متغير
                var hasChildrenElem =  e.target.closest(".menu-item-has-children") ;
                // Call showSubMenu() function : Function To Appear the MegaMenu When Click on "Link"
                showSubMenu(hasChildrenElem);
        }
    });
    // +++++++++++++++++++++++++ When click on "Go Back" of "sidebar" +++++++++++++++++++++++++
    goBack.addEventListener("click",function(e){
        // Call "hideSubMenu" function
        hideSubMenu();
    });
    // +++++++++++++++++++++++++ When click on "Menubar Button" of "navbar" +++++++++++++++++++++++++
    menuTrigger.addEventListener("click",function(e){
        // Call "toggleSidebar" function
        toggleSidebar();
    });
    // +++++++++++++++ When click on "Close Icon" : Hide "sidebar" and "overlay Layer" +++++++++++++++++++++++++
    closeMenu.addEventListener("click",function(e){
        /* Hide "sidebar"  */
        menuElem.classList.remove("active");
        /* Hide "overlay Layer" */
        overlayLayerElem.classList.remove("active");
    });
    // +++++++++++++++ When click on "Overlay Layer" : Hide "sidebar" and "overlay Layer" +++++++++++++++++++++++++
    overlayLayerElem.addEventListener("click",function(e){
         /* Hide "sidebar"  */
         menuElem.classList.remove("active");
         /* Hide "overlay Layer" */
         overlayLayerElem.classList.remove("active");
    });
    // ++++++++++++++++ When "Resize Window" and Screen_Width = 991px then Hide "Overlay Layer  +++++++++++++++++++++++++
    window.onresize = function()
    {
        /* Not Mobile Screen Then Hide "sidebar" , "overlay Layer" */
        if ( this.innerWidth > 991 )
        {
            // Toggle "sidebar"
            menuElem.classList.remove("active");
            // ++++++++++ "overlay Layer" on "navbar" ++++++++++
            overlayLayerElem.classList.remove("active");
        }
    }
   // +++++++++++++++++++++++++ Function Definition : "showSubMenu" function +++++++++++++++++++++++++
   function showSubMenu( hasChildrenParam )
   {
        // Store the Megamenu of the clicked element : اللي موجودة داخل العنصر اللي انته ضغطت  megamenu or sub-menu هجيب ال
        subMenu = hasChildrenParam.querySelector(".sub-menu");
        // .sub-menu اللي واخد كلاس sub-menu or megamenu لل active هيضيف الكلاس
        subMenu.classList.add("active");
        /* Add the "keyframe" to "Active megamenu" :  اللي ضغطت عليها حاليا وهي حاليا ظاهرة megamenu هضيف الكيفرام لل */
        subMenu.style.animation = "slideRight 0.5s ease forwards";
        /* Fetch The "textContent" of the "<a></a>" Which is the parent of the <i class='fa fa-angle-down'></i> of the <li></li> that has "sub-menu"  */
        var menuTitle = hasChildrenParam.querySelector("i").parentNode.childNodes[0].textContent ;
        // "current menu title" of the "sidebar"
        // sidebar لل title ويحطه ك sub-menu اللي تم الضغط عليه بشرط انه يحتوي link بتاع ال textContent هجيب ال
        menuElem.querySelector(".current-menu-title").innerHTML = menuTitle ;
        // .mobile-menu-head اللي واخد كلاس sidebar header لل active هيضيف الكلاس
        menuElem.querySelector(".mobile-menu-head").classList.add("active");
   }
   // +++++++++++++++++++++++++ Function Definition : "hideSubMenu" function +++++++++++++++++++++++++
   function hideSubMenu()
   {    
        /* Add the "keyframe" to "Active megamenu" :  اللي ضغطت عليها حاليا وهي حاليا ظاهرة megamenu هضيف الكيفرام لل */
        subMenu.style.animation = "slideLeft 0.5s ease forwards";
        setTimeout( function(){
             // .sub-menu اللي واخد كلاس sub-menu or megamenu من active هيجذف الكلاس
            subMenu.classList.remove("active");
        } , 300 );       
        // "current menu title" of the "sidebar"
        // sidebar لل title ويحطه ك sub-menu اللي تم الضغط عليه بشرط انه يحتوي link بتاع ال textContent هجيب ال
        menuElem.querySelector(".current-menu-title").innerHTML = " ";
        // .mobile-menu-head اللي واخد كلاس sidebar header من active هيحذف الكلاس
        menuElem.querySelector(".mobile-menu-head").classList.remove("active");
   }
   // +++++++++++++++++++++++++ Toggle Sidebar Function +++++++++++++++++++++++++
   function toggleSidebar()
   {
        // Toggle "sidebar"
        menuElem.classList.toggle("active");
        // ++++++++++ "overlay Layer" on "navbar" ++++++++++
        overlayLayerElem.classList.toggle("active");
   }


   /* +++++++++++++++++++++++++++++++++++++++++++++ Slider Section +++++++++++++++++++++++++++++++++++++++++++++ */
   var indexValue = 1 ;
   // ------------------------ Call "showImg()" Function ------------------------
   showImg(indexValue);
   // ------------------------ "btn_slide()" Function : When Click on "indicators" ------------
   function btn_slide(e) 
   {
        showImg( indexValue = e ); 
   }
   // ------------------------ "side_slide()" Function : When Click on "Arrows" ------------
   function side_slide(e) 
   {
        showImg( indexValue += e ); 
   }
   /* ------------------------ "showImg()" Function : Show Slides ------------------------ */
   function showImg(e)
   {
        var i ;
               // Return All Slides( images ) : array of images 
        const  img = document.querySelectorAll(".images img"),
                // Return All "image Circles" : array of indicators 
                slider_circles = document.querySelectorAll(".btn-sliders span");
        
        console.log(img);
        console.log(slider_circles);
        
        if( e > img.length )
        {
            indexValue = 1 ;
        }
        else if( e < 1 )
        {
            indexValue = img.length ;
        }
        // Hide All Slides ( slider images ) 
        for( var i=0 ; i < img.length ; i++ )
        {
            img[i].style.display = "none" ;
        }
        for( var j=0 ; j < slider_circles.length ; j++ )
        {
            slider_circles[j].style.background = "rgba(0 , 0 , 0 , 0.5)";
        }
        /* ++++++++++++++++++ Show the "Current Slide" +++++++++++++++++ */
        img[indexValue-1].style.display = "block" ;
        /* ++++ Change the "BackgroundColor" of the "Current Slide" ++++ */
        slider_circles[indexValue-1].style.background = "#f00";
   }