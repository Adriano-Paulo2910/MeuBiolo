import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Imagens para o carrossel
const sliderImages = [
    { src: "./assets/img/pub-1.jpg", alt: "Publicidade 1" },
    { src: "../assets/img/pub-2.jpg", alt: "Publicidade 1" },
    { src: "../assets/img/pub-3.jpg", alt: "Publicidade 1" },
];

const PubPainel = () => {
    // Configurações do carrossel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    return (
        <div>
            {/* Área de Publicidade com Slider */}
            <section className="relative mb-8">
                <Slider {...settings}>
                    {sliderImages.map((image, index) => (
                        <div key={index}>
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-64 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    ))}
                </Slider>
            </section>
        </div>
    );
};

export default PubPainel;
