"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeData = exports.readData = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dataPath = path_1.default.join(__dirname, "../data/data.json");
// Read data from data.json
const readData = () => {
    try {
        const rawData = fs_1.default.readFileSync(dataPath, "utf-8");
        return JSON.parse(rawData);
    }
    catch (error) {
        console.error("Error reading data.json:", error);
        return null;
    }
};
exports.readData = readData;
// Write data to data.json
const writeData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log("datautils: ", data);
        const jsonData = yield JSON.stringify(data, null, 2);
        // console.log("jsonData", jsonData);
        fs_1.default.writeFileSync(dataPath, jsonData, "utf-8");
    }
    catch (error) {
        console.error("Error writing to data.json:", error);
    }
});
exports.writeData = writeData;
