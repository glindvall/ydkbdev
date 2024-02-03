

// console.log("Java script started!")

    function displayImage() {
        
        var selectBox     = document.getElementById("team1-select");
        var selectedValue = selectBox.value;
        var userTeam      = document.getElementById("user-image");
        var week17        = document.getElementById("week17-image");
        var week16        = document.getElementById("week16-image");
        var week15        = document.getElementById("week15-image");
        var weekTxt       = document.getElementById('playoff-image-text');
        var weekTxt2      = document.getElementById('playoff-image-text2');
        var weekTxt3      = document.getElementById('playoff-image-text3');
        var playoffTitle  = document.getElementById('playoff-title-text');
        var playerTitle   = document.getElementById('player-title-text');

        console.log("User Selected:", selectedValue);

        weekTxt.style.display       = "block";
        weekTxt2.style.display      = "block";
        weekTxt3.style.display      = "block";
        playoffTitle.style.display  = "block";
        playerTitle.style.display   = "block";

        // Get Team Image
        var imageSources = {
            "none": "images/NFL.webp",
            "ARI":  "images/ARI.webp",
            "ATL":  "images/ATL.webp",
            "BAL":  "images/BAL.webp",
            "BUF":  "images/BUF.webp",
            "CAR":  "images/CAR.webp",
            "CHI":  "images/CHI.webp",
            "CIN":  "images/CIN.webp",
            "CLE":  "images/CLE.webp",
            "DAL":  "images/DAL.webp",
            "DEN":  "images/DEN.webp",
            "DET":  "images/DET.webp",
            "GB":   "images/GB.webp",
            "HOU":  "images/HOU.webp",
            "IND":  "images/IND.webp",
            "JAX":  "images/JAX.webp",
            "KC":   "images/KC.webp",
            "LAC":  "images/LAC.webp",
            "LAR":  "images/LAR.webp",
            "LV":   "images/LV.webp",
            "MIA":  "images/MIA.webp",
            "MIN":  "images/MIN.webp",
            "NE":   "images/NE.webp",
            "NO":   "images/NO.webp",
            "NYG":  "images/NYG.webp",
            "NYJ":  "images/NYJ.webp",
            "PHI":  "images/PHI.webp",
            "PIT":  "images/PIT.webp",
            "SEA":  "images/SEA.webp",
            "SF":   "images/SF.webp",
            "TB":   "images/TB.webp",
            "TEN":  "images/TEN.webp",
            "WSH":  "images/WSH.webp"
        };

        if (selectedValue !== "none") {
          userTeam.src = imageSources[selectedValue];
          userTeam.style.display = "block";
        } else {
          userTeam.src = ""; 
          userTeam.style.display = "none";
        }

        // Get Week 17 Image
        var imageSources = {
        "none": "images/NFL.webp",
        "ARI":  "images/PHI.webp",
        "ATL":  "images/CHI.webp",
        "BAL":  "images/MIA.webp",
        "BUF":  "images/NE.webp",
        "CAR":  "images/JAX.webp",
        "CHI":  "images/ATL.webp",
        "CIN":  "images/KC.webp",
        "CLE":  "images/NYJ.webp",
        "DAL":  "images/DET.webp",
        "DEN":  "images/LAC.webp",
        "DET":  "images/DAL.webp",
        "GB":   "images/MIN.webp",
        "HOU":  "images/TEN.webp",
        "IND":  "images/LV.webp",
        "JAX":  "images/CAR.webp",
        "KC":   "images/CIN.webp",
        "LAC":  "images/IND.webp",
        "LAR":  "images/NYG.webp",
        "LV":   "images/DEN.webp",
        "MIA":  "images/BAL.webp",
        "MIN":  "images/GB.webp",
        "NE":   "images/BUF.webp",
        "NO":   "images/TB.webp",
        "NYG":  "images/LAR.webp",
        "NYJ":  "images/CLE.webp",
        "PHI":  "images/ARI.webp",
        "PIT":  "images/SEA.webp",
        "SEA":  "images/PIT.webp",
        "SF":   "images/WSH.webp",
        "TB":   "images/NO.webp",
        "TEN":  "images/HOU.webp",
        "WSH":  "images/SF.webp"
          };

        if (selectedValue !== "none") {
          week17.src = imageSources[selectedValue];
          week17.style.display = "block";
        } else {
          week17.src = ""; 
          week17.style.display = "none";
        }

        // Get Week 16 Image
        var imageSources = {
            "none": "images/NFL.webp",
            "ARI":  "images/CHI.webp",
            "ATL":  "images/IND.webp",
            "BAL":  "images/SF.webp",
            "BUF":  "images/LAC.webp",
            "CAR":  "images/GB.webp",
            "CHI":  "images/ARI.webp",
            "CIN":  "images/PIT.webp",
            "CLE":  "images/HOU.webp",
            "DAL":  "images/MIA.webp",
            "DEN":  "images/NE.webp",
            "DET":  "images/MIN.webp",
            "GB":   "images/CAR.webp",
            "HOU":  "images/CLE.webp",
            "IND":  "images/ATL.webp",
            "JAX":  "images/TB.webp",
            "KC":   "images/LV.webp",
            "LAC":  "images/BUF.webp",
            "LAR":  "images/DAL.webp",
            "LV":   "images/DET.webp",
            "MIA":  "images/DEN.webp",
            "MIN":  "images/DET.webp",
            "NE":   "images/PHI.webp",
            "NO":   "images/WSH.webp",
            "NYG":  "images/NYG.webp",
            "NYJ":  "images/CIN.webp",
            "PHI":  "images/BAL.webp",
            "PIT":  "images/TEN.webp",
            "SEA":  "images/JAX.webp",
            "SF":   "images/BAL.webp",
            "TB":   "images/JAX.webp",
            "TEN":  "images/SEA.webp",
            "WSH":  "images/NYJ.webp"
          };

        if (selectedValue !== "none") {
          week16.src = imageSources[selectedValue];
          week16.style.display = "block"; 
        } else {
          week16.src = ""; 
          week16.style.display = "none"; 
        }
        
        // Get Week 15 Image
        var imageSources = {
              "none": "images/NFL.webp",
              "ARI":  "images/SF.webp",
              "ATL":  "images/CAR.webp",
              "BAL":  "images/JAX.webp",
              "BUF":  "images/DAL.webp",
              "CAR":  "images/ATL.webp",
              "CHI":  "images/CLE.webp",
              "CIN":  "images/MIN.webp",
              "CLE":  "images/CHI.webp",
              "DAL":  "images/BUF.webp",
              "DEN":  "images/DET.webp",
              "DET":  "images/DEN.webp",
              "GB":   "images/TB.webp",
              "HOU":  "images/TEN.webp",
              "IND":  "images/PIT.webp",
              "JAX":  "images/BAL.webp",
              "KC":   "images/NE.webp",
              "LAC":  "images/LV.webp",
              "LAR":  "images/WSH.webp",
              "LV":   "images/LAC.webp",
              "MIA":  "images/NYG.webp",
              "MIN":  "images/CIN.webp",
              "NE":   "images/KC.webp",
              "NO":   "images/NYG.webp",
              "NYG":  "images/NO.webp",
              "NYJ":  "images/SEA.webp",
              "PHI":  "images/IND.webp",
              "PIT":  "images/ARI.webp",
              "SEA":  "images/PHI.webp",
              "SF":   "images/ARI.webp",
              "TB":   "images/GB.webp",
              "TEN":  "images/HOU.webp",
              "WSH":  "images/LAR.webp"
          };
        
          if (selectedValue !== "none") {
            week15.src = imageSources[selectedValue];
            week15.style.display = "block";
          } else {
            week15.src = ""; 
            week15.style.display = "none";
          }

          // Reload Players???  Reload players!
          fetchPlayerData();
    
    }




    // Build Player Footer Data
    document.getElementById('team1-select').addEventListener('click', fetchPlayerData);
    
    function fetchPlayerData() {
        
        const dropdownValue = document.getElementById('team1-select').value;
        const runSpecialQuery = document.getElementById('showall').checked;

        console.log(runSpecialQuery);


      if (runSpecialQuery) {
        queryToSend = 
          `SELECT 
            *
          FROM PLAYERS P 
          INNER JOIN TEAMS T ON T.fullName = P.teamName 
          INNER JOIN SCHEDULE S ON S.Team = T.abbrv 
          INNER JOIN POSITIONS PO ON PO.Position = P.slotName 
          LIMIT 200`;
      } 
      else {
        queryToSend = ` SELECT *
        FROM PLAYERS P 
        INNER JOIN TEAMS T ON T.fullName = P.teamName 
        INNER JOIN SCHEDULE S ON S.Team = T.abbrv 
        INNER JOIN POSITIONS PO ON PO.Position = P.slotName 
        WHERE T.abbrv = '${dropdownValue}' OR 
        S.w17 LIKE '%${dropdownValue}%' OR S.w16 LIKE '%${dropdownValue}%' OR S.w15 LIKE '%${dropdownValue}%' 
        LIMIT 30`;

      }

        console.log("queryToSend: ", queryToSend);

        fetch('http://18.221.254.20:3306/api/query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: queryToSend })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok for dropdown');
            }
            return response.json();
        })
        .then(data => {
            console.log('Player Data:', data);
            displayData(data);            
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
    }

    function displayData(data) {
        const dataContainer = document.getElementById('dataContainer');
        dataContainer.innerHTML = ''; // Clear existing content

        // Iterate over the data and display it
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
            <div class="player-tile" style="background-color:${item.teamcolor1}; border-radius:10px; border-width:5px; border-style:solid; border-color:${item.teamcolor2};">
              <img src="images/${item.abbrv}.webp" style="background-color:${item.teamcolor1}; margin:0px 20px 0px 0px; height:100px; width:100px;"></img>
              <font color="${item.teamcolor2}">
              <p style="background-color:${item.teamcolor1};"><b>
              <span><font size="5";>${item.slotName} - ${item.firstName} ${item.lastName}</font></span></br>ADP: ${item.adp} | Bye: ${item.byeWeek} | Proj: ${item.projectedPoints}</br>
              ${item.teamName} - ${item.conference} ${item.division}
              </b></p></font>              
            </div>
            `;
            // console.log("itemElement:",itemElement);
            dataContainer.appendChild(itemElement);
        });
    }

    document.getElementById('showall').addEventListener('change', fetchPlayerData);
    console.log("Java script Ended!")



  // TRASH CODE BELOW HERE 
  //
  // ----------------------------------------------
  //   ` SELECT 
  //   *
  // FROM PLAYERS P 
  // INNER JOIN TEAMS T ON T.fullName = P.teamName 
  // INNER JOIN SCHEDULE S ON S.Team = T.abbrv 
  // WHERE T.abbrv = '${dropdownValue}' OR 
  // S.w17 LIKE '%${dropdownValue}%' OR S.w16 LIKE '%${dropdownValue}%' OR S.w15 LIKE '%${dropdownValue}%' 
  // LIMIT 30`;