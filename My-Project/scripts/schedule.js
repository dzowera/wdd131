const destinations = JSON.parse(localStorage.getItem("destinations")) || [];


    function renderHTML() {
      let resultHTML = "";

      for (let i = 0; i < destinations.length; i++) {
        const { name, date } = destinations[i];
        const html = `<p>${name}</p><p>${date}</p><button onclick="deleteDestination(${i})" class="delete-button">Delete</button>`;
        resultHTML += html;
      }

      document.querySelector(".planned-schedule").innerHTML = resultHTML;
    }

    function addDestination() {
      const name = document.getElementById("textInput").value;
      const date = document.getElementById("dateInput").value;

      if (name !== "" && date !== "") {
        destinations.push({ name, date });
        localStorage.setItem("destinations", JSON.stringify(destinations));
        renderHTML();

        renderHTML();
      }

      document.getElementById("textInput").value = "";
      document.getElementById("dateInput").value = "";
    }

    function deleteDestination(index) {
      destinations.splice(index, 1);
      localStorage.setItem("destinations", JSON.stringify(destinations));
      renderHTML();
    }

    renderHTML();