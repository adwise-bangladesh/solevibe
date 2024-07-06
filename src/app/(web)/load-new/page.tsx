import { useState } from "react";
import { setProducts } from "../../../service/features/data-service";
import  environment  from "../../../environments/environment"
const fs = require("fs");

async function getData() {
    
    const res = await fetch(environment.API_URL+'products?per_page=100',{
        headers: {
            Authorization: environment.Authorization
        }
    })
    if (!res?.ok) {
      console.log('Failed to data fetch')
    }
    const result = await res.json();

    console.log('result', result)
    setProducts(result);
    return res
    
  }

const TestPage = async () => {
    const res = await getData()
    return (
        <>
            <div className="text-black">{res?.ok ? 'ok' : "Something went wrong"}</div>
        </>
    )
}

export default TestPage;