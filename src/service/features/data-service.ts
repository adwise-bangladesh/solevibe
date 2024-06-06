const fs = require("fs");

export const setProducts = (products) => {
    // console.log("hello:", products);
    
    const jsonString = JSON.stringify(products)
    console.log('upper')
    const writeJson = fs.writeFile('src/service/data/products.json', jsonString, (err:any) => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })

    // console.log(writeJson)



}
export const getProducts = () => {
    try {
        const jsonString = fs.readFileSync("src/service/data/products.json", "utf8");
        return JSON.parse(jsonString);
    } catch (err) {
        console.log("File read failed:", err);
        return null;
    }
};
export const getSingleProduct = (pid) => {
    try {
        const jsonString = fs.readFileSync("src/service/data/products.json", "utf8");
        const data = JSON.parse(jsonString);
        return data.find( ({ id }) => id == pid );
    } catch (err) {
        console.log("File read failed:", err);
        return null;
    }
};