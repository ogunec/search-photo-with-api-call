import axios from 'axios';
const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID qoln4rZ9371czkINCu4wS_gbQBaI-og6YuVIFLjxNXs",
        },
        params: {
            query: term
        }
    });
    debugger
    return response.data.results;
}

export default searchImages;