function login() {
    let username = $("#username").val()
    let password = $("#password").val()

    let user = {
        username: username,
        password: password
    }
    localStorage.setItem("account", username)
    let  flag = true ;
    $.ajax({
        headers: {
            "Content-Type": "application/json"
        },
        url: "http://localhost:8080/api/auth/login",
        type: "POST",
        data: JSON.stringify(user),

        success: function (data) {
            flag = false ;
            localStorage.setItem("role", data.authorities[0].authority);
            localStorage.setItem("token", data.token);
            window.location.href = "index.html" ;
            getAcc()
            localStorage.setItem("idUpdate","-1")
        }
    })
    if (flag){
        delayedFunction();
    }
}

function getAcc (){
    let acc = localStorage.getItem("acc");
    var settings = {
        "url": `http://localhost:8080/api/homes/findAcc/${acc}`,
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
    });
}

function logout () {
   localStorage.clear();
}
function dk() {
    window.location.href = "signin.html"
}

function delayedFunction() {
    setTimeout(function() {
        alert("Thông tin đăng nhập không chính xác");
    }, 2500); // 2000 milliseconds = 2 giây
}