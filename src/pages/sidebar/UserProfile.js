import { Form } from "react-bootstrap";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <>
      <header>Header</header>

      <section id="details_section">
        <div className="display_img_section">
          <div className="img_frame">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="user"
            />
          </div>

          <Form.Group controlId="formFile" className="mb-3 upload_img_form">
            <Form.Label id="img_upload_label">
              <ion-icon name="camera-sharp"></ion-icon>
            </Form.Label>
            <Form.Control type="file" hidden />
          </Form.Group>
        </div>

        <div className="text_frame">
          <h2 className="role">
            <span>Role:</span> Normal
          </h2>
          <h2 className="subscription">
            <span>Subscription: </span>Regular
          </h2>
          <h2 className="username">Arinola Oluwachiamaka</h2>
          <h2 className="email">Ariamaka@mommies.com</h2>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
