window.addEventListener("scroll",handle)
            function handle(){
                //这样写是为了兼容性
                //要获取当前的滚动条纵坐标位置，documentElement对应的是html标签
                //body对应的是body标签
                //IE及更早IE版本不支持,但可以使用document.documentElement.scrollTop
                var oTop = document.body.scrollTop||document.documentElement.scrollTop
                if(oTop>=200){
                    gotop.style.display = "block";
                }else{
                    gotop.style.display = "none";
                }

                gotop.onclick = function(){
                    window.scrollTo({
                        top:0,
                        behavior:"smooth"
                    })
                }
            }