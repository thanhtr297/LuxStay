function onch () {
    let sl = document.getElementById("mySelect").value ;

    switch (sl) {
        case "1" : displayByAdm();
        break ;
        case "2" : displayByRole(2)
        break ;
        case "3" : displayByRole(3)
        break ;
        // case "4" : displayByChange() ;
        // break ;
    }
}
// function displayByChange () {
//     var settings = {
//         "url": `http://localhost:8080/api/users/role/2`,
//         "method": "GET",
//         "timeout": 0,
//         "headers": {
//             "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZW5hIiwiaWF0IjoxNjk1ODc0ODcwLCJleHAiOjg4MDk1ODc0ODcwfQ.jr8kKgRG4vrnAzXuOASjnyn4WoA2qP98AqrdM94P4_Q"
//         },
//     };
//
//     $.ajax(settings).done(function (data) {
//         let flag = true ;
//             content = `<table>
//                         <tr>
//                         <th>Tên </th>
//                         <th colspan="2">Lựa Chọn </th>
//                         </tr>
// `
//         for (let i = 0; i < data.length ; i++) {
//             if(data[i].changeRole == 1) {
//                 flag = false ;
//                 content += `<tr>
//                                <td>${data[i].fullName}</td>
//                                <td>  <button onclick="allowAcc(${data[i].idUser})">Cho phép</button></td>
//                                <td>  <button onclick="refuseAcc(${data[i].idUser})">Từ Chối</button></td>
//                             </tr>`
//             }
//         }
//         content += `</table>`
//             document.getElementById("listUser").innerHTML = content
//
//
//         if(flag) {
//         content = `<p>Danh sách trống</p>`
//             document.getElementById("listUser").innerHTML = content
//         }
//     });
// }


function displayByRole (role) {
    var settings = {
        "url": `http://localhost:8080/api/users/role/${role}`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZW5hIiwiaWF0IjoxNjk1ODc0ODcwLCJleHAiOjg4MDk1ODc0ODcwfQ.jr8kKgRG4vrnAzXuOASjnyn4WoA2qP98AqrdM94P4_Q"
        },
    };

    $.ajax(settings).done(function (data) {
        if(data.length > 0) {

            content = `<table class="table table-striped" style="margin: 10px 10px"> <tr>
                        <th scope="col" >STT</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Ảnh</th>
                        <th scope="col">Tên Đăng Nhập</th>
                        <th scope="col">Quyền Hạn</th>
<!--                        // <th>Lựa chọn</th> -->
                        </tr>`;
            for (let i = 0; i < data.length; i++) {
                content += `<tr> 
                        <td scope="row"> ${i + 1} </td>
                        <td scope="row"> ${data[i].fullName} </td>
                        <td scope="row"><img style="width: 100px; height: 100px" src="../src/main/resources/static/image/${data[i].avatar}" alt=""></td>
                        <td scope="row"> ${data[i].account.username} </td>
                        <td scope="row"> ${data[i].account.roles[0].name} </td>
<!--                        <td>  <button id="status" onclick=""> </button> -->
                        </tr>`
            }
            content += `</table>`
            document.getElementById("listUser").innerHTML = content
        }else {
            content = `<p>Danh sách trống</p>`
            document.getElementById("listUser").innerHTML = content
        }


    });
}
function displayByAdm () {
    var settings = {
        "url": `http://localhost:8080/api/users/roleAdm`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZW5hIiwiaWF0IjoxNjk1ODc0ODcwLCJleHAiOjg4MDk1ODc0ODcwfQ.jr8kKgRG4vrnAzXuOASjnyn4WoA2qP98AqrdM94P4_Q"
        },
    };

    $.ajax(settings).done(function (data) {
        content = `<table class="table table-striped" style="margin: 10px 10px"> <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Ảnh</th>
                        <th scope="col">Tên Đăng Nhập</th>
                        <th scope="col">Quyền Hạn</th>
<!--                        // <th>Lựa chọn</th> -->
                        </tr>` ;
        for (let i = 0; i < data.length ; i++) {
            content += `<tr> 
                        <td scope="row"> ${i + 1} </td>
                        <td scope="row"> ${data[i].fullName} </td>
                        <td scope="row"><img style="width: 100px; height: 100px" src="../src/main/resources/static/image/${data[i].avatar}" alt=""></td>
                        <td scope="row"> ${data[i].account.username} </td>
                        <td scope="row"> ${data[i].account.roles[0].name} </td>
<!--                        <td>  <button id="status" onclick=""> </button> -->
                        </tr>`
        }
        content += `</table>`
        document.getElementById("listUser").innerHTML = content
    });
}


// function allowAcc (id) {
//    let acc = {
//        id : id ,
//        roles : {
//            id : 3
//        }
//    }
//     let formData = new FormData()
//     formData.append("user",
//         new Blob([JSON.stringify(acc)], {type: 'application/json'}))
//
//     $.ajax({
//         url: "http://localhost:8080/api/users/allow",
//         type: "POST",
//         processData: false,
//         contentType: false,
//         data: formData,
//         success: function () {
//         }
//     })
// }
// function refuseAcc (id) {
//     let user = {
//         idUser : id ,
//         changeRole : 0
//     }
//     let formData = new FormData()
//     formData.append("user",
//         new Blob([JSON.stringify(user)], {type: 'application/json'}))
//
//     $.ajax({
//         url: "http://localhost:8080/api/users",
//         type: "POST",
//         processData: false,
//         contentType: false,
//         data: formData,
//         success: function () {
//         }
//     })
// }
