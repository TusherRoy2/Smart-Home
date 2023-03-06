window.addEventListener('load', function() {
    this.setTimeout(
        function open(even) {
            document.querySelector('#subs-page').style.display = "block";
        },
        9000
    )
});

document.querySelector(".fa-times").addEventListener("click", function(){
    document.querySelector("#subs-page").style.display = "none";
});

function validation (){
    let fn = document.querySelector('#fn')
    
    if (fn.value.trim() == '') {
        return false;
    }

    let ln = document.querySelector('#ln')

    if (ln.value.trim() == '') {
        return false;
    }

    let mail = document.querySelector('#mail')

    if (mail.value.trim() == '') {
        return false;
    }

    let pass = document.querySelector('#pass')

    if (pass.value.trim() == '') {
        return false;
    }
}