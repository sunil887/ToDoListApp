

export default function WebService(url,method,payload = null){
    let _data = null;
    
    switch (method) {
        case 'POST': 
                return fetch(url,{
                        method:method,
                        headers:{
                            "Accept":"application/json",
                            "Content-type" : "application/json"
                        },
                        body:JSON.stringify(payload)
                    })
                

            break;
        case 'GET':  
                    return fetch(url,{
                    method:method,
                    headers:{
                        "Accept":"application/json",
                        "Content-type" : "application/json"
                    }
                })
        
    }
}



