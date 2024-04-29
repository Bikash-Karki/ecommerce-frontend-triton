const parseImageUrl = (imageUrl) => {
    if (typeof imageUrl === 'string' && imageUrl.startsWith('[') && imageUrl.endsWith(']')) {
        // Remove the square brackets
        imageUrl = imageUrl.slice(1, -1);
    }

    // Check if imageUrl is a string and starts and ends with '"'
    if (typeof imageUrl === 'string' && imageUrl.startsWith('"') && imageUrl.endsWith('"')) {
        // Remove the double quotes
        imageUrl = imageUrl.slice(1, -1);
    }

    return imageUrl;
}

export default parseImageUrl