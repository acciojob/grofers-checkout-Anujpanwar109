const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


let prices = document.querySelectorAll(".price");


// Create a div with the id 'ans' to display the total
let ansDiv = document.createElement("div");
ansDiv.id = "ans";  // Set the ID
document.body.appendChild(ansDiv);

const getSum = () => {
  let total = 0;
  prices.forEach(price => {
    total += parseFloat(price.textContent) || 0;
  });

  // Display the total in the 'ans' div
  ansDiv.textContent = `Total: Rs ${total.toFixed(2)}`;
};

getSumBtn.addEventListener("click", getSum);
