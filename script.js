gsap.from(" #nav",{
    delay:0.5,
    opacity:0,
    duration:1,
    y:-55
  })
 
 
 
  gsap.from("#page1 #part2 .four h4",{
    delay:2,
    opacity:0,
    duration:1,
    x:-150
})
gsap.from(" #page1 #part3",{
    delay:0.5,
    opacity:0,
    duration:1,
    rotate:-15,
    y:150
})
gsap.from("#cry h1,#cry2 h1",{
    delay:1,
    opacity:0,
    duration:0.4,
    stagger:0.1,
    y:180

  })

  gsap.from("#page2 #center ",{
    width:40,
    opacity:0,
     duration:1,
    //  delay:0.5,

     scrollTrigger:{
         trigger:"#page2 ",
         scroller:"body",
         // markers:true,
         start:"top 70%",
         end :"bottom 10%",
         
       
     } })
gsap.from("#page2 #left",{
    // width:40,
    opacity:0,
     duration:0.5,
     delay:1,
     y:100,
     scrollTrigger:{
         trigger:"#page2 #left",
         scroller:"body",
         // markers:true,
         start:"top 70%",
         end :"bottom 10%",
         
       
     } })
  
gsap.from("#page2 #right",{
    opacity:0,
     duration:0.5,
     delay:1,
     y:100,
     scrollTrigger:{
         trigger:"#page2 #right",
         scroller:"body",
         // markers:true,
         start:"top 70%",
         end :"bottom 10%",
       
     } })
     
gsap.from("#page3 #part1",{
    opacity:0,
     duration:1.5,
    //  delay:1,
     y:150,
     scrollTrigger:{
         trigger:"#page3 #part1",
         scroller:"body",
         // markers:true,
         start:"top 70%",
         end :"bottom 10%",
       
     } })
     
gsap.from("#page3 #part2",{
    opacity:0,
     duration:1.5,
    //  delay:1,
     y:150,
     scrollTrigger:{
         trigger:"#page3 #part2",
         scroller:"body",
         // markers:true,
         start:"top 70%",
         end :"bottom 10%",
       
     } })
         
gsap.from("#page4 img",{
    opacity:0,
     duration:1,
     rotate:-120,
     delay:1,
     scale:1.5,
     
     scrollTrigger:{
         trigger:"#page4 img",
         scroller:"body",
         // markers:true,
         start:"top 70%",
         end :"bottom 10%",
         scrub:1,
     } })
            
gsap.from("#page4 #bg",{
    opacity:0,
     duration:0.5,
     delay:1,
     scale:1.3,
     
     scrollTrigger:{
         trigger:"#page4 #bg ",
         scroller:"body",
         // markers:true,
         start:"top 70%",
         end :"bottom 10%",
         scrub:1,
     } })
     