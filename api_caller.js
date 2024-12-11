const selectElement = document.getElementById("select");
const form = document.getElementById("form");
const resultContainer = document.getElementById("result-container");
form.addEventListener("submit", (e) => {
    fetchRepo(e);
    e.preventDefault();
} );

async function fetchRepo(event) {
    try {
        resultContainer.innerHTML = "";
        resultContainer.innerHTML = `<h3> Loading... Please wait</h3>`;
        const option = event.target.elements.lang.value;
        const endPoint = "https://api.github.com/search/repositories?q=" + option;
        const rawResponse = await fetch(endPoint);
        if(!rawResponse.ok) {
            console.log("Error.....1")
            return;
        }
        const response = await rawResponse.json();
        const items = response.items;
        
        const data = items.map((item) => {
            return `<div class="card">
            <p><strong>FULL NAME:${item.full_name}</strong></p> 
            <p>DESCRIPTION:${item.description}</p>
            <p>FORK COUNTS:${item.forks_count}</p>
            <p>OPEN ISSUES:${item.open_issues}</p>
            <p>LIKES:${item.stargazers_count}</p>
            </div>`;
        }) .join("");
        resultContainer.innerHTML = data;
    
    } catch(error) {
        console.log("Error--2");
    }   
};


const budgets = [1,2,3,4,5];
const doubled = budgets.map((budget) => {
    return budget * 2;
});

console.log(doubled);