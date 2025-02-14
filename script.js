const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

let table=document.querySelector("table");
	let prices=document.querySelectorAll(".price");
	let lastrow=document.createElement('tr')
	table.appendChild(lastrow);
	let cell1=lastrow.insertCell(0);
	let cell2=lastrow.insertCell(1);
	cell1.textContent="total";

const getSum = () => {
//Add your code here
	
	let total=0;
	prices.forEach(price => {
  total += parseFloat(price.textContent) || 0; 
});
	cell2.textContent = total.toFixed(2);
  
};

getSumBtn.addEventListener("click", getSum);

