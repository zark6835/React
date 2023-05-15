import { Formik } from "formik";
import { useContext} from "react";
import { PostContext } from "../../context/PostProvider";

import "./style.css";

const Form = () => {
  const { data, setData } = useContext(PostContext);

  const handleSubmit = (values) => {
    setData([values, ...data]);
  };
  return (
    <div className="wrapper">
      <h1 className="title">Додайте новий пост</h1>
      <Formik
        initialValues={{ title: "", body: ""}}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit }) => (
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="form-title"
              type="text"
              name="title"
              onChange={handleChange}
              placeholder="заголовок"
            />

            <input
              className="form-body"
              type="text"
              name="body"
              onChange={handleChange}
              placeholder="текст"
            />

            <button className="form-btn" type="submit">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
