import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { paginate } from "../apps/FastCompany/utils/paginate";
import Pagination from "./pagination";
import api from "../apps/FastCompany/api";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import UserTable from "./usersTable";
import _ from "lodash";
import TextField from "../preComponents/TextField/TextField";

const UsersList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfession] = useState();
  const [selectedProf, setSelectedProf] = useState();
  const [searchedUser, setSearchedUser] = useState(""); // "Моника Геллер"
  const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
  const pageSize = 8;

  const [users, setUsers] = useState();
  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data));
  }, []);
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  const handleToggleBookMark = (id) => {
    const newArray = users.map((user) => {
      if (user._id === id) {
        return { ...user, bookmark: !user.bookmark };
      }
      return user;
    });
    setUsers(newArray);
  };

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);

  const handleProfessionSelect = (item) => {
    setSearchedUser("");
    setSelectedProf(item);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const handleSort = (item) => {
    setSortBy(item);
  };

  // doing: ...
  const handleSearch = (item) => {
    setSelectedProf();
    setSearchedUser(item.target.value);
  };

  if (users) {
    let filteredUsers = [];

    if (searchedUser) {
      filteredUsers = users.filter((user) =>
        user.name
          .trim()
          .toLowerCase()
          .includes(searchedUser.trim().toLowerCase())
      );
    } else if (selectedProf) {
      filteredUsers = users.filter(
        (user) =>
          JSON.stringify(user.profession) === JSON.stringify(selectedProf)
      );
    } else {
      filteredUsers = users;
    }

    const count = filteredUsers.length;
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
    const usersCrop = paginate(sortedUsers, currentPage, pageSize);
    const clearFilter = () => {
      setSelectedProf();
      setSearchedUser("");
    };

    return (
      <div className="d-flex">
        {
          // filter
          professions && (
            <div className="d-flex flex-column flex-shrink-0 p-3">
              <GroupList
                selectedItem={selectedProf}
                items={professions}
                onItemSelect={handleProfessionSelect}
              />
              <button className="btn btn-secondary mt-2" onClick={clearFilter}>
                {" "}
                Очистить
              </button>
            </div>
          )
        }
        <div className="d-flex flex-column">
          <SearchStatus length={count} />
          <div className="u-margin-top-sm">
            <TextField
              label="Поиск"
              onChange={handleSearch}
              value={searchedUser}
            />
          </div>

          {
            // user table

            count > 0 && (
              <UserTable
                users={usersCrop}
                onSort={handleSort}
                selectedSort={sortBy}
                onDelete={handleDelete}
                onToggleBookMark={handleToggleBookMark}
              />
            )
          }
          <div className="d-flex justify-content-center">
            {
              // pagination
            }
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
  return "loading...";
};
UsersList.propTypes = {
  users: PropTypes.array,
};

export default UsersList;
