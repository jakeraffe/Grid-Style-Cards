
const softwareData = [
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
      },
      {
        title: "SQL Server",
        description: "Microsoft SQL Server is a relational database management system developed by Microsoft. It is a software \
product with the primary function of storing and retrieving data as requested by other software applications",
        icon: "Assets/sql.png"
      }
  ];

  
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
            <button class="readmore" onclick="getDesc()">Read More</button>
        </div>
      </card>
    `;
  }

// This allows the http div to use the app class.
// Sets up the structure of the page and sends our Template Literal to two functions for work.
  document.getElementById("app").innerHTML = `
  <div class="stack">
    <main class="grid">
      ${softwareData.map(getDesc).join("")}
      ${softwareData.map(softTemplate).join("")}
    </main>
  </div>
  `;
