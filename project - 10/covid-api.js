const apiURL = "https://api.rootnet.in/covid19-in/stats/history";

function fetchCovidData() {
    return fetch(apiURL)
        .then(response => response.json())
        .then(data => data.data)
        .catch(error => {
            console.error("Error fetching data:", error);
            return [];
        });
}

function searchData() {
    const searchDateInput = document.getElementById("searchDate");
    const searchDate = searchDateInput.value;

    if (!searchDate) {
        alert("Please select a date!");
        return;
    }

    fetchCovidData().then(historyData => {
        const result = historyData.find(day => day.day === searchDate);
        
        if (result) {
            document.getElementById("date").innerText = result.day;
            document.getElementById("cases").innerText = result.summary.total;
            document.getElementById("deaths").innerText = result.summary.deaths;
            document.getElementById("recovered").innerText = result.summary.discharged;

            let stateTable = document.getElementById("stateData");
            stateTable.innerHTML = '';

            result.regional.forEach(state => {
                let row = `<tr>
                    <td>${state.loc}</td>
                    <td>${state.totalConfirmed}</td>
                    <td>${state.deaths}</td>
                    <td>${state.discharged}</td>
                </tr>`;
                stateTable.innerHTML += row;
            });

            searchDateInput.value = "";
        } else {
            alert("No data found!");
        }
    });
}