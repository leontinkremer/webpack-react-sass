import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import "./_Post.scss";

const Post = ({ post, id }) => {
  // Получение истории
  const history = useHistory();

  // Перенесена функция из Posts
  // Создаём функцию для перехода к списку постов
  const goToList = () => {
    // Передаём значение и проверяем есть ли запись. Если нет то заменяем историю
    post ? history.push("/posts") : history.replace("/posts");
  };

  // Выведем заголовок если есть запись и сообщение об ошибке если нет
  return (
    <>
      <Button handleClick={goToList}> В список записей</Button>
      <h1>{post ? post.title : `post with id: ${id} is not found`}</h1>
    </>
  );
};

Post.propTypes = {};

Post.defaultProps = {};

export default Post;
