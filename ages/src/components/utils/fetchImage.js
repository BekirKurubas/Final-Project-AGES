export const fetchImage = async (imagePath) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/image/${imagePath}`, {
            method: "GET",
            headers: {
                'Content-Type': 'image/jpeg'
            }
        });

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const imageBlob = await res.blob();
        return URL.createObjectURL(imageBlob);
    } catch (error) {
        console.error('Fetch image failed:', error);
        return null;
    }
};