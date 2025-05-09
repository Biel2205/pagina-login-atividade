const { app, BrowserWindow } = require('electron')
 
const createWindow = () => {
 
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // resizable: false, // Define se a janela pode ser redimencionada
   // movable: false, // Define se a janela pode ser movida
   // minimizable: false, // Define se a janela pode ser minimizada
   // maximizable: false, // Define se a janela pode ser maximizada
   // closable: false, // Define se a janela pode ser fechada
   // fullscreen: true, // Define se a janela deve iniciar em tela cheia
    // alwaysOnTop: true, // Define se a janela deve ficar sempre em cima de outras janela
    // transparent: true,// define
    icon:'bella.cake.jpg',// define o icone da janela 
    // frame:false,

  })

    win.setMenuBarVisibility(false) //ocultar a barra de menu da janela 
 
  win.loadFile('index.html')
}
 
 
app.whenReady().then(() => {
 
 
  createWindow()
})