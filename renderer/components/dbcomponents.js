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

export async function closeDB()
{   
    try {
        if (ipcRenderer) {
            var res=  await ipcRenderer.invoke('DBclose');
            console.log(res);
            return res;
    
        }
        return "no ipcRenderer";
    } catch (error) {
        console.log(error);
    }
    
}

export async function order(package_contents, delivery_type, customer_region)
{   
    try {
        if (ipcRenderer) {
            var res=  await ipcRenderer.invoke('DBorder', {package_contents, delivery_type, customer_region});
            console.log(res);
            return res;
    
        }
        return "no ipcRenderer";
    } catch (error) {
        console.log(error);
    }
    
}

export async function order_history(cus_id)
{   
    try {
        if (ipcRenderer) {
            var res=  await ipcRenderer.invoke('DBorder_history', cus_id);
            console.log(res);
            return res;
    
        }
        return "no ipcRenderer";
    } catch (error) {
        console.log(error);
    }
    
}

export async function rate_Employee(emp_id, rating)
{   
    try {
        if (ipcRenderer) {
            var res=  await ipcRenderer.invoke('DBrate_Employee', {emp_id, rating});
            console.log(res);
            return res;
    
        }
        return "no ipcRenderer";
    } catch (error) {
        console.log(error);
    }
    
}

export async function warehouse_view(emp_id)
{
    try {
        if (ipcRenderer) {
            var res=  await ipcRenderer.invoke('DBwarehouse_view', emp_id);
            console.log(res);
            return res;
    
        }
        return "no ipcRenderer";
    } catch (error) {
        console.log(error);
    }
    
}

export async function orders_involved(emp_id)
{
    try {
        if (ipcRenderer) {
            var res=  await ipcRenderer.invoke('DBorders_involved', emp_id);
            console.log(res);
            return res;
    
        }
        return "no ipcRenderer";
    } catch (error) {
        console.log(error);
    }
    
}

export async function vehicle_view(emp_id)
{
    try {
        if (ipcRenderer) {
            var res=  await ipcRenderer.invoke('DBvehicle_view', emp_id);
            console.log(res);
            return res;
    
        }
        return "no ipcRenderer";
    } catch (error) {
        console.log(error);
    }
    
}

export async function employee_rating_view(emp_id)
{
    try {
        if (ipcRenderer) {
            var res=  await ipcRenderer.invoke('DBemployee_rating_view', emp_id);
           
            console.log(res);
            return res;
    
        }
        return "no ipcRenderer";
    } catch (error) {
        console.log(error);
    }
    
}

export async  function adminQuery(query )
{
    try {
        if (ipcRenderer) {
            var res=  await ipcRenderer.invoke('DBadminQuery', query);
            console.log("returned from dbAct");
            console.log(res);
            return res;
    
        }
        return "no ipcRenderer";
    } catch (error) {
        console.log(error);
    }
    
}





