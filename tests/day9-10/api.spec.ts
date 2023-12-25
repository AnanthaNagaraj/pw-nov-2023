import {chromium, test  } from "@playwright/test";


test('Service Now POST API incident ',async ({request}) => {
    const apiURL = "https://dev205797.service-now.com/api/now/table/incident"; 

    const response = await request.post(apiURL,{
        headers:{
            "Content-Type": "application/json",
            "Authorization" : "Basic YWRtaW46VGVzdGxlYWZAMTIz",
        },
        data:{
            "short_description":"By pw creation"
        }
    });

    console.log('STATUS ::' +response.status());
    console.log('----------------------------');
    const responseBody = await response.json();
    console.log(responseBody);
    console.log('Sys id :: '+responseBody.result.sys_id);
    console.log('Link :: '+responseBody.result.opened_by.link);
    console.log('Incident Number ::' +responseBody.request.number);
    
  
});

test('Service Now GET API incident ',async ({request}) => {
    const apiURL = "https://dev205797.service-now.com/api/now/table/incident/2c9424359313f1102015b4697bba104d"; 

    const response = await request.get(apiURL,{
        headers:{
            "Content-Type": "application/json",
            "Authorization" : "Basic YWRtaW46VGVzdGxlYWZAMTIz",
        }
    });

    console.log(response.status());
    const responseBody = await response.json();
    console.log('Short Description  :: '+responseBody.result.short_description);
    
});

// pass sys id
test('Service Now Delete API incident ',async ({request}) => {
    const apiURL = "https://dev205797.service-now.com/api/now/table/incident/2c9424359313f1102015b4697bba104d"; 

    const response = await request.delete(apiURL,{
        headers:{
            "Content-Type": "application/json",
            "Authorization" : "Basic YWRtaW46VGVzdGxlYWZAMTIz",
        }
    });
   
    console.log(response.status());
    
});