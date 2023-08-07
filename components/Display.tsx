import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

// interface Type {
//   name: String;
//   description: String;
//   id: Number;
// }
const Display = (props: any) => {
  return (
    <div>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>{props.value.name}</MDBCardTitle>
          <MDBCardText>{props.value.description}</MDBCardText>
          <MDBBtn
            color="danger"
            className="me-3"
            onClick={() => {
              props.onDelete(props.value.id);
            }}
          >
            Delete
          </MDBBtn>
          <Link to={`/updateProduct/${props.value.id}`}>
            <MDBBtn color="warning">Edit</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default Display;
