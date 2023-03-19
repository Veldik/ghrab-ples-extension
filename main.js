console.log("ghrab-ples - načteno");

let totalTotalCount = 0;
let totalFreeCount = 0;
let totalCheckedCount = 0;
let totalUnsoldTablesCount = 0;
let totalSoldTablesCount = 0;

document.querySelectorAll('div#wall button.btn.btn-info').forEach(button => {
    var modalId = button.getAttribute('data-target');
    var label = document.createElement('label');
    var modal = document.querySelector(modalId);
     
      var freeCount = modal.querySelectorAll('input[type="checkbox"]').length;
      let checkedCount = modal.querySelectorAll('button[class="btn btn-danger"]').length;
      let totalCount = checkedCount + freeCount;
      var labelText = checkedCount + '/' + totalCount;
      label.innerText = labelText;

      totalUnsoldTablesCount++;
      totalCheckedCount += checkedCount;
      totalTotalCount += totalCount;
      totalFreeCount += freeCount; 

    label.style.fontSize = "15px";
    label.style.backgroundColor = "#ebcd38";
    label.style.borderRadius = "4px"
    label.style.display = "block";
    label.style.fontWeight = "bold";
    button.appendChild(label);
});

document.querySelectorAll('div#wall button.btn.btn-danger').forEach(button => {
    if (button.textContent.includes("Stůl")) totalSoldTablesCount++;
});

let info = document.querySelector("body > h1");

let summary = [
    `${totalSoldTablesCount} - počet prodaných stolů`,
    `${totalUnsoldTablesCount} - počet neprodaných stolů`,
    `${totalFreeCount} - počet volných míst`,
    `${totalCheckedCount} - počet prodaných míst (nepočítají se prodané stoly)`,
    `${totalTotalCount} - celkový počet míst (nepočítají se prodané stoly)`,
]

summary.forEach(infoText => {
    let infolabel = document.createElement('label');
    infolabel.innerText = infoText;
    infolabel.style.fontSize = "15px";
    infolabel.style.display = "block";
    infolabel.style.marginBottom = 0;
    info.appendChild(infolabel);

    console.log(infoText);
})