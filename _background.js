/*
Amazon RDS:
Use the Chrome extension's background script to handle interactions with Amazon RDS. 
You may need to use a server-side component (e.g., a backend server) to securely interact with RDS due to potential security concerns.

Google Docs:
Implement logic to authenticate with the Google Drive API and fetch data from Google Docs.
*/

// Define the endpoint and credentials for your Amazon RDS instance
const rdsEndpoint = "ydkb-1.cremy6ma0s89.us-east-2.rds.amazonaws.com";
const dbUser = "ydkb_worker";
const dbPassword = "Go2XzMB2t7uGRm";
const dbName = "ydkb";

// API endpoint on your backend server to handle database queries
const apiEndpoint = "http://18.221.254.20:3306/api/query";

// Function to execute a query using the backend API
function executeQuery(query) {
  return fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
  .then(response => response.json());
}

// Example: Fetch data from Amazon RDS
function fetchDataFromRDS() {
  // const query = "SELECT p.lastName, p.`position`, p.fullname  as Team, ti.teamcolor1 , ti.teamcolor2 , ti.playingConditions FROM ydkb.PLAYERS p INNER JOIN TEAM_INFO ti on ti.fullName = p.fullname";
  const query = "SELECT p.FirstName, p.secondname";

  executeQuery(query)
    .then(data => {
      console.log("Data from Amazon RDS:", data);
      // Handle the retrieved data as needed
    })
    .catch(error => {
      console.error("Error fetching data from Amazon RDS:", error);
    });
}

// Example: Execute the function when the extension is clicked
chrome.browserAction.onClicked.addListener(function(tab) {
  fetchDataFromRDS();
});