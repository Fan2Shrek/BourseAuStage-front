import { apiBaseUrl } from "../tools";

const getPicturePath = (picture) => {
    const baseUrl = apiBaseUrl.replace('/api', '');
    const path = picture.replace('public/', '');

    return `${baseUrl}/${path}`;
}

export default getPicturePath;
