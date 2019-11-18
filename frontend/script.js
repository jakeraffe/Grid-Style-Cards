//--------------------------------------------------CATEGORY OBJECT--------------------------------------------------/
const main_Category_View = [
  {
    title: "Woodward",
    description: "Apps build by Woodward to fit the specific needs of all the Woodward members today. ",
    icon: "Assets/woodward.jpg"
  },
  {
    title: "Office",
    description: "General purpose office applications e.g Microsoft Office, Excel, Powerpoint, Visio etc",
    icon: "Assets/ms(1).png"
  },
  {
    title: "Engineering",
    description: "From Autocad to something else that ill write in later, all your Enginerring Software is found here",
    icon: "Assets/engineering(1).png"
  }
];

//--------------------------------------------------OFFICE OBJECT--------------------------------------------------/
const approved_Office_Software = [
  {
    title: "Microsoft Word",
    description: "Microsoft Word is a word processor developed by Microsoft. It was first released on October 25, 1983 under the name Multi-Tool Word for Xenix systems.",
    icon: "Assets/word.png"
  },
  {
    title: "Kubernetes",
    description: "Kubernetes is an open-source container-orchestration system for automating application deployment, scaling, \
and management. It is now maintained by the Cloud Native Computing Foundation.",
    icon: "Assets/kuber2.png"
  },
];

//--------------------------------------------------ENGINEERING OBJECT--------------------------------------------------/
const approved_Engineering_Software = [
  {
    title: "Microsoft Azure",
    description: "Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing\
  applications and services through Microsoft-managed data centers.",
    icon: "Assets/azure.png"
  },
  {
    title: "Visual Studio Code",
    description: "Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS.",
    icon: "Assets/vscode.png"
  },
  {
    title: "Visual Studio",
    description: "Microsoft Visual Studio is an integrated development environment from Microsoft.",
    icon: "Assets/vs.png"
  },
  {
    title: "Microsoft Azure",
    description: "Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing\
  applications and services through Microsoft-managed data centers.",
    icon: "Assets/azure.png"
  },
];

//--------------------------------------------------WOODWARD OBJECT--------------------------------------------------/
const approved_Woodward_Software = [
  {
    title: "SQL Server",
    description: "Microsoft SQL Server is a relational database management system developed by Microsoft. It is a software \
  product with the primary function of storing and retrieving data as requested by other software applications",
    icon: "Assets/sql.png"
  },
  {
    title: "Goto Meeting",
    description: "Microsoft SQL Server is a relational database management system developed by Microsoft. It is a software \
  product with the primary function of storing and retrieving data as requested by other software applications",
    icon: "Assets/GoTo.png"
  },
];
//--------------------------------------------------//--------------------------------------------------/

// Function to read more and restrict text length on each card
  function getDesc(itemDesc){
    let desc = itemDesc.description;

    let newDesc = desc.split(" ");    //sends string to array than removes commas and splits by number of words
    newDesc = newDesc.join(" ");

      let firstHalf = newDesc.slice(0,100);   //gets the first 100 characters 
      firstHalf = firstHalf + " . . .";       //append three dots after
      // alert(firstHalf);   

      let secondHalf = newDesc.slice(101);    //gets the remainder of the sliced string
      // alert(secondHalf);
  }

  // Blocked by CORS policy. 
  //Added headers to web.xml but did not solve the issue
  function API_Request(){
    var HttpClient = function() {
      this.get = function(aUrl, aCallback) {
          var anHttpRequest = new XMLHttpRequest();
          anHttpRequest.onreadystatechange = function() { 
          if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
          aCallback(anHttpRequest.responseText);
          }
    
        anHttpRequest.open( "GET", aUrl, true );            
          anHttpRequest.send( null );
        }
      }
    
      var theURL = 'http://rms-test/sdpapi/request/133872?OPERATION_NAME=GET_REQUEST&format=json&TECHNICIAN_KEY=68EADF0C-83B0-4AC5-B7B0-787847251F81';
      var client = new HttpClient();
      let thisReply = null;
      client.get(theURL, function(response) {
      //   var response1 = JSON.parse(response);
      // alert(response1);
      //   console.log(response);
      // document.getElementById('demo').innerHTML = response;
      });
  }


  // completes the rest of the structure of the cards
  // "item" is the literal object array that has been passed into our function.
  //  This loops through and displays as we ask it to.
  function softTemplate(item) {
    return `
      <card class="nested">
        <img class="image" src="${item.icon}">
          <div class="text">
            <!--<button class="request-button" onclick="getDescription('${item.description}')">Request</button> -->
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <button class="request-button" onclick="API_Request()">Request</button>
        </div>
      </card>
    `;
  }



function categoryTemplate(card) {
  if (card.title == "Woodward"){
    return `
      <card class="category-menu-nested">
        <img class="image" src="${card.icon}">
          <div class="text">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
            <button class="request-button" onclick="show_Woodward_items()">View</button>
        </div>
      </card>
    `;
  }
  else if (card.title == "Office"){
    return `
      <card class="category-menu-nested">
        <img class="image" src="${card.icon}">
          <div class="text">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
            <button class="request-button" onclick="show_Office_items()">View</button>
        </div>
      </card>
    `;
  }
  else{
    return `
      <card class="category-menu-nested">
        <img class="image" src="${card.icon}">
          <div class="text">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
            <button class="request-button" onclick="show_Engineering_items()">View</button>
        </div>
      </card>
    `;
  }
}

//send to categoryTemplate
document.getElementById("category-view").innerHTML = `
<div class="stack">
  <main class="grid-category-menu">
    ${main_Category_View.map(categoryTemplate).join("")}
  </main>
</div>
`;

//--------------------------------------------------//-----------------SORTING OBJECTS-------------------/
//sorts everything perfectly
let sortByProperty = function (property) {
  return function (x, y) {
      //basically returns nothing if they are equal,
      //or returns the item that is greater than the lesser
      return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
  };
};

//Sorts each list in alphabetical order
let sorted_Office_List = approved_Office_Software.sort(sortByProperty('title'));
let sorted_Enginering_List = approved_Engineering_Software.sort(sortByProperty('title'));
let sorted_Woodward_List = approved_Woodward_Software.sort(sortByProperty('title'));

//--------------------------------------------------//-----------------SENDING OBJECTS TO TEMPLATE LITERAL FUNCTIONS-------------------/

// This allows the http div to use the app class.
// Sets up the structure of the page and sends our Template Literal to two functions for work.
function show_Office_items() {
  document.getElementById("app").innerHTML = `
  <div class="stack">
    <main class="grid">
      ${sorted_Office_List.map(softTemplate).join("")}
    </main>
  </div>
  `;
}

function show_Engineering_items() {
  document.getElementById("app").innerHTML = `
  <div class="stack">
    <main class="grid">
      ${sorted_Enginering_List.map(softTemplate).join("")}
    </main>
  </div>
  `;
}

function show_Woodward_items() {
  document.getElementById("app").innerHTML = `
  <div class="stack">
    <main class="grid">
      ${sorted_Woodward_List.map(softTemplate).join("")}
    </main>
  </div>
  `;
}