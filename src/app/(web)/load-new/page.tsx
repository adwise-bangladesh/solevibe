import { useState } from "react";
import { setProducts } from "../../../service/features/data-service";
const fs = require("fs");

async function getData() {
    
    const res = await fetch('https://backend.solevibe.xyz/wp-json/wc/v3/products?per_page=100',{
        headers: {
            Authorization: `Basic Y2tfZTljOWYyZDhiNDkzZTUzNjM5ODBlNzllZmJiMDFiZjUxOTdjM2E0NTpjc19iYWQ1MWI0NTJjYTI0ZjFiNTM3MDQwMmFhOTFkYjI3NjRjYTFlOGJj`
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
    // loading = false;
    return (
        <>
            <div className="text-black">{res?.ok ? 'ok' : "Something went wrong"}</div>
        </>
    )
}

export default TestPage;