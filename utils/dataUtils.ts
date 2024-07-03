import fs from "fs";
import path from "path";

const dataPath = path.join(__dirname, "../data/data.json");

interface Data {
    resume: string;
}

// Read data from data.json
export const readData = (): Data | null => {
    try {
        const rawData = fs.readFileSync(dataPath, "utf-8");
        return JSON.parse(rawData) as Data;
    } catch (error) {
        console.error("Error reading data.json:", error);
        return null;
    }
};

// Write data to data.json
export const writeData = async (data: Data): Promise<void> => {
    try {
        // console.log("datautils: ", data);
        const jsonData = await JSON.stringify(data, null, 2);
        // console.log("jsonData", jsonData);
        fs.writeFileSync(dataPath, jsonData, "utf-8");
    } catch (error) {
        console.error("Error writing to data.json:", error);
    }
};
