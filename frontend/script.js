
const main_Category_View = [
  {
    title: "Wooodward",
    description: "Apps build by Woodward specifically for Woodward",
    icon: "Assets/docker1.png"
  },
  {
    title: "Office",
    description: "General purpose office applications e.g Microsoft Office, Excel, Powerpoint, Visio etc",
    icon: "Assets/docker1.png"
  },
  {
    title: "Engineering",
    description: "From Autocad to something else that ill write in later, all your Enginerring Software is found here",
    icon: "Assets/docker1.png"
  }
];


const approved_Office_Software = [
  {
    title: "Docker",
    description: "Docker is a set of platform-as-a-service products that use OS-level virtualization to deliver software\
in packages or containers. Containers are isolated from one another and bundle their own software.",
    icon: "Assets/docker1.png"
  },
  {
    title: "Kubernetes",
    description: "Kubernetes is an open-source container-orchestration system for automating application deployment, scaling, \
and management. It is now maintained by the Cloud Native Computing Foundation.",
    icon: "Assets/kuber2.png"
  }
];


const approved_Engineering_Software = [
{
  title: "Microsoft Azure",
  description: "Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing\
applications and services through Microsoft-managed data centers.",
  icon: "Assets/azure.png"
},
  {
    title: "Visual Studio Code",
    description: "Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS. It includes support \
for debugging, embedded Git control and GitHub, and code refactoring.",
    icon: "Assets/vscode.png"
  },
  {
    title: "Visual Studio",
    description: "Microsoft Visual Studio is an integrated development environment from Microsoft. \
It is used to develop computer programs, as well as websites, web apps, web services and mobile apps.",
    icon: "Assets/vs.png"
  },
];


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
//sorts everything perfectly
  var sortByProperty = function (property) {
    return function (x, y) {
        //basically returns nothing if they are equal,
        //or returns the item that is greater than the lesser
        return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
    };
  };


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
            <button class="request-button" onclick="getDesc()">Request</button>
        </div>
      </card>
    `;
  }

function categoryTemplate(card) {
  return `
    <card class="nested">
      <img class="image" src="${card.icon}">
        <div class="text">
          <!--<button class="request-button" onclick="getDescription('${card.description}')">Request</button> -->
          <h3>${card.title}</h3>
          <p>${card.description}</p>
          <button class="request-button" onclick="show_Office_items()">Request</button>
      </div>
    </card>
  `;
}

document.getElementById("category-view").innerHTML = `
<div class="stack">
  <main class="grid">
    ${main_Category_View.map(categoryTemplate).join("")}
  </main>
</div>
`;

let sorted_Office_List = approved_Office_Software.sort(sortByProperty('title'));
let sorted_Enginering_List = approved_Engineering_Software.sort(sortByProperty('title'));
let sorted_Woodward_List = approved_Woodward_Software.sort(sortByProperty('title'));
// let sorted_Office_List = approved_Office_Software.sort(sortByProperty('title'));

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

function show_Eng_items() {
  document.getElementById("app").innerHTML = `
  <div class="stack">
    <main class="grid">
      ${sorted_Enginering_List.map(softTemplate).join("")}
    </main>
  </div>
  `;
}