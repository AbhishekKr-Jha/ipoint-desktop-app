

const { BrowserWindow , app }=require('electron')
const path=require('path')
console.log("the main dir is",path.join(__dirname))

const create_window_func=()=>{
 
const win=new BrowserWindow({
    height:800,
    width:1200,
    // frame:false,
webPreferences:{
    nodeIntegration:true,
    contextIsolation:false
}
})



win.loadFile(path.join(__dirname,'renderer/pages/indexPage/index.html'))

win.webContents.openDevTools()

}


app.whenReady().then(create_window_func);

app.on("all-window-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
