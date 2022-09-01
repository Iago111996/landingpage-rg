import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  header {
    max-width: 1200px;
    min-height: 4rem;

    margin: 0 auto;

    padding: 1rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 650px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 260px;
      height: 80px;
    }
  }

  main {
    width: 100%;
  }

  footer {
    width: 100%;

    padding-top: 2rem;
    padding-bottom: 3rem;

    border-top: 1px solid ${({ theme }) => theme.colors.gray_line};

    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      font-family: ${({ theme }) => theme.fonts.medium};
      font-size: 0.8rem;

      color: ${({ theme }) => theme.colors.primary};

      padding-top: 1rem;
    }
  }
`;
