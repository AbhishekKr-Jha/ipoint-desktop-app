

const { BrowserWindow , app, ipcMain, Menu , screen}=require('electron')
const path=require('path')
console.log("the main dir is",path.join(__dirname))

const create_window_func=()=>{
 
  const primaryDisplay = screen.getPrimaryDisplay(); 
  const { width, height } = primaryDisplay.workAreaSize;
  
const win=new BrowserWindow({
    height:height,
    width:width,
    // height:800,
    // width:1200,
    // frame:false,
webPreferences:{
    nodeIntegration:true,
    contextIsolation:false
}
})





win.loadFile(path.join(__dirname,'renderer/pages/indexPage/index.html'))


 
ipcMain.on('open-zoom-window',(event,data)=>{
  console.log("hello")

  const zoomWindow=new BrowserWindow({
    height:800,
    width:1200,
    // frame:false,
    // parent:win,
    modal:true,
    webPreferences:{
      nodeIntegration:true,
      contextIsolation:false
    }
})

  zoomWindow.loadFile(path.join(__dirname,'renderer/pages/multiWindow/window01.html')).then(()=>{
    zoomWindow.webContents.send('get-zoom-image-data',data)
  })

})
  Menu.setApplicationMenu(null);

// win.webContents.openDevTools()

// zoomWindow.webContents.openDevTools()


}


app.whenReady().then(create_window_func);

app.on("all-window-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
