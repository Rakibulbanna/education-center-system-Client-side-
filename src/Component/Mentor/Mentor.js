import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Mentors from '../Mentors/Mentors';
import "./Mentor.css"

const Mentor = () => {
    const [mentors, setmentors] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => setmentors(data))
    }, [])
    return (
        <div>
            <Container>
           <h2 className="text-center">Our Mentor:{mentors.length}</h2>
           <Row xs={1} md={3} className="g-4">
            {
                mentors.map(mentor => <Mentors mentor={mentor}
                    key={mentor.id}></Mentors>)
            } 
            </Row>
            </Container>
        </div>
            
        
    );
};

export default Mentor;