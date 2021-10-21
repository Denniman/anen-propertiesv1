import styled from 'styled-components';
import Theme from '../Theme';

// export const Image = styled.img`
//   width: 100%;
//   /* display: block; */
//   height: 30rem;
//   margin-right: 2rem;
//   position: relative;

//   &:hover ~ .image__overlay p {
//     /* display: none; */
//   }
// `;

export const Text = styled.p`
  font-size: 1.6rem;
`;

export const ImageContainer = styled.div`
  margin-right: 1.5rem;
`;

export const Container = styled.div`
  width: 100%;

  .image {
    width: 100%;
    /* display: block; */
    height: 30rem;
    margin-right: 2rem;
    position: relative;
  }

  .image__overlay {
    /* position: absolute; */
    top: 1px;
    right: 0;
    z-index: auto;
  }

  .slick-next,
  .slick-prev {
    padding: 1rem 1.5rem;
    width: 5rem;
    height: 5rem;
    border: none;
    border-radius: 50%;
    z-index: 99;
    box-shadow: rgb(35 35 35 / 50%) 0px 0px 20px 5px;
    top: 50%;
    background-color: ${Theme.colorPallete.darkBlue};
  }
`;
