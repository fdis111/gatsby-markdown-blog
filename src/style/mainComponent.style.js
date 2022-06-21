import styled from "styled-components";

const MainComponent = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,500&display=swap");

  max-width: 65ch;
  padding: 10px;
  margin: auto;
  font-family: "Open Sans", sans-serif;

  color: #555555;
  a {
    color: #555555;
    font-weight: 600;
  }

  h1 {
    color: #000;
  }
  p {
    margin-top: 1.25em;
    margin-bottom: 1.25em;
    line-height: 28px;
  }
`;

export default MainComponent;
