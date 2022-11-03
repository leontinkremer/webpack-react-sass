import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../../../fastCompanyComponents/userPage";
import UsersList from "../../../fastCompanyComponents/usersList";
const Users = () => {
  const params = useParams();
  const { userId } = params;
  return <>{userId ? <UserPage userId={userId} /> : <UsersList />}</>;
};

export default Users;
