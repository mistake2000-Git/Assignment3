const filterAction=document.querySelectorAll(".action")
Array.from(filterAction).forEach(function(element){
    element.addEventListener('click',function(event){
        for(let i=0;i<filterAction.length;i++)
        {
            filterAction[i].classList.remove('active');
        }
        this.classList.add('active');
    })
})