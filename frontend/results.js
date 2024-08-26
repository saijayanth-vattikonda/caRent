const searchForm = document.getElementById("search-cars");
searchForm.addEventListener("submit", getData);

// Function to fetch data from the API
async function getData(event) {
  const location = document.getElementById("citySelect").value;

  console.log(location);
  event.preventDefault();
  const result = await fetch("https://carent-api.vercel.app/car/getData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      location,
    }),
  });

  if (result.ok) {
    try {
      // Parse the response as JSON
      const responseData = await result.json();

      const cardContainer = document.getElementById("cardContainer");
      cardContainer.innerHTML = "";

      // Check if responseData is an object containing an array
      if (Array.isArray(responseData.data)) {
        // Iterate over the array of cars
        responseData.data.forEach((car) => {
          // Log each car
          console.log(car);
          // Create card for each car
          const card = createCard(car);
          document.getElementById("cardContainer").appendChild(card);
        });
      } else {
        console.error("Error: Data received is not in the expected format");
      }
    } catch (error) {
      console.error("Error parsing JSON data:", error);
    }
  } else {
    console.error("Error fetching data:", result.statusText);
  }
}

// Function to create a card element
function createCard(carData) {
  const card = document.createElement("div");
  card.classList.add("col");

  card.innerHTML = `
            <div class="card h-100 m-3">
                <img src="${carData.image}" class="card-img-top" alt="image">
                <div class="card-body">
                    <h5 class="card-title">${carData.name}</h5>
                    <p class="card-text">${carData.description}</p>
                    <div class="container text-center">
                        <div class="row">
                            <div  class="col">
                                ${carData.transmission}
                            </div>
                            <div class="col">
                                ${carData.fuel}
                            </div>
                            <div class="col">
                                ${carData.model}
                            </div>
                        </div>
                    </div>
                    <br>
                    <h2>&#8377;${carData.price}</h2>
                    <a href="#" class="btn btn-primary btn-lg result-btn"
                        style="position: absolute; bottom: 50px; right: 50px; padding-top: 7px; padding-bottom: 4px;"
                        data-bs-toggle="modal" data-bs-target="#${carData._id}">Book
                        Now</a>
                </div>
            </div>
            
            <div class="modal fade" id="${carData._id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="background-color:#001233;">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${carData.name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src="${carData.image}" class="card-img-top" alt="samplecar">
                        <p class="card-text">Have Great Time Driving!!!</p>
                        <div class="container text-center">
                            <div class="row">
                                <div  class="col">
                                    ${carData.transmission}
                                </div>
                                <div class="col">
                                    ${carData.fuel}
                                </div>
                                <div class="col">
                                    ${carData.model}
                                </div>
                        </div>
                        </div>
                    </div>
                    
                    <div class="modal-footer">
                        <form id="confirm-car">
                            <h2 style="position: absolute; left: 20px; bottom: 10px;">&#8377;${carData.price}</h2>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <input type="submit" class="btn btn-primary" value="Confirm" data-bs-dismiss="modal">
                        </form>
                    </div>

                </div>
            </div>
        </div>  



        `;

  return card;
}

// const confirmCar = document.getElementById("confirm-car");
// confirmCar.addEventListener("submit", confirmCarBtn);

// async function confirmCarBtn(event) {
//   event.preventDefault();

// }
