import axios from "axios";

export const sendData = async (formData) => {
    try {
        const response = await axios.post("https://crm.exinitic.com/api/v1/crm/leads/website", formData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}