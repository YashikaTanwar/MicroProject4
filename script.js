(function(){
    /*selecting every value */
    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let del=document.querySelector('.btn-del');
    let reset=document.querySelector('.btn-reset');
    let equal=document.querySelector('.btn-equal');
    
    /*to fetch values */
    buttons.forEach(function(element)
    {
        element.addEventListener('click',function(value)
        {
            let val=value.target.value;
            screen.value+=val;
        })
    })
    
    equal.addEventListener('click',function(value)
    {
        if(screen.value==='')
        {
            console.log('enter value');
        }
        else{
            let output=eval(screen.value);
            screen.value=output;
        }
    })
    reset.addEventListener('click',function()
    {
        screen.value='';
    })

    del.addEventListener('click',function(value)
    {
        screen.value=screen.value.slice(0,-1);
    })
})();