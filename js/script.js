// 简易搜索功能基础框架
const searchInput = document.querySelector(".search-box input");
if(searchInput){
    searchInput.addEventListener("keydown",function(e){
        if(e.key === 'Enter'){
            alert("搜索功能："+this.value);
        }
    })
}
