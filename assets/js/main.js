
let openCartSidebarBtn = document.querySelector('.cart-sidebar .short-icon');
let cartSidebar = document.querySelector('.cart-sidebar .cart-slide');
if(openCartSidebarBtn){
    openCartSidebarBtn.addEventListener('click',function(){
        cartSidebar.classList.add('show');
    });
}
let closeCartSidebarBtn = document.querySelector('.cart-sidebar .cart-slide .slide-close-btn');
let closeCartSidebarBtn1 = document.querySelector('.cart-sidebar .head ._r');
if(closeCartSidebarBtn){
    closeCartSidebarBtn.addEventListener('click',function(){
        cartSidebar.classList.remove('show');
    });
}
if(closeCartSidebarBtn1){
    closeCartSidebarBtn1.addEventListener('click',function(){
        cartSidebar.classList.remove('show');
    });
}



// ================= User Options/Setting ===================
let friend_option_btn = document.querySelector('.content-right .my-action .info span .open_btn');
let friend_option_div = document.querySelector('.content-right .my-action .options');
if(friend_option_btn && friend_option_div){
    window.addEventListener('mouseup',function(event){
        if(friend_option_btn == event.target){
            friend_option_div.classList.toggle('show');
        }else{
            if(event.target != friend_option_div && event.target.parentNode != friend_option_div){
                friend_option_div.classList.remove("show");
            }
        }
    }); 
}


// ================= User Options/Setting ===================
let chat_message_open_btn = document.querySelector('.chat-message .icon .open_btn');
let chat_minimize_btn = document.querySelector('.chat-message .content-box .minimize i');
let chat_message_div = document.querySelector('.chat-message .content-box');
let chat_message_divhead = document.querySelector('.chat-message .content-box .head');
if(chat_message_open_btn && chat_message_div){
    window.addEventListener('mouseup',function(event){
        if(chat_message_open_btn == event.target){
            chat_message_div.classList.toggle('show');
        }
        // else{
        //     if(event.target != chat_message_div && event.target.parentNode != chat_message_divhead){
        //         chat_message_div.classList.remove("show");
        //     }
        // }
    }); 
}
if(chat_minimize_btn && chat_message_div){
    chat_minimize_btn.addEventListener('mouseup',function(){
        chat_message_div.classList.remove("show");
    }); 
}