
var users = [];
var DOM = document.getElementById("main")

function getuser() {
    $.ajax({
        method: "GET",
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function (response) {
            users.push(response)
            //console.log(users)
            draw(users);

        },
        error: function (error) {
            //console.log(error)
        }
    })
}



function draw(users) {
    DOM.innerHTML = "";
    for (let index = 0; index < users.length; index++) {
        id = index
        DOM.appendChild(UserCard(users[index], index));
      
    }
}


function UserCard(singleUser, index) {

    var card = document.getElementsByName("template")[document.getElementsByName("template").length - 1].cloneNode(true);
    card.id = index;

    //u need to fix this in order to del from the array as well
    card.style.display = "inline-block";
    card.querySelector("#img").src = singleUser.results[0].picture.large;
    card.querySelector("#name").innerHTML = singleUser.results[0].name.first;
    card.querySelector("#gender").innerHTML = singleUser.results[0].gender;
    card.querySelector("#age").innerHTML = singleUser.results[0].phone;
    card.querySelector("#email").innerHTML = singleUser.results[0].email;

    return card;
}

console.log(users)
function del() {
    
    users.splice(id, 1);
    //delete last one insead of the plade 
    console.log(users)
    draw(users)
}

function edit(card) {
    //console.log(card)
    newid = this.id
    var name = prompt("enter new name:", "")
    var email = prompt("enter new email:", "")
    card.querySelector("#name").innerHTML = name;
    card.querySelector("#email").innerHTML = email;
    // users[card.id].name.first = name
    // users[card.id].email = email
    update(newid, card.querySelector("#name").innerHTML, card.querySelector("#email").innerHTML)
    //console.log(users)
}


function update(newid, name, email) {
    users[newid].results[0].name.first = name
    users[newid].results[0].email = email
    //console.log(users)
}
