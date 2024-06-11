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



// const temp = {
//     id: product?.id,
//     average_rating : product?.average_rating,
//     attributes : product?.attributes,
//     backorders : product?.backorders,
//     backorders_allowed : product?.backorders_allowed,
//     catalog_visibility : product?.catalog_visibility,
//     categories : product?.categories,
//     cross_sell_ids : product?.cross_sell_ids,
//     date_created : product?.date_created,
//     date_created_gmt : product?.date_created_gmt,
//     date_modified : product?.date_modified,
//     date_modified_gmt : product?.date_modified_gmt,
//     date_on_sale_from : product?.date_on_sale_from,
//     date_on_sale_to : product?.date_on_sale_to,
//     default_attributes : product?.default_attributes,
//     description : product?.description,
//     dimensions : product?.dimensions,
//     download_expiry : product?.download_expiry,
//     download_limit : product?.download_limit,
//     downloadable : product?.downloadable,
//     downloads : product?.downloads,
//     external_url : product?.external_url,
//     featured : product?.featured,
//     grouped_products : product?.grouped_products,
//     has_options : product?.has_options,
//     images : product?.images,
//     low_stock_amount : product?.low_stock_amount,
//     manage_stock : product?.manage_stock,
//     menu_order : product?.menu_order,
//     meta_data : product?.meta_data,
//     name : product?.name,
//     on_sale : product?.on_sale,
//     parent_id : product?.parent_id,
//     permalink : product?.permalink,
//     price : product?.price,
//     purchasable : product?.purchasable,
//     purchase_note : product?.purchase_note,
//     rating_count : product?.rating_count,
//     regular_price : product?.regular_price,
//     related_ids : product?.related_ids,
//     reviews_allowed : product?.reviews_allowed,
//     sale_price : product?.sale_price,
//     shipping_class : product?.shipping_class,
//     shipping_class_id : product?.shipping_class_id,
//     shipping_required : product?.shipping_required,
//     shipping_taxable : product?.shipping_taxable,
//     short_description : product?.short_description,
//     sku: product?.sku,
//     slug : product?.slug,
//     sold_individually : product?.sold_individually,
//     status : product?.status,
//     stock_quantity : product?.stock_quantity,
//     stock_status : product?.stock_status,
//     tags : product?.tags,
//     type : product?.type,
//     variations : product?.variations,
// }