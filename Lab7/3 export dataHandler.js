export class DataHandler {
    async fetchData(url) {
        const response = await fetch(url);
        return response.json();
    }

    async saveData(url, data) {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        return response.json();
    }
}
