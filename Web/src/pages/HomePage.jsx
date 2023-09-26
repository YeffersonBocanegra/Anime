import React, { useState } from 'react';
import './HomePage.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'



export const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar si el usuario ha iniciado sesión

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // Función para manejar el clic en el botón "Alquilar"
  const handleAlquilarClick = () => {
    if (isLoggedIn) {
      // Si el usuario ha iniciado sesión, aquí puedes realizar la acción de alquiler
      alert('Alquiler exitoso');
    } else {
      // Si el usuario no ha iniciado sesión, muestra un mensaje
      alert('Debes iniciar sesión para alquilar');
    }
  };

  return (
    <>
      <div className="carousel">
        <Carousel
          pauseOnHover={false}
          autoPlay={true}
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 1
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 1
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <img
            src="https://i.pinimg.com/originals/b3/f0/14/b3f0143b2fd7c5dbc47a38b740b0999f.jpg"
            style={{
              display: 'block',
              height: '720px',
              margin: 'auto',
              width: '100%'
            }}
          />
          <img
            src="https://i.pinimg.com/originals/e0/e5/99/e0e599a49165cafb4c4bb438d29d0e09.jpg"
            style={{
              display: 'block',
              height: '720px',
              margin: 'auto',
              width: '100%'
            }}
          />
          <img
            src="https://i.pinimg.com/originals/73/ea/a3/73eaa3e2798059abb21c324d88eb9ccc.jpg"
            style={{
              display: 'block',
              height: '720px',
              margin: 'auto',
              width: '100%'
            }}
          />
          <img
            src="https://i.pinimg.com/originals/16/29/a9/1629a983e3b8bb1eb34e56af3e376ce9.jpg"
            style={{
              display: 'block',
              height: '720px',
              margin: 'auto',
              width: '100%',
            }}
          />
          <img
            src="https://i.pinimg.com/originals/ef/ea/3f/efea3f803aa86ae94e75d44bc8f1097f.jpg"
            style={{
              display: 'block',
              height: '720px',
              margin: 'auto',
              width: '100%'
            }}
          />
          <img
            src="https://i.pinimg.com/originals/fd/d2/34/fdd2349b8473ae5db01da438c1a3ef1d.jpg"
            style={{
              display: 'block',
              height: '720px',
              margin: 'auto',
              width: '100%'
            }}
          />
        </Carousel>
      </div>


      <div className='sction-claro'>
        <h1 className="titulo">Mangas Destacados</h1>
        <div className="productos-home">
          <div className="producto-home">
            <a href="#">
              <div className="producto_img">
                <img src="https://i.pinimg.com/originals/88/d9/3d/88d93da6514e554a01db74b0e8c9aa41.jpg" alt="" />
              </div>
            </a>
            <div className="producto_footer">
              <h1 className="titulo">Overlord</h1>
              <h2 className="descripcion texto-limitado">Un veterano jugador decide quedarse en él juego hasta el cierre. El problema es que pasa la hora de cierre y los NPC han ganado conciencia propia</h2>
              <p className="price"> 70000 </p>
            </div>
            <div className="buttom">
              <button className='btn' onClick={handleAlquilarClick}>
                Alquilar
              </button>
            </div>
          </div>
          <div className="producto-home">
            <a href="#">
              <div className="producto_img">
                <img src="https://i.pinimg.com/originals/73/ea/a3/73eaa3e2798059abb21c324d88eb9ccc.jpg" alt="" />
              </div>
            </a>
            <div className="producto_footer">
              <h1 className="titulo">Black Clover</h1>
              <h2 className="descripcion">En un mundo en el que la magia lo es todo, Asta y Yuno son dos niños huerfanos. Yuno crece grandes poderes mágicos, Asta parece no tener magia.</h2>
              <p className="price"> 60000 </p>
            </div>
            <div className="buttom">
              <button className='btn' onClick={handleAlquilarClick}>
                Alquilar
              </button>
            </div>
          </div>
          <div className="producto-home">
            <a href="#">
              <div className="producto_img">
                <img src="https://i.pinimg.com/originals/4d/5a/fd/4d5afdefa07646789fc0e957ad7f8669.jpg" alt="" />
              </div>
            </a>
            <div className="producto_footer">
              <h1 className="titulo">Bleach</h1>
              <h2 className="descripcion">Narra las aventuras de Ichigo Kurosaki, un adolescente que accidentalmente absorbe los poderes de una shinigami Cegador de Almas.</h2>
              <p className="price"> 80000 </p>
            </div>
            <div className="buttom">
              <button className='btn' onClick={handleAlquilarClick}>
                Alquilar
              </button>
            </div>
          </div>
          <div className="producto-home">
            <a href="#">
              <div className="producto_img">
                <img src="https://i.pinimg.com/originals/8e/e9/5c/8ee95c571e4be779c7cfd3bcb29f2345.jpg" alt="" />
              </div>
            </a>
            <div className="producto_footer">
              <h1 className="titulo">Baki</h1>
              <h2 className="descripcion">Un joven luchador que entrena intensamente para superar a su padre Yujiro Hanma que es uno de los luchadores más potentes del mundo..</h2>
              <p className="price"> 55000 </p>
            </div>
            <div className="buttom">
              <button className='btn' onClick={handleAlquilarClick}>
                Alquilar
              </button>
            </div>
          </div>
          <div className="producto-home">
            <a href="#">
              <div className="producto_img">
                <img src="https://i.pinimg.com/originals/54/ef/1f/54ef1ffbf2a701999f2bf6e590b2512e.jpg" alt="" />
              </div>
            </a>
            <div className="producto_footer">
              <h1 className="titulo">One Piece</h1>
              <h2 className="descripcion">Monkey D. Luffy se niega a que nadie se interponga en su camino para convertirse en Rey de los Piratas. Se lanza a surcar los mares y se convertirá en un capitán.</h2>
              <p className="price"> 85000 </p>
            </div>
            <div className="buttom">
              <button className='btn' onClick={handleAlquilarClick}>
                Alquilar
              </button>
            </div>
          </div>
        </div>

      </div>
      <div className='sction-oscuro'>
        <h1 className="titulo">Podria Interesarte</h1>
        <div className="productos-home">
          <div className="producto-home">
            <a href="#">
              <div className="producto_img">
                <img src="https://i.pinimg.com/originals/4e/b7/78/4eb77890330bb5592dab0224676d6a5d.jpg" alt="" />
              </div>
            </a>
            <div className="producto_footer">
              <h1 className="titulo">Bastard</h1>
              <p className="categoria">Un conflicto que ha perdurado durante siglos, dejando el mundo en ruinas tras el choque de dos monumentales criaturas. El poderoso hechicero Dark Schneider.</p>
              <p className="price">70000</p>
            </div>
            <div className="buttom">
              <button className="btn" onClick={handleAlquilarClick}>
                Alquilar
              </button>
            </div>
          </div>
          <div className="producto-home">
            <a href="#">
              <div className="producto_img">
                <img src="https://i.pinimg.com/originals/c9/b7/75/c9b775ee35aacca603b4526d93a39a4d.jpg" alt="" />
              </div>
            </a>
            <div className="producto_footer">
              <h1 className="titulo">Dr. Stone</h1>
              <p className="categoria">Aventuras de Senku y Taiju, dos adolescentes que se ven atrapados en un mundo post-apocalíptico en el que la raza humana se ha convertido en piedra y ellos buscan...</p>
              <p className="price">60000</p>
            </div>
            <div className="buttom">
              <button className="btn" onClick={handleAlquilarClick}>
                Alquilar
              </button>
            </div>
          </div>
          <div className="producto-home">
            <a href="#">
              <div className="producto_img">
                <img src="https://i.pinimg.com/originals/17/be/75/17be75d9f9ba36b61ff17bf2483d3e29.jpg" alt="" />
              </div>
            </a>
            <div className="producto_footer">
              <h1 className="titulo">Akame Ga Kill</h1>
              <p className="categoria">Tatsumi tras presenciar una horrible masacre llevada a cabo por los corruptos habitantes del imperio y la muerte de...</p>
              <p className="price">45000</p>
            </div>
            <div className="buttom">
              <button className="btn" onClick={handleAlquilarClick}>
                Alquilar
              </button>
            </div>
          </div>
          <div className="producto-home">
            <a href="#">
              <div className="producto_img">
                <img src="https://i.pinimg.com/originals/dd/68/f4/dd68f471545cb8093a678aa328b4cd60.jpg" alt="" />
              </div>
            </a>
            <div className="producto_footer">
              <h1 className="titulo">Mashle</h1>
              <p className="categoria">Ambientada en un mundo mágico, Mash Burnedead entrena día sí y día también, por lo que posee una fuerza sobrehumana… pero ni gota de magia. Pero cuando lo...</p>
              <p className="price">45000</p>
            </div>
            <div className="buttom">
              <button className="btn" onClick={handleAlquilarClick}>
                Alquilar
              </button>
            </div>
          </div>
          <div className="producto-home">
            <a href="#">
              <div className="producto_img">
                <img src="https://i.pinimg.com/originals/88/00/94/88009466a2beb8cbf9e6f5de2ac83096.jpg" alt="" />
              </div>
            </a>
            <div className="producto_footer">
              <h1 className="titulo">Tokyo Ghoul</h1>
              <p className="categoria">El protagonista es Kaneki Ken, un joven corriente que sobrevive fortuitamente al ataque de una ghoul. Sin embargo, para salir adelante le trasplantaron los...</p>
              <p className="price">85000</p>
            </div>
            <div className="buttom">
              <button className="btn" onClick={handleAlquilarClick}>
                Alquilar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
