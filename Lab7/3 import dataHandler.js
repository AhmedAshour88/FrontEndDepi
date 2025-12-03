import { DataHandler } from "./dataHandler.js";

const handler = new DataHandler();

async function run() {
    const data = await handler.fetchData("https://example.com/api/items");
    console.log("Fetched:", data);

    const saved = await handler.saveData("https://example.com/api/items", {
        name: "Test Item",
        price: 100
    });

    console.log("Saved:", saved);
}

run();
