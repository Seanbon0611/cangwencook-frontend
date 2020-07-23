import React from "react";

const AdminPanel = ({ firstName }) => {
  return (
    <div>
      <h3>{`Hello ${firstName}(Admin)`}</h3>
    </div>
  );
};

export default AdminPanel;
