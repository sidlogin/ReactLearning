const apiRequest = async (url = '', params = null, errMsg = null) => {
    try {
        const response = await fetch(url, params);
        console.log(response);
        if (response && !response.ok) throw Error('Please reload the app');
    } catch (err) {
        errMsg = err.message;
    } finally {
        return errMsg;
    }
}

export default apiRequest;