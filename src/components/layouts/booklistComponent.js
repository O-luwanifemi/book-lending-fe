    import { Card, Button, Accordion} from 'react-bootstrap'

    const BookList = () => {
        return (
    <>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://orion-uploads.openroadmedia.com/sm_85085962b6b1-knight-secrets.jpg" />
        <Card.Body>
            <Card.Title>SPY</Card.Title>
            <Card.Author>John Sugar</Card.Author>
            <Card.Category>John Sugar</Card.Category>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
            <Accordion.Header>Description</Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
            </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            <Card.Year>2021</Card.Year>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    </>
    )
    }


    export default BookList
