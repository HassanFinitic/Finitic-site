import axios from "axios";

export const sendData = async (formData, currentPath) => {
    try {
        const response = await axios.post(
            "https://crm.exinitic.com/api/v1/crm/leads/website",
            formData,
            {
                headers: {
                    "currentPath": currentPath
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}