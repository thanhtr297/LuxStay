let arr;
function displayAll() {
    let username = localStorage.getItem("account");
    $.ajax({
        url: "http://localhost:8080/api/users",
        type: "GET",
        success: function (data) {
            arr = data
            let content = `
<h2 style="text-align: center; color: rgba(175,16,16,0.8); margin: 20px 20px" >Thông tin cá nhân</h2>`
            content += `<table id="display-list" class="table table-striped" style="margin: 10px 10px"><tr>
                   
                        <th scope="col">Tên </th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Giới tính</th>
                        <th scope="col">Tuổi</th>
                        <th scope="col">Địa chỉ</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col" >Hành động</th>
                        </tr>`
            for (let i = 0; i < data.length; i++) {
                if(username === data[i].account.username) {
                content += `<tr>
                        <td scope="row">${data[i].fullName}</td>
                        <td scope="row"><img style="width: 100px; height: 100px" src="../src/main/resources/static/image/${data[i].avatar}" alt=""></td>
                        <td scope="row">${data[i].sex}</td>
                        <td scope="row">${data[i].age}</td>
                        <td scope="row">${data[i].address}</td>
                        <td scope="row">${data[i].phone}</td>
                        <td scope="row"><button style="margin-top: 12px" class="btn btn-info"  onclick="updateUser(${data[i].idUser})">Cập nhật</button></td>
                        </tr>`
            }
            content += `</table>`
            document.getElementById("users").innerHTML = content
        } }
    })
}
function updateUser(id) {
    $.ajax({
        url: `http://localhost:8080/api/users/${id}`,
        type: "GET",
        success: function (data) {
            document.getElementById("name").value = data.fullName
            document.getElementById("sex").value = data.sex
            document.getElementById("age").value = data.age
            document.getElementById("address").value = data.address
            document.getElementById("phone").value = data.phone
            localStorage.setItem("img", data.image)
            localStorage.setItem("idU", data.idUser)
            document.getElementById("form-user-update").style.display="block"
        }
    })
}

function save1() {
    let user
    let name = $("#name").val()
    let sex = $("#sex").val()
    let age = $("#age").val()
    let address = $("#address").val()
    let phone = $("#phone").val()
    let file = $("#file")[0].files[0]
    let id = +localStorage.getItem("idU")

    if (file === undefined) {
        file = new File([], "", undefined)
    }

    if (id !== -1) {
        user = {
            idUser: id,
            account : {
                id : id
            },
            fullName: name,
            sex: sex,
            age: age,
            address: address,
            phone: phone,
            avatar: localStorage.getItem("img")
        }
    } else {
        user = {
            fullName: name,
            sex: sex,
            age: age,
            address: address,
            phone: phone
        }
    }

    let formData = new FormData()
    formData.append("user",
        new Blob([JSON.stringify(user)], {type: 'application/json'}))
    formData.append("file", file)

    $.ajax({
        url: "http://localhost:8080/api/users",
        type: "POST",
        processData: false,
        contentType: false,
        data: formData,
        success: function () {
            alert("Cập nhật thành công!")
            displayAll()
            localStorage.setItem("idU", "-1")
            document.getElementById("form-user-update").style.display="none"
        }
    })
    document.getElementById("form").reset()
    event.preventDefault()
}