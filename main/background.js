import { app , ipcMain } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
const dbAct = require('./helpers/dbActivities.js');

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }
})();

ipcMain.handle(
  'DBtest', (event, arg) => {
    return dbAct.test();
  }
);

ipcMain.handle(
  'DBclose', (event, arg) => {
    return dbAct.closeDB();
  }
);

ipcMain.handle(
  'DBorder', (event, arg) => {
    console.log(arg);
    return dbAct.order(arg);
  }
);

ipcMain.handle(
  'DBorder_history', (event, arg) => {
    return dbAct.order_history(arg);
  }
);

ipcMain.handle(
  'DBrate_Employee', (event, arg) => {
    return dbAct.rate_Employee(arg);
  }
);

ipcMain.handle(
  'DBwarehouse_view', (event, arg) => {
    return dbAct.warehouse_view(arg);
  }
);

ipcMain.handle(
  'DBorders_involved', (event, arg) => {
    return dbAct.orders_involved(arg);
  }
);

ipcMain.handle(
  'DBvehicle_view', (event, arg) => {
    return dbAct.vehicle_view(arg);
  }
);

ipcMain.handle(
  'DBemployee_rating_view', (event, arg) => {
    return dbAct.employee_rating_view(arg);
  }
);

ipcMain.handle(
  'DBadminQuery', (event, arg) => {
    return dbAct.adminQuery(arg);
  }
);





app.on('window-all-closed', () => {
  app.quit();
});
