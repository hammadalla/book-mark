var urlName = document.getElementById("inputName")
var urlLink = document.getElementById("inputUrl")
var alertName = document.getElementById("alertName")
var alertLink = document.getElementById("alertLink")
var list;
if(localStorage.getItem("list") != null){
   list =JSON.parse(localStorage.getItem("list")) 
   display()
}
else{
    list = []
}

function add(){
    if(validName() == true && validLink() == true){
        var link ={
            name:urlName.value,
            url:urlLink.value,
        }
        list.push(link)
        localStorage.setItem("list",JSON.stringify(list))
        display()
        clearform()
    }
}
function display(){
    var temp=""
    for(var i=0 ; i<list.length ; i++){
        temp += `<div class="d-flex py-5 links">
                    <h2 class="col-4"> `+ list[i].name +` </h2>
                    <div class="action">
                        <a href="http://`+list[i].url+`" class="btn btn-primary" target="_blank">Visit</a>
                        <button class="btn btn-danger ms-1" onclick="del(`+i+`)">Delete</button>
                    </div>
                </div>`
    }
    document.getElementById("myRow").innerHTML = temp
}
function del(index) {
    list.splice(index, 1)
    display()
    localStorage.setItem('list', JSON.stringify(list))
}
function clearform(){
    urlName.value = ""
    urlLink.value = ""
    urlName.classList.remove("is-valid")
    urlLink.classList.remove("is-valid")
}
urlName.addEventListener("blur" , validName )
function validName(){
    var reg =/^[a-zA-Z]{3,10}[0-9]?$/ 
    if(reg.test(urlName.value) == true){
        alertName.classList.replace("d-block","d-none")
        urlName.classList.add("is-valid")
        urlName.classList.remove("is-invalid")
        return true
    }
    else{
        alertName.classList.replace("d-none","d-block")
        urlName.classList.add("is-invalid")
        urlName.classList.remove("is-valid")
        return false
    }
}
urlLink.addEventListener("blur" , validLink )
function validLink(){
    var reg =/^[wW]{3}\.[a-zA-Z]{3,20}\.[a-zA-Z]{2,3}$/ 
    if(reg.test(urlLink.value) == true){
        alertLink.classList.replace("d-block","d-none")
        urlLink.classList.add("is-valid")
        urlLink.classList.remove("is-invalid")
        return true
    }
    else{
        alertLink.classList.replace("d-none","d-block")
        urlLink.classList.add("is-invalid")
        urlLink.classList.remove("is-valid")
        return false
    }
}
