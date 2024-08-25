import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadIcon from "@mui/icons-material/Upload";
import CloseIcon from "@mui/icons-material/Close";

import { HomeStyle } from "../../../assets";
import { AddRoleApi } from "../../../API";
import { toast } from "react-toastify";
import { deleteRoleApi, UpdateRoleApi } from "../../../API/AdminApi/HomeApi";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

interface Role {
    id: string;
    name: string;
}

interface AddRoleProps {
    roles: Role[];
    setRoles: React.Dispatch<React.SetStateAction<Role[]>>;
}

const AddRole = React.forwardRef<HTMLDivElement, AddRoleProps>(
    ({ roles, setRoles }, ref) => {
        const [editMode, setEditMode] = useState<number | null>(null);
        const [adding, setAdding] = useState(false);
        const [roleName, setRoleName] = useState("");

        // const roles = [
        //     { id: 1, name: "Software Developer" },
        //     { id: 2, name: "Full Stack Web Developer" },
        // ];

        const handleEdit = (index: number) => {
            setEditMode(index); // Set edit mode for the clicked item
        };

        const handleCancelEdit = () => {
            setEditMode(null); // Exit edit mode for all items
        };

        const handleAddRole = async () => {
            if (!adding) {
                setAdding(true);
            } else {
                // console.log("Add api request", roleName);
                try {
                    const newRole = await AddRoleApi(roleName);
                    // console.log(res);
                    if (newRole) {
                        setRoles([...roles, newRole]);
                        setAdding(false);
                        setRoleName("");
                        toast.success("Role added successfully");
                    } else {
                        throw new Error("Internal server error");
                    }
                } catch (err) {
                    toast.error(
                        "Internal server error. Try refressing the page"
                    );
                    console.log(err);
                }
            }
        };

        const handleDeleteRole = async (index: number) => {
            const roleId = roles[index].id;
            try {
                const res = await deleteRoleApi(roleId);
                // console.log(res);
                if (res && res.success) {
                    setRoles((prevRoles) =>
                        prevRoles.filter((_, i) => i !== index)
                    );
                    toast.success("Role deleted successfully");
                } else {
                    throw new Error("Internal server error");
                }
            } catch (err) {
                toast.error("Error deleting role. Try refreshing the page");
                console.log(err);
            }
        };

        const handleUpdateRole = async (id: string) => {
            try {
                const updatedRole = await UpdateRoleApi(id, roleName);
                if (updatedRole) {
                    setRoles(
                        roles.map((role) =>
                            role.id === id ? updatedRole : role
                        )
                    );
                    setRoleName("");
                    setEditMode(null);
                    toast.success("Role updated successfully");
                } else {
                    throw new Error("Internal server error");
                }
            } catch (err) {
                toast.error("Failed to update role");
                console.log(err);
            }
        };

        return (
            <div ref={ref} tabIndex={-1}>
                <Box sx={style}>
                    <div className={HomeStyle.roleContainer}>
                        <h5>Current Role</h5>
                        <ul>
                            {roles.map((role, index) => (
                                <li
                                    key={role.id}
                                    className={HomeStyle.roleList}
                                >
                                    <span className={HomeStyle.roleIndex}>
                                        {index + 1}.
                                    </span>
                                    {editMode === index ? (
                                        <div className={HomeStyle.roleItem}>
                                            <TextField
                                                id="standard-helperText"
                                                defaultValue={role.name}
                                                variant="standard"
                                                onChange={(e) =>
                                                    setRoleName(e.target.value)
                                                }
                                            />
                                            <div>
                                                <Button
                                                    onClick={() =>
                                                        handleUpdateRole(
                                                            role.id
                                                        )
                                                    }
                                                >
                                                    <UploadIcon />
                                                </Button>
                                                <Button
                                                    onClick={handleCancelEdit}
                                                >
                                                    <CloseIcon />
                                                </Button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className={HomeStyle.roleItem}>
                                            <span>{role.name}</span>
                                            <div>
                                                <Button
                                                    onClick={() =>
                                                        handleEdit(index)
                                                    }
                                                >
                                                    <EditIcon
                                                        fontSize="small"
                                                        color="secondary"
                                                    />
                                                </Button>
                                                <Button
                                                    onClick={() =>
                                                        handleDeleteRole(index)
                                                    }
                                                >
                                                    <DeleteIcon />
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                        {adding && (
                            <div className={HomeStyle.addrole}>
                                <TextField
                                    id="standard-helperText"
                                    label="role"
                                    // defaultValue="Software developer"
                                    placeholder="Enter new role"
                                    variant="filled"
                                    size="small"
                                    sx={{ margin: 2 }}
                                    value={roleName}
                                    onChange={(e) =>
                                        setRoleName(e.target.value)
                                    }
                                />
                                <Button onClick={() => setAdding(false)}>
                                    <CloseIcon />
                                </Button>
                            </div>
                        )}
                        <Button
                            variant="contained"
                            size="small"
                            color="secondary"
                            onClick={handleAddRole}
                        >
                            <span>Add Role</span>
                            <SendIcon
                                fontSize="medium"
                                sx={{ marginLeft: 1 }}
                            />
                        </Button>
                    </div>
                </Box>
            </div>
        );
    }
);

export default AddRole;
