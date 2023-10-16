const Pool = require("../config/db");
const selectAll = ({ limit, offset, sort, sortby, keyword }) => {
  return Pool.query(`SELECT * FROM news where 	title ilike '%${keyword}%' ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`);
};

const selectSearchArticles = ({ keyword, sort }) => {
  return Pool.query(`SELECT * FROM news  where 	title ilike '%${keyword}%'`);
};

const select = (id) => {
  return Pool.query(`SELECT * FROM news  WHERE id='${id}'`);
};
const insert = (data) => {
  const { id, title, content, writer, photo, id_user } = data;
  return Pool.query(`INSERT INTO news (id,writer,title,content,image,id_user ) VALUES (${id},'${writer}','${title}','${content}','${photo}','${id_user}')`);
};
const update = (data) => {
  const { id, title, content, writer, photo, id_user } = data;
  return Pool.query(`UPDATE news  SET writer='${writer}', title='${title}', content='${content}', image='${photo}',id_user='${id_user}'  WHERE id='${id}'`);
};
const deleteData = (id) => {
  return Pool.query(`DELETE FROM news  WHERE id=${id}`);
};

const countData = () => {
  return Pool.query("SELECT COUNT(*) FROM news ");
};

const findId = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT id FROM news  WHERE id=${id}`, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    })
  );
};

module.exports = {
  selectAll,
  selectSearchArticles,
  select,
  insert,
  update,
  deleteData,
  countData,
  findId,
};
