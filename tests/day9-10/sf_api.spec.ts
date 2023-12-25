import {chromium, expect, test  } from "@playwright/test";

let accessToken:any;

test('Get Access token from salesforce application ',async ({request}) => {
   const clientID = "3MVG9pRzvMkjMb6mTqUXO4Bp03.1ZzBN.nNHucXNGt9VsyRoU6IvR.j63tGcQmkljwXtrf65JsV.a5S_Q0h4g";
   const client_secret = "D39BE679EFEB7EE633E0721DF0407AA65031DD77FCF6EBA8FBA8BB6A4A482B50";
   const username = "ananthan@testleaf.com";
   const password = "Anantha@123"
   const apiURL = "https://login.salesforce.com/services/oauth2/token";
   
   
    const response = await request.post(apiURL,{
        headers:{
            "Content-Type": "application/x-www-form-urlencoded",
            "Connection" : "keep-alive",
        },
        form:{
            "grant_type":"password",
            "client_id":clientID,
            "client_secret":client_secret,
            "username":username,
            "password":password
        }
    });

    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.token_type).toEqual('Bearer')
    const accessToken = "Bearer "+responseBody.access_token;
    const instanceUrl = responseBody.instance_url;
    console.log("Access Token :: "+ accessToken);
    console.log("Instance URL :: "+ instanceUrl);
});

test('Creat new Opputunity ',async ({request}) => {
    const clientID = "3MVG9pRzvMkjMb6mTqUXO4Bp03.1ZzBN.nNHucXNGt9VsyRoU6IvR.j63tGcQmkljwXtrf65JsV.a5S_Q0h4g";
    const client_secret = "D39BE679EFEB7EE633E0721DF0407AA65031DD77FCF6EBA8FBA8BB6A4A482B50";
    const username = "ananthan@testleaf.com";
    const password = "Anantha@123"
    
    const apiURL = "https://testleaf-8c-dev-ed.develop.my.salesforce.com/services/data/v58.0/sobjects/Opportunity";
    
    
     const response = await request.post(apiURL,{
         headers:{
             "Content-Type": "application/json",
             "Authorization":"Bearer 00D5j00000DiWeU!AREAQMBnX9WWicE0gwROga7Yl5Q5i4AnaRVZB9KgVRxHnY3PY.IhXg2hDasIufxuIeOXSxnrSdaKADXdCYziMGUOl.9QCUF8"
         },
         data:{
            "CloseDate":"2023-12-25",
            "Name":"Anantha",
            "StageName":"Prospecting"
         }
     });
 
     const responseBody = await response.json();
     console.log(responseBody);
     expect(responseBody.token_type).toEqual('Bearer')
     const accessToken = "Bearer "+responseBody.access_token;
     const instanceUrl = responseBody.instance_url;
     console.log("Access Token :: "+ accessToken);
     console.log("Instance URL :: "+ instanceUrl);
 });