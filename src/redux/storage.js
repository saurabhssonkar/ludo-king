const reduxStorage = {
    setItem: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value)); // Store the value as a JSON string
            return Promise.resolve(true);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getItem: (key) => {
        try {
            const value = localStorage.getItem(key); // Retrieve the value
            return Promise.resolve(value ? JSON.parse(value) : null); // Parse the JSON value
        } catch (error) {
            return Promise.reject(error);
        }
    },
    removeItem: (key) => {
        try {
            localStorage.removeItem(key); // Remove the key-value pair
            return Promise.resolve(true);
        } catch (error) {
            return Promise.reject(error);
        }
    },
};

export default reduxStorage;
