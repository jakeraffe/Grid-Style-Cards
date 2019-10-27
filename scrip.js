const softwareData = [
    {
      title: "Adobe Acrobat DC",
      description: "Microsoft Visual Studio is an integrated development environment from Microsoft. \
It is used to develop computer programs, as well as websites, web apps, web services and mobile apps",
      icon: "Assets/adobe.png"
    },
    {
        title: "Visual Studio",
        description: "Avaya Equinox for Windows turns your Windows PC into a powerful communications and collaboration \
system that can work in conjunction",
        icon: "Assets/vs.png"
      },
      {
        title: "Visual Studio Code",
        description: "Microsoft Visual Studio is an integrated development environment from Microsoft. It is used to develop computer programs, \
as well as websites, web apps, web services and mobile apps",
        icon: "Assets/vscode.png"
      },
      {
        title: "Bananatag",
        description: "Avaya Equinox for Windows turns your Windows PC into a powerful communications and collaboration \
system that can work in conjunctio",
        icon: "Assets/avaya.png"
      },
      {
        title: "Visual Studio Code",
        description: "Microsoft Visual Studio is an integrated development environment from Microsoft. \
It is used to develop computer programs, as well as websites, web apps, web services and mobile apps",
        icon: "Assets/vscode.png"
      },
      {
        title: "Visual Studio Code",
        description: "Microsoft Visual Studio is an integrated development environment from Microsoft. It is used to develop computer programs, \
as well as websites, web apps, web services and mobile apps",
        icon: "Assets/vscode.png"
      },
      {
        title: "Visual Studio Code",
        description: "Microsoft Visual Studio is an integrated development environment from Microsoft. \
It is used to develop computer programs, as well as websites, web apps, web services and mobile apps",
        icon: "Assets/vscode.png"
      }
  ];

  

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

  document.getElementById("app").innerHTML = `
  <div class="stack">
    <main class="grid">
      ${softwareData.map(getDesc).join("")}
      ${softwareData.map(softTemplate).join("")}
    </main>
  </div>
  `;
