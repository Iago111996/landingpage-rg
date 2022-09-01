import { Container } from "./styles";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function FlipBook() {
  const images = [
    {
      original: "./assets/img1.jpeg",
      thumbnail: "./assets/img1.jpeg",
    },
    {
      original: "./assets/img2.jpeg",
      thumbnail: "./assets/img2.jpeg",
    },
    {
      original: "./assets/img3.jpeg",
      thumbnail: "./assets/img3.jpeg",
    },
    {
      original: "./assets/img4.jpeg",
      thumbnail: "./assets/img4.jpeg",
    },
    {
      original: "./assets/img5.jpeg",
      thumbnail: "./assets/img5.jpeg",
    },
    {
      original: "./assets/img6.jpeg",
      thumbnail: "./assets/img6.jpeg",
    },
    {
      original: "./assets/img7.jpeg",
      thumbnail: "./assets/img7.jpeg",
    },
    {
      original: "./assets/img8.jpeg",
      thumbnail: "./assets/img8.jpeg",
    },
    {
      original: "./assets/img9.jpeg",
      thumbnail: "./assets/img9.jpeg",
    },
    {
      original: "./assets/img10.jpeg",
      thumbnail: "./assets/img10.jpeg",
    },
    {
      original: "./assets/img11.jpeg",
      thumbnail: "./assets/img11.jpeg",
    },
    {
      original: "./assets/img12.jpeg",
      thumbnail: "./assets/img12.jpeg",
    },
  ];

  return (
    <Container>
      <ImageGallery items={images} showThumbnails={false} autoPlay />
    </Container>
  );
}
