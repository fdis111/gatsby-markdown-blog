import styled from "styled-components";

const MainComponent = styled.main`
  /* @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,500&display=swap"); */
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");
  max-width: 65ch;
  padding: 10px;
  margin: auto;
  font-family: "Inter", sans-serif;
  line-height: 26px;
  /* font-family: "Open Sans", sans-serif; */

  color: #121212;
  a {
    color: #121212;
    font-weight: 600;
    text-decoration: none;
  }

  h1 {
    color: #121212;
  }
  p {
    margin-top: 1.25em;
    margin-bottom: 1.25em;
  }
`;

export default MainComponent;
