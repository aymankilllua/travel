$(function(){
    $("section").height($(window).height())



    var section = ["tokyo" ,"london" ,"usa",'turky',"argentena","asbani"];

    for (let i = 0; i < section.length; i++) {
        

        $("section ul  li a[href='#"+section[i]+"']").click(function(){
            var target = $(this).attr("href");
            console.log(target);
             anime({
                targets:"li",
                opacity:0,
                delay: function(el, i, l) {
                    return i * 50;
                  }
            }) ;

            anime({
                targets:"li",
                translateX:-1000,
                delay: function(el, i, l) {
                    return i * 250;
                  }
            });

            anime({
                targets:"h1",
                width: "0",                
                opacity:0,
                delay:2300
            })

            $("#"+section[i]).addClass("see");
            $("#"+section[i]).not($(target)).removeClass("see");
              anime({
                  targets:".see .innercity",
                  height:$(window).height(),
                  padding:20,
                  delay:900
              }) 

              anime({
                targets:".see p,button",
                opacity:1,
                delay:1000
            })
            

            anime({
                targets:".see .grid-item",
                opacity:1,
                delay: 1000

            })

            
        })


        $(".innercity button").click(function(){

            console.log("hello")
            $(".city").removeClass("see");


            anime({
                targets:"li",
                opacity:1,
                delay: function(el, i, l) {
                    return i * 200;
                  }
            }) ;

            anime({
                targets:"li",
                translateX:0,
                delay: function(el, i, l) {
                    return i * 250;
                  }
            });

            anime({
                targets:"h1",
                width: '100%',                
                opacity:1,
                delay:300
            })


            anime({
                targets:".see .innercity",
                height:0,
                padding:20,
                sc:hidden,
                delay:1000
            }) 

            anime({
              targets:".see p,button",
              opacity:0,
              delay:1000
          })
            
        });
        
    }


    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
      });



      $("body").niceScroll();

    
   
})