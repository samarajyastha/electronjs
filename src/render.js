// Buttons
const videoElement = document.querySelector("video");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const videoSelectBtn = document.getElementById("videoSelectBtn");


const { desktopCapturer, remote } = require("electron");
const { Menu } = remote;

// Get available video sources
const getVideoSources = async () => {
  const inputSources = await desktopCapturer.getSources({
    types: ["window", "screen"],
  });

  const videoOptionsMenu = Menu.buildFromTemplate(
    inputSources.map((source) => {
      return {
        label: source.name,
        click: () => {
          setVideoSource(source);
        },
      };
    })
  );

  videoOptionsMenu.popup()
};

videoSelectBtn.onclick = getVideoSources;
