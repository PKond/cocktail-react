import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(newsletterUrl, data);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    console.log("🚀 ~ action ~ error:", error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Our Newsletter
      </h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
          <input
            type="text"
            className="form-input"
            name="name"
            id="name"
            required
          />
        </label>
      </div>
      {/* lastName */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          Last Name
          <input
            type="text"
            className="form-input"
            name="lastName"
            id="lastName"
            required
          />
        </label>
      </div>
      {/* email */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Name
          <input
            type="text"
            className="form-input"
            name="email"
            id="email"
            required
            defaultValue="test@test.com"
          />
        </label>
      </div>

      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
		disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting' : 'Submit'}
      </button>
    </Form>
  );
};
export default Newsletter;
