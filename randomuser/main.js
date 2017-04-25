//const app = require('electron').app
//const BrowserWindow = require('electron').BrowserWindow
const {app, BrowserWindow}=require('electron')
const path=require('path')//ruta donde se encuentra nustro proyecto
//ruta en formato URL
const url=require('url')
let PantallaPrincipal;
function muestraPantallaPrincipal(){
	PantallaPrincipal=new BrowserWindow({
		width:1024,
		height:768
	})
	PantallaPrincipal.on('closed',function(){
		PantallaPrincipal=null
	})
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}))
	PantallaPrincipal.show()
}
//la aplicacion ejecuta este evento cuando
//el archivo main.js se carga en memoria
app.on('ready',muestraPantallaPrincipal)
