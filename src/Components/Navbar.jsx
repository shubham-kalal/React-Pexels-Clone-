import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import TopNavbar from "./TopNavbar";
// import { BsSearch } from "react-icons/bs"


const Navbar = ({ setsearch }) => {
  const Navigate = useNavigate();
  const location = useLocation();

  return (
    <div >
      <TopNavbar />
      <div className="mt-10"></div>
      <div className=" container d-flex  justify-content-between align-items-center my-4 flex-wrap">
        <Button
          variant="outline-light"
          size="lg"
          onClick={() => {
            setsearch("random");
            Navigate("/");
          }}
        >
          Nature
        </Button>
        <Button
          variant="outline-light"
          size="lg"
          onClick={() => {
            setsearch("travel");
            Navigate("/");
          }}
        >
          Travel
        </Button>
        <Button
          variant="outline-light"
          size="lg"
          onClick={() => {
            setsearch("city");
            Navigate("/");
          }}
        >
          City
        </Button>
        <Button
          variant="outline-light"
          size="lg"
          onClick={() => {
            setsearch("car");
            Navigate("/");
          }}
        >
          Cars
        </Button>
        <Button
          variant="outline-light"
          size="lg"
          onClick={() => {
            setsearch("Fashion");
            Navigate("/");
          }}
        >
          Fashion
        </Button>
        <Button
          variant="outline-light"
          size="lg"
          onClick={() => {
            setsearch("Animals");
            Navigate("/");
          }}
        >
          Animals
        </Button>
        <Button
          variant="outline-light"
          size="lg"
          onClick={() => {
            setsearch("Technology");
            Navigate("/");
          }}
        >
          Technology
        </Button>
        <Button
          variant="outline-light"
          size="lg"
          onClick={() => {
            setsearch("Business & Finance");
            Navigate("/");
          }}
        >
          Business & Finance
        </Button>
        <Button
          variant="outline-light"
          size="lg"
          onClick={() => {
            setsearch("Tokyo");
            Navigate("/");
          }}
        >
          Tokyo
        </Button>
        <Button
          variant="outline-light"
          size="lg"
          onClick={() => {
            setsearch("Dubai");
            Navigate("/");
          }}
        >
          Dubai
        </Button>

        {location.pathname == "/saved" ? (
          <Button
            variant="outline-light"
            size="lg"
            onClick={() => Navigate("/")}
          >
            Home
          </Button>
        ) : (
          <Button
            variant="outline-light"
            size="lg"
            onClick={() => Navigate("/saved")}
          >
            Saved
          </Button>
        )}
      </div>

      <div className="container">
        <Form.Group
          className="m-auto"
          controlId="formBasicEmail"
          style={{ width: "100%", maxWidth: "780px" }}
        >
          {location.pathname === "/" && (
            <div className="mb-5">
            <Form.Control
              type="email"
              placeholder="Search here..."
              className="bg-dark text-light "
              onChange={(e) => setsearch(e.target.value)}
            />
{/* <BsSearch /> */}

            </div>
          )}
        </Form.Group>
      </div>
    </div>
  );
};

export default Navbar;
