import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { PersonFill, Heart, ChatDots, HeartFill } from "react-bootstrap-icons";
import Badge from "react-bootstrap/Badge";
import { useParams } from "react-router-dom";

function BlogDetail() {

  const params = useParams()
  console.log(params.postId)

  return (
    <Container className="mt-4">
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/1028x800.png" />
        <Card.Body>
          <Card.Title>
            <Card.Link href="#">Card title {params.postId}</Card.Link>
            <Card.Link href="#">
              <Card.Link className="position-relative" href="#">
                <Heart />
                <Badge
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"
                  bg="secondary"
                >
                  9
                </Badge>
              </Card.Link>
              <Card.Link className="position-relative" href="#">
                <ChatDots />
                <Badge
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"
                  bg="secondary"
                >
                  5
                </Badge>
              </Card.Link>
            </Card.Link>
            <Card.Link href="#">
              <PersonFill/>  Admin
            </Card.Link>
          </Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer. This is
            a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.This is a
            wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer. This is a
            wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer. This is
            a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.This is a
            wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer. This is a
            wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default BlogDetail;
