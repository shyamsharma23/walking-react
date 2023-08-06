import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

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
            onClick={() => {
              props.onDelete(props.value.id);
            }}
          >
            Delete
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default Display;
