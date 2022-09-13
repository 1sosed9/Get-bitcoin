let h1 = document.querySelector(".h1");
h1.innerHTML = "You can buy bitcoin!";
setTimeout(function () {
  const bitcoinPrise = prompt("What is Bitcoin price today?");
  const haveDolдars = prompt("How much $ do you have?");
  alert(`You can buy ${haveDolдars / bitcoinPrise} BTC`);
  h1.style.color = "blue";
  h1.style.textAlign = "center";
  h1.innerHTML = "You will be successful!!!";
}, 1000);
