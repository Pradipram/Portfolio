import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const filePath = path.resolve(__dirname, "../data/roles.json");

interface Role {
    id: string;
    name: string;
}

export const readRolesFromFile = (): Role[] => {
    try {
        const data = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading roles from file:", error);
        return [];
    }
};

export const writeRolesToFile = (roles: Role[]): void => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(roles, null, 2), "utf-8");
    } catch (error) {
        console.error("Error writing roles to file:", error);
    }
};

export const addRoleToFile = (name: string): Role => {
    const roles = readRolesFromFile();
    const newRole: Role = { id: uuidv4(), name };
    roles.push(newRole);
    writeRolesToFile(roles);
    return newRole;
};

export const updateRoleInFile = (id: string, newName: string): Role | null => {
    const roles = readRolesFromFile();
    const index = roles.findIndex((role) => role.id === id);
    if (index === -1) return null;
    roles[index].name = newName;
    writeRolesToFile(roles);
    return roles[index];
};
