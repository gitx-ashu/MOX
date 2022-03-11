// Created by VEDANG

var state = false ;
var dark_mode = () =>{
     if (!state) enable_dark_mode();       
     else       disable_dark_mode();
     state=!state;
}
 /*
        
       MADE BY VEDANG 
       
 __   _____ ___   _   _  _  ___ 
 \ \ / / __|   \ /_\ | \| |/ __|
  \ V /| _|| |) / _ \| .` | (_ |
   \_/ |___|___/_/ \_\_|\_|\___|
                                

        
    */
function disable_dark_mode(){
    document.getElementById("dm").innerHTML=
    `
    body{
    background-position:  center center!important;
    background-repeat: no-repeat!important;
    background-size: cover!important;
    background-attachment: fixed!important;
    background-image:url("https://0xpl.000webhostapp.com/c.jpg")!important;
    }
    `;
   
}
function enable_dark_mode(){
   document.body.style.backgroundImage = "url(https://0xpl.000webhostapp.com/bck.jpg)"; document.getElementById("dm").innerHTML=
    `
    body{
        
    }
    main{
        background-color: transparent!important;
        color:#eee!important;
        border: 1px solid #eee;
        
    }
    .img{
    border-radius:500px;
    height:100px;
    width:100px;
    margin-top:5px;
    background-color:transparent!important;
    border: 4px solid transparent!important;
    
}
#desc{
    color:#ddd!important;
    font-size:10px;
    
}
button{
    border:none;
    padding:10px;
    background-color: #59adf7;
    color:#fff;
    margin:10px;
    border-radius: 3px;
    width:120px;
}
h1{
    margin:20px;
}
hr{
    border: 3px solid rgba(255,255,255,0.3)!important;
    width:200px;
    border-radius:500px;
}

    `;
}
// var Istate = false;
// function more(el){
//     if (!Istate) more_info(el);
//     else        less_info(el);
//     Istate = !Istate;
// }
// function more_info(el){
//     state =!state;
//     disable_dark_mode();
//     el.innerHTML =`
//     <table>
//     <tr>
//         <td style="text-align:left">
//           Followers:&nbsp;&nbsp; 
//         </td>
//         <td style="text-align:right">2.7k</td>
//     </tr>
//     <tr>
//          <td style="text-align:left">Badges:</td>
//          <td style="text-align:right">28</td>
//     </tr>
//       <tr>
//          <td style="text-align:left">Skills:</td>
//          <td style="text-align:right">13</td>
//     </tr>
      
//       </table>
//     `;
//     el.style.fontSize="14px";
// }
// function less_info(el){
// state =!state;
//     disable_dark_mode();
//     el.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt.";
//     el.style.fontSize="10px";
// }
function load(){
    setTimeout(
        () => {
          document.getElementById("ild").style.display="none";
          document.getElementById("mainA").style.display="block";
          show_modal();
        },5000
    );
}
function show_modal(){
   document.getElementById("main").style.filter="blur(5px)"; document.getElementById("modal").style.display="block";
}
function hide_modal(){
   document.getElementById("main").style.filter="blur(0px)"; document.getElementById("modal").style.display="none";
}