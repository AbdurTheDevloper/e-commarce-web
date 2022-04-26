const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('.navbar');

navBar.style.right = '-999px';


menuIcon.onclick= function(){
  
    if(navBar.style.right == '-999px'){
           navBar.style.right = '0';
    }else{
        navBar.style.right = '-999px'
    }
}
