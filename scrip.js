const softwareData = [
    {
      title: "Adobe Acrobat DC",
      description: "Adobe Acrobat is a family of application software and Web services developed by Adobe Inc.\
      to view, create, manipulate, print and manage files in Portable Document Format. The family comprises Acrobat Reader, Acrobat and Acrobat.com.",
      icon: "Assets/avaya.png"
    },
    {
        title: "Avaya",
        description: "Avaya Equinox for Windows turns your Windows PC into a powerful communications and collaboration\
        system that can work in conjunction with your Avaya deskphone or enable you\
        to work without compromise from anywhere.",
        icon: "Assets/avaya.png"
      },
      {
        title: "Bananatag",
        description: "Bananatag is an email tracking software launched in 2011. \
        It notifies users whether the emails sent are successfully delivered and opened. Bananatag is used in email marketing where mass emails are sent to millions of targeted customers are response awaited.",
        icon: "Assets/avaya.png"
      },
      
  ];

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
