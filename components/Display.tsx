import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";

const Display = (props: any) => {
  return (
    <div>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>{props.value.name}</MDBCardTitle>
          <MDBCardText>{props.value.description}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default Display;
