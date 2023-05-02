document.addEventListener("DOMContentLoaded", () => {
  var data = [
    {
      text: "Overshadowing #UNGA is the big question: Will Obama and Rouhani meet?",
      href: "https://twitter.com/cnnbrk/status/382528782738800641",
    },
    {
      text: "Marine's family hopes visiting Iranian president will help free their son",
      href: "https://twitter.com/cnnbrk/status/382519683053649920",
    },
    {
      text: "Obama addresses United Nations.",
      href: "https://twitter.com/cnnbrk/status/382507500903202817",
    },
    {
      text: "",
      href: "https://twitter.com/CNNMoney/status/382497891723804672",
    },
    {
      text: "If you're seeing this as a button, congratulations!",
      href: "http://twitter.com",
    },
  ];

  for (var i = 0; i < data.length; i++) {
    if (data[i].text) {
      const pElement = document.createElement("p");
      const button = document.createElement("button");
      document.querySelector("#news").appendChild(pElement);
      pElement.appendChild(button);
      button.type = "button";
      button.classList.add(["btn", "btn-default"]);
      button.setAttribute("data-href", data[i].href);
      button.innerText = data[i].text;
    }
  }
  const buttons = [...document.querySelectorAll("button")];

  buttons.forEach((el) =>
    el.addEventListener("click", (evt) => {
      const ctrl = evt.target;
      if (ctrl.getAttribute("data-href")) {
        document.location = ctrl.getAttribute("data-href");
      }
    })
  );
});
