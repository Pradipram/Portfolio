"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRoleInFile = exports.addRoleToFile = exports.writeRolesToFile = exports.readRolesFromFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const filePath = path_1.default.resolve(__dirname, "../data/roles.json");
const readRolesFromFile = () => {
    try {
        const data = fs_1.default.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
    }
    catch (error) {
        console.error("Error reading roles from file:", error);
        return [];
    }
};
exports.readRolesFromFile = readRolesFromFile;
const writeRolesToFile = (roles) => {
    try {
        fs_1.default.writeFileSync(filePath, JSON.stringify(roles, null, 2), "utf-8");
    }
    catch (error) {
        console.error("Error writing roles to file:", error);
    }
};
exports.writeRolesToFile = writeRolesToFile;
const addRoleToFile = (name) => {
    const roles = (0, exports.readRolesFromFile)();
    const newRole = { id: (0, uuid_1.v4)(), name };
    roles.push(newRole);
    (0, exports.writeRolesToFile)(roles);
    return newRole;
};
exports.addRoleToFile = addRoleToFile;
const updateRoleInFile = (id, newName) => {
    const roles = (0, exports.readRolesFromFile)();
    const index = roles.findIndex((role) => role.id === id);
    if (index === -1)
        return null;
    roles[index].name = newName;
    (0, exports.writeRolesToFile)(roles);
    return roles[index];
};
exports.updateRoleInFile = updateRoleInFile;
