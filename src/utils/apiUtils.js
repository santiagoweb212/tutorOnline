import { publicApi } from "@/api/configAxios"

export const fetchData = async (url)=>{
    const response = await publicApi.get(url)
    return response.data
}