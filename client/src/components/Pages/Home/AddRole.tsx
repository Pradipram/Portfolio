import React from "react";

const AddRole = React.forwardRef<HTMLDivElement>((props, ref) => {
    return <div ref={ref}>Add Role</div>;
});

export default AddRole;
