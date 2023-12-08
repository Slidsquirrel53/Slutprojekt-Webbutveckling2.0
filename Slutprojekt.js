// Assuming you have a JSON file named "data.json"

// Function to fetch and parse JSON file
async function fetchData() {
  try {
    // Fetch the JSON file
    const response = await fetch('https://raw.githubusercontent.com/Slidsquirrel53/Slutprojekt-Webbutveckling2.0/main/Products.json');

    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    // Parse the JSON data
    const data = await response.json();

    // Assuming the JSON file contains an array, you can store it in a variable
    const dataArray = data;

    // Now you can use the 'dataArray' variable with the array from the JSON file
    console.log(dataArray);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the fetchData function
fetchData();

const template = document.querySelector("#productCard") ;
const wrapper = document.createElement("div");

products.forEach(product => {
	const clone = template.content.cloneNode(true);
	
	wrapper.appendChild(clone);

})

document.querySelector(".products").appendChild(wrapper);