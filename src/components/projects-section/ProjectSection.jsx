import React, { useState, useEffect } from 'react';
import "./ProjectSection.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap';

function ProjectSection() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/lunatos/repos`)
      .then(response => response.json())
      .then(data => {
        setRepos(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="code-background"></div>
      <div className="back-color">
        <Container className="project-container">
          <Row className='justify-content-center'>
            <h2 className='p-2 fw-bold text-dark'>Meus Repositorios Publicos no GitHub:</h2>
            <Col sm="6" className='p-0' onMouseLeave={() => setHovered(null)}>
              {repos.map((repo, index) => (
                <Card className="shadow p-3 bg-white rounded repo-item" onMouseEnter={() => setHovered(index)} 
                style={{
                    transform: hovered === index ? 'scale(1.1)' : hovered === null? 'scale(1)' : 'scale(0.9)',
                    marginBottom: hovered === index? '.5rem' : hovered === null? '.25rem' : '-.5rem'
                  }}>
                  <Row>
                    <h3 className='fw-bold text-dark text-opacity-75'>{repo.name}</h3>
                  </Row>
                  <Row>
                  <p className="text-center text-secondary bg-light rounded">{repo.description}</p>
                  </Row>
                  <Row>
                    <Link
                      class="github-link"
                      to={repo.html_url}
                      target='_blank'
                      aria-label='GitHub'
                    >
                      <i class="fa-brands fa-github"></i> {repo.html_url}
                    </Link>
                  </Row>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProjectSection;