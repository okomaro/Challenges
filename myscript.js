function storeData() {
    let inputFname = document.getElementById('fname');
    let inputLname = document.getElementById('lname');
    localStorage.setItem("fname", inputFname.value);
    localStorage.setItem("lname", inputLname.value);

}



// function incAttempts() {
//     let attempts = localStorage.attempts

//     if (attempts !== undefined) {
//         attempts++
//     } else {
//         attempts = 1
//     }
// }


function winAdd(id) {
    if (id === 'dog') {

        let n = localStorage.getItem('wins_dogs');


        if (n === undefined) {
            n = 0;
        }
        n++;
        localStorage.setItem('wins_dogs', n);
    } else if (id === 'bird') {
        let n = localStorage.getItem('wins_birds');

        if (n === undefined) {
            n = 0;
        }
        n++;
        localStorage.setItem('wins_birds', n);
    }

}

function addLoss(id) {
    if (id === 'dog') {

        let n = localStorage.getItem('loss_dogs');

        if (n === undefined) {
            localStorage.setItem('loss_dogs', 0);
        }
        n++;
        localStorage.setItem('loss_dogs', n);

    } else if (id === 'bird') {
        let n = localStorage.getItem('loss_birds');

        if (n === undefined) {
            localStorage.setItem('loss_birds', 0);
        }
        n++;

        localStorage.setItem('loss_birds', n);
    }

}

function tryAdd(id) {
    if (id === 'dog') {

        let n = localStorage.getItem('try_dogs');
        if (n === undefined) {
            localStorage.setItem('try_dogs', 0);
        }
        n++;
        localStorage.setItem('try_dogs', n);
    } else if (id === 'bird') {
        let n = localStorage.getItem('try_birds');

        if (n === undefined) {
            localStorage.setItem('try__birds', 0);
        }
        n++;
        localStorage.setItem('try_birds', n);
    }

}

function callTheUser() {
    if (localStorage.fname != null) {
        document.getElementById("greetings").innerHTML =
            "Hello, " + localStorage.fname + " " + localStorage.lname + "!";
    }
}

function check_answer(id) {
    if (id == "btn3") {
        location.href = "/page2.html";
    } else {
        location.href = "/looser.html";
    }
}

function startAgain() {
    location.href = "quiz.html";
}

function resetResults() {
    let keys = ['wins_dogs', 'wins_birds', 'try_birds', 'try_dogs', 'loss_dogs', 'loss_birds'];
    keys.forEach(element => {
        localStorage.setItem(element, 0);
    });
    startAgain();
}

function logOut() {
    localStorage.clear();
    location.href = "index.html";
}