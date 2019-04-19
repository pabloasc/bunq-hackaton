var myTableDiv = document.getElementById("transactions")
var table = document.createElement('TABLE')
    
table.setAttribute("border", "1");
table.setAttribute("width", "100%");

function closeButton() {
  var lala = document.getElementById("popup");
  lala.className = "hidden";
}

var timeoutTime = 2000;
document.getElementById('Header').addEventListener('click', () => {
    timeoutTime = 100000;
});

fetch('http://d20977b4.ngrok.io/user/transactions')
  .then(response => {
    return response.json()
  })
  .then(stock => {

    for (i = 0; i < stock.length; i++) {
        parsedStock = JSON.parse(stock[i]);
        if (i === 0) {
          var currentBalance = parsedStock.balance_after_mutation.value;
          document.getElementById('current-amount').innerHTML = "Current Amount: " + currentBalance;
        }

        if (i > 0) {
            parsedStockPrev = JSON.parse(stock[i-1]);
        }

        var tr = document.createElement('tr');
        tr.className = "mdl-card--border";
        var td0 = document.createElement('td');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var icon = document.createElement('img');
        if (parsedStock.counterparty_alias.name === "Albert Heijn" || parsedStock.counterparty_alias.name === "Test") {
            icon.setAttribute('src', 'images/ah.png');
        } else if (parsedStock.counterparty_alias.name === "Bunq Hackathon 2.0 Prize") {
            icon.setAttribute('src', 'images/bunq.png');
        } else {
            icon.setAttribute('src', 'images/transaction.png');
        }
        icon.setAttribute('width', 80);
        td0.setAttribute('width', 80);

        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        td0.appendChild(icon);
        td1.appendChild(document.createTextNode(parsedStock.counterparty_alias.name));
        td1.className = "alias";
        td2.appendChild(document.createTextNode(parsedStock.created.substr(0, 16)));
        td2.className = "date";
        
        var textAmount = parsedStock.amount.currency + " " + parsedStock.amount.value;
        
        if (i > 0) {
            if (parsedStockPrev.counterparty_alias.name === "Veronika" || parsedStockPrev.counterparty_alias.name === "Tom") {
                textAmount = textAmount + "<span class='donation'> (" + parsedStockPrev.amount.currency + " " + parsedStockPrev.amount.value + ") to <img src='images/dieren.png' alt='DierenLot' width='30'></span>";
            }
        }
        
        td3.innerHTML = textAmount;
        td3.className = (parsedStock.amount.value > 0) ? "amount_positive" : "amount_negative";
        
        if (parsedStock.counterparty_alias.name !== "Veronika" && parsedStock.counterparty_alias.name !== "Tom") {
            table.appendChild(tr);
        }
    }
    setTimeout(function(){ 
      var lala1 = document.getElementById("popup");
      lala1.className = "message is-info";
    }, timeoutTime);
    myTableDiv.appendChild(table);
    console.log(data)
  })
  .catch(err => {
    // Do something for an error here
  })



//TABLE ROWS
