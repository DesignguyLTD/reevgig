export const handleError = (error: any) => {
    if (error.response) {
        console.error('Error:', error.response.data);
    } else {
        console.error('Unknown error occurred', error);
    }
};
