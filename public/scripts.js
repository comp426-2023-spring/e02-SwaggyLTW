// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver
let shot;
let opp;

function home(){
    document.getElementByName("home");
    for(let e of !document.getElementsByName("home")){
        e.style.display = none;
    }
}


async function playRpsOpp() {
    for(let x of document.getElementsByName('move')){
        if (x.checked == true) {shot = x.id}
    }
    const endpoint = "app/rps/play/" + shot + "/" + opp
    const url = document.baseURI+endpoint
    await fetch(url)
        .then(function(response) {
            return response.json();
       })
            .then(function(result) {
                document.getElementById("player").innerHTML = "your move: " + result.player;
                document.getElementById("opponent").innerHTML = "your opponent's move: " + result.opponent;
                document.getElementById("result").innerHTML = "this game's result: " + result.result;
            });
}
async function playRps() {
    for(let x of document.getElementsByName('move')){
        if (x.checked == true) {shot = x.id}
    }
    const end = "app/rps/play/" + shot
    const url = document.baseURI+end
    await fetch(url)
        .then(function(response) {
            return response.json();
       })
            .then(function(result) {
                document.getElementById("player").innerHTML = "your move: " + result.player;
                document.getElementById("opponent").innerHTML = "random move: " + result.opponent;
                document.getElementById("result").innerHTML = "this game's result: " + result.result;
            });
}
async function PlayRpslsOpp(){
    for(let x of document.getElementsByName('move')){
        if (x.checked == true) {shot = x.id}
    }

    const end = "app/rpsls/playopp/" + playMove + opp;
    const url = document.baseURI+end
    await fetch(url)
      .then(function(response) {
            return response.json();
        })
            .then(function(result) {
                document.getElementById("player").innerHTML = "your move: " + result.player;
                document.getElementById("opponent").innerHTML = "your opponent's move: " + result.opponent;
                document.getElementById("result").innerHTML = "this game's result: " + result.result;
            });
}

async function PlayRpsls(){
    const end = "app/rpsls/play/" + playMove;
    const url = document.baseURI+end;
    await fetch(url)
      .then(function(response) {
            return response.json();
        })
            .then(function(result) {
                document.getElementById("player").innerHTML = "your move: " + result.player;
                document.getElementById("opponent").innerHTML = "random move: " + result.opponent;
                document.getElementById("result").innerHTML = "this game's result: " + result.result;
            });
}

