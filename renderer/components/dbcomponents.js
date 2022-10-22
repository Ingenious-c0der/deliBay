import electron from 'electron';

const ipcRenderer = electron.ipcRenderer || false; 


export async function test()
{   
    try {
        if (ipcRenderer) {
            var res=  await ipcRenderer.invoke('DBtest');
            console.log(res);
            return res;
    
        }
        return "no ipcRenderer";
    } catch (error) {
        console.log(error);
    }
    
}