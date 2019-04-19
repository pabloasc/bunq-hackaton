var myTableDiv = document.getElementById("donations")
var table = document.createElement('table')
    
table.setAttribute("border", "1");
table.setAttribute("width", "100%");

fetch('http://d20977b4.ngrok.io/user/donations/total'
  ).then(response => {
    return response.json()
  })
  .then(stock => {
    
    var tr = document.createElement('tr');
    tr.className = "mdl-card--border";
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var icon = document.createElement('img');
    icon.setAttribute('src', 'images/dieren.png');
    icon.setAttribute('width', 80);
    td0.setAttribute('width', 80);

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    
    td0.appendChild(icon);
    td1.innerHTML = "<span style='line-height: 80px;'><b>DierenLot</b><span>";
    td2.innerHTML = "Total Donations: EUR " + stock + "<br><br>" + "Donations this month: EUR "+ stock;
    table.appendChild(tr);
    
    
    myTableDiv.appendChild(table);
  })
  .catch(err => {
    // Do something for an error here
  })



//TABLE ROWS
