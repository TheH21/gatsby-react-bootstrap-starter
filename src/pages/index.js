import React from "react"
import { Row, Col, Container, ListGroup, Carousel } from "react-bootstrap"
import slide1 from "../images/slideone.jpg"
import slide2 from "../images/slidetwo.jpg"
import slide3 from "../images/slidethree.jpg"
import slide4 from "../images/slidefour.jpg"


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
      <Carousel id="homepageCarousel" interval="10000">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide1}
      alt="First slide"
      fluid
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide3}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide4}
      alt="Fourth slide"
    />
  </Carousel.Item>
</Carousel>
<Container fluid id="fluos">hi</Container>
<Row />
<Col />
<ListGroup />
  </Layout>
)

export default IndexPage
