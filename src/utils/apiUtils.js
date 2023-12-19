import { publicApi } from "@/api/configAxios"

export const fetchData = async (url)=>{
    const response = await publicApi.get(url)
    return response.data
}
export const postData = async (url, data)=>{
    const response = await publicApi.post(url, data)
    return response
}