const buttonTurnOnOff = document.querySelector(".turn-on-off");

const lightBulb = document.querySelector(".light-bulb");

function isLightBulbBroken() {
  return lightBulb.src.indexOf("quebrada") > -1
};

function lightBulbOnOff(value, alt) {
  if (!isLightBulbBroken()) {
    lightBulb.src = `${value}`
    lightBulb.alt = `${alt}`
  }
};

function lightBulbStatus() {
  if (buttonTurnOnOff.textContent == "Ligar") {
    lightBulbOnOff("./img/ligada.jpeg", "Lâmpada ligada");

    buttonTurnOnOff.textContent = "Desligar";

  } else {
    lightBulbOnOff("./img/desligada.jpeg", "Lâmpada desligada");

    buttonTurnOnOff.textContent = "Ligar";
  }
};

buttonTurnOnOff.addEventListener("click", lightBulbStatus);

lightBulb.addEventListener("mouseover", () => {
  lightBulbOnOff("./img/ligada.jpeg", "Lâmpada ligada")
});

lightBulb.addEventListener("mouseleave", () => {
  lightBulbOnOff("./img/desligada.jpeg", "Lâmpada ligada")
});

lightBulb.addEventListener("dblclick", () => {
  lightBulbOnOff("./img/quebrada.jpeg", "Lâmpada quebrada")
});
