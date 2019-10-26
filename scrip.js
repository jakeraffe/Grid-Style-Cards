const softwareData = [
    {
      title: "Adobe Acrobat DC",
      description: "Avaya Equinox for Windows turns your Windows PC into a powerful communications and collaboration\
      system that can work in conjunctio",
      icon: "Assets/adobe.png"
    },
    {
        title: "Visual Studio",
        description: "Avaya Equinox for Windows turns your Windows PC into a powerful communications and collaboration\
        system that can work in conjunctio",
        icon: "Assets/vs.png"
      },
      {
        title: "Visual Studio Code",
        description: "Microsoft Visual Studio is an integrated development environment from Microsoft. \
        It is used to develop computer programs, as well as websites, web apps, web services and mobile apps",
        icon: "Assets/vscode.png"
      },
      {
        title: "Bananatag",
        description: "Avaya Equinox for Windows turns your Windows PC into a powerful communications and collaboration\
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
        description: "Microsoft Visual Studio is an integrated development environment from Microsoft. \
        It is used to develop computer programs, as well as websites, web apps, web services and mobile apps",
        icon: "Assets/vscode.png"
      },
      {
        title: "Visual Studio Code",
        description: "Microsoft Visual Studio is an integrated development environment from Microsoft. \
        It is used to develop computer programs, as well as websites, web apps, web services and mobile apps",
        icon: "Assets/vscode.png"
      }
  ];

//  function getDescription(){
//   var desc = split(`${item.description}`, " ");
//  }
 function softTemplate(item) {
    return `
      <card class="nested">
        <img class="image" src="${item.icon}">
          <div class="text">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <button class="request-button">Request</button>
        </div>
      </card>
    `;
 }

  document.getElementById("app").innerHTML = `
  <div class="stack">
    <main class="grid">
      ${softwareData.map(softTemplate).join("")}
    </main>
  </div>
  `;
