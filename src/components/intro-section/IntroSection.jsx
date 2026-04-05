import React from "react";
import "./IntroSection.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function IntroSection() {
    return (
        <>
            <div className="code-background"></div>
            <div className="back-color">
                <Container className="intro-container">
                    <div className="perfil"></div>
                    <Row className="title">
                        <h1 className="fw-bold heading-theme">Quem sou eu?</h1>
                    </Row>
                    <Card className="shadow p-3 mb-5 card-theme rounded">
                        <Row>
                            <Col sm={12} md={6} className="text pt-sm-2">Um Cientista da Computação em fase de desenvolvimento pela PUC Minas um entusiasta por novas tecnologia. Acredito que curiosidade e persistência é o que me define. Busco sempre colocar a mão na massa, me colocar a frente e levar minha equipe comigo. Me considero bastante comunicativo e criativo. Sempre me interessei por inovação e tecnologia, com 14 anos participei de um curso de robótica e tive minha iniciação no mundo da programação.</Col>
                            <Col sm={12} md={6} className="text pt-sm-2">Hoje em dia, já trabalhei como desenvolvedor Full Stack. Tenho experiência em desenvolvimento de aplicativos para celular e aplicações Webs, além de criação de APIs e desenvolvimento de Banco de Dados SQL. A disciplina é o pilar para a perfeição. Tudo que se faz repetidas vezes e com excelência, se torna algo absoluto e pleno. Se ficou curioso e quer saber mais sobre mim visite a minha Bio😌</Col>
                        </Row>
                    </Card>
                </Container>
            </div>
        </>
    );
}

export default IntroSection