const BASE_URL = 'http://localhost:3000';

const getBannersUrl = `${BASE_URL}/banners`;
const getProductsUrl = `${BASE_URL}/products`;

export const getBanners = async() => {
    try{
        const req = await fetch(getBannersUrl, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            credentials: "include",
        });
    
        const response = await req.json();
    
        if (!req.ok) {
            throw new Error(response.message);
        }
    
        return response;
    } catch(error) {
        console.log(error)
        return error;
    }
};

export const getProducts = async() => {
    try{
        const req = await fetch(getProductsUrl, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            credentials: "include",
        });
    
        const response = await req.json();
    
        if (!req.ok) {
            throw new Error(response.message);
        }
    
        return response;
    } catch(error) {
        console.log(error)
        return error;
    }
};