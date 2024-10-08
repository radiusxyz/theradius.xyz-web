import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  background: #ff5c00;
  @media (max-width: 750px) {
    position: sticky;
    top: 0;
    width: 100%;
    height: 40px;
    z-index: 1;
  }
`;

const Text = styled.div`
  color: #fff;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Link = styled.a`
  color: #fff;
`;

const TopAlert = () => {
  return (
    <Container>
      <Text>
        Our first testnet is live! Sign up to participate&nbsp;
        <Link
          href="https://7r9olam1w6v.typeform.com/to/k3fkrwY6"
          target="_blank"
        >
          here
        </Link>
        .
      </Text>
    </Container>
  );
};

export default TopAlert;
