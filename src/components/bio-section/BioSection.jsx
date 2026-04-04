import React from "react";
import "./BioSection.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';

function IntroSection() {
    return (
        <>
            <div className="code-background"></div>
            <div className="back-color">
                <Container className="bio-container">

                    <Row className="main-row">
                        <Col className="d-flex align-items-center flex-column justify-content-around" md={6} sm={12}>
                            <Row>
                                <h1 className="fw-bold text-dark text-opacity-75">Mini Biografia</h1>
                            </Row>
                            <Image className="my-pic shadow mb-5 bg-white" src="./img/EmpEu.jpeg" rounded fluid />
                        </Col>
                        <Col>
                            <Row className="bio-text p-2">
                                Meu nome completo é Lucas Camarino Emerick de Almeida, nasci em 12/07/2001, Belo Horizonte, estudei no Colégio São Paulo e depois no Colégio estadual Leopoldo de Miranda. Decidi aprofundar meus estudos fazendo uma faculdade de Engenharia, porém com 21 anos decidi reorientar meus estudos fazendo Ciência da computação na PUC, onde estou hoje em dia.
                            </Row>
                            <Row className="bio-text p-2">
                                Além dos estudos acadêmicos, aos 22 anos eu me ofereci para prestar um trabalho voluntário desenvolvendo do 0 um aplicativo de celular chamado Inglês Up que consiste em geração de resumos de livros em inglês e portugues e uma página que o usuário visualiza ao mesmo tempo esses 2 textos e uma voz robótica que lia o texto em inglês e grifava o que já tinha lido nos dois textos, assim o usuário podia acompanhar a voz e ir trabalhando o seu conhecimento de inglês.
                            </Row>
                            <Row className="bio-text p-2">
                                Nesse trabalho desenvolvi aplicações tanto no contexto de back-end quanto front-end e trabalhei usando metodologias ágeis, o que foi muito bom. Além disso, ja desenvolvi diversos projetos em diferentes linguagens de programação, alguns com equipe e outros sozinho, para objetivos acadêmicos ou pessoais, com tudo isso desenvolvi alguma aptidão nessa área. Abaixo estão algumas habilidades que eu adquiri no contexto de programação.
                            </Row>
                            <Row>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0" className="shadow bg-white rounded">
                                        <Accordion.Header>Linguagens de Programação</Accordion.Header>
                                        <Accordion.Body>
                                            Ao longo da minha jornada acadêmica consegui acumular algum conhecimento em algumas linguagens específicas, tais como: Java, C/C++, Python, Javascript e SQL, todas essas a nível intermediário. Já outras, apesar de ter um pouco menos de experiencia, tive um contato legal com elas, tanto dentro da faculdade ou até mesmo durante projetos de sistemas profissionais, tais como: C#, NoSQL e Dart. Se quiser ver projetos que usei alguma dessas linguagens é só ir para a aba "Projetos" nesse site.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1" className="shadow bg-white rounded">
                                        <Accordion.Header>Frameworks</Accordion.Header>
                                        <Accordion.Body>
                                            Não só de linguagens vive um programador. Além dessas linguagens aprendi o funcionamento de alguns frameworks muito importantes, principalmente para o desenvolvimento Web, como: React, Flutter, FlutterFlow, Bootstrap. Um bom exemplo do uso disso é esse site, que foi inteiramente desenvolvido com React
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2" className="shadow bg-white rounded">
                                        <Accordion.Header>Hardware</Accordion.Header>
                                        <Accordion.Body>
                                            Além do Software, aprendi bastante sobre o funcionamento de cada componente constituinte de um computador. Não só isso, mas sei montar máquinas, identificar problemas relacionadas ao correto funcionamento do Hardware e resolve-los.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3" className="shadow bg-white rounded">
                                        <Accordion.Header>Adicionais</Accordion.Header>
                                        <Accordion.Body>
                                            Pacote Office (Excel, Word, Power Point), HTML, CSS, Noções de estatística, e o uso de Metodologias ágeis.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>

    );
}

export default IntroSection