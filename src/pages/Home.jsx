import { styled } from "twin.macro"
import {
  AiOutlineRight,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai"
import { BiShare } from "react-icons/bi"
import { HiOutlinePhone } from "react-icons/hi"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

const StyledHome = styled.div`
  #cartBtn {
    /* background-color: var(--surface-2); */
    width: 48px;
    height: 48px;
    transition: all 0.3s ease;
  }
  #cardBtns {
    button {
      opacity: .85;
    }
    button:hover {
      opacity: 1;
    }
  }
  .alice-carousel__dots {
    top: 308px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s ease;
    &-item {
      background-color: var(--surface-2);
    }
    .__active {
      background-color: var(--brand);
    }
  }
  .alice-carousel__prev-btn {
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    left: 1rem;
    background-color: #fff;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: .5;
    background-color: var(--surface-3);
    transform: rotate(-90deg);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
  
  .alice-carousel__next-btn {
    opacity: .5;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    right: 1rem;
    background-color: #fff;
    width: 38px;
    height: 38px;
    display: flex;
    transform: rotate(90deg);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    align-items: center;
    justify-content: center;
    background-color: var(--surface-3);
  }

  .alice-carousel__prev-btn-item, .alice-carousel__next-btn-item {
    opacity: 0;
  }

  #hours {
    p {
      font-size: 15px !important;
    }
  }
  #viewAll {
    opacity: .7;
    &:hover {
      background-color: var(--surface-2);
      opacity: 1;
    }
  }
`

const Heading = ({ title }) => (
  <h2 className="px-3 text-[25px] h-20 flex items-center">
    {title}
  </h2>
)

const Hero = () => (
  <div className="relative">
    <img src="images/hero.png" className="w-full" alt="" />
  </div>
)

const FeaturedProducts = () => {
  const products = [
    {
      name: "#SaveQraunProject Stash Sack",
      price: "$24",
      image: "images/products/product-1.png",
    },
    {
      name: "#SaveQraunProject Sherpa Blanket",
      price: "$68.75",
      image: "images/products/product-2.png",
    },
    {
      name: "Voiceless Embrace",
      price: "$24",
      image: "images/products/product-3.png",
    },
  ]
  const ProductCard = ({ name, image, price }) => (
    <div className="overflow-hidden">
      <img src={image} alt="" />
      <div id="cardBtns" className="px-3 flex flex-col pt-3 pb-12 relative ">
        <p className="hover:underline cursor-pointer text-sm font-medium">
          {name}
        </p>
        <span className="text-sm mt-2 pb-1 opacity-75">{price}</span>
        <button
          id="cartBtn"
          className="absolute left-10 bottom-1   p-1 flex items-center justify-center cursor-pointer opacity-50"
        >
          <AiOutlineShoppingCart size={25} />
        </button>
        <button
          id="cartBtn"
          className="absolute left-0 bottom-1 opacity-80 flex items-center justify-center cursor-pointer "
        >
          <AiOutlineHeart size={24} className="text-red-400 opacity-80" />
        </button>
        <button
          id="cartBtn"
          className="absolute left-[85px] bottom-1 opacity-90 flex items-center justify-center cursor-pointer  "
        >
          <BiShare size={22} className="" />
        </button>
      </div>
    </div>
  )
  return (
    <div>
      <Heading title="Featured Products" />
      
      <div className="flex flex-col">
        {products.map((product, i) => (
          <ProductCard
            key={i}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
      <div id="viewAll" className="flex items-center gap-1 mt-3  h-20 justify-center  hover:cursor-pointer rounded-full mx-20 transition-all duration-300 border">
        <p className="text-sm hover:underline cursor-pointer font-medium">
          View All Products
        </p>
        <AiOutlineRight size={16} />
      </div>
    </div>
  )
}

const AboutUs = () => {
  const handleDragStart = (e) => e.preventDefault()

  const cards = [
    {
      title: "Splendifikiss",
      desc: "We are a 501(c)(3) pending organization operated by the executive board of the SplendifikissRecords.com Music Label & Management Firm.",
      image: "images/splendifikiss.jpg",
    },
    {
      title: "Our History",
      desc: 'We define Splendifikiss as a splendid state of terrificness. We take our name "Splendifikiss" from a song by our president Matt "Big Stats" Frankel. ',
      image: "images/our-history.jpg",
    },
    {
      title: "Our Mission",
      desc: "Our number one priority is to empower the demographics that have felt voiceless or like their voice had been taken from them. We aim to provide grants to innercity creatives and give back to their community. We also hope to one day revolutionize the recording industry through our work.",
      image: "images/our-mission.png",
    },
  ]
  const Card = ({ title, desc, image, index }) => (
    <div className="flex flex-col">
      <img
        src={image || "http://unsplash.it/400/400?random&gravity=center"}
        alt=""
        className="object-cover w-full max-h-[340px]"
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold italic  h-20 flex items-center justify-center">
          {title}
        </h1>
        <p className="text-sm px-4 -mt-3   text-center pb-8">{desc}</p>
      </div>
    </div>
  )
  const items2 = [
    <Card title={cards[2].title} desc={cards[2].desc} image={cards[2].image} />,
    <Card title={cards[1].title} desc={cards[1].desc} image={cards[1].image} />,
    <Card title={cards[0].title} desc={cards[0].desc} image={cards[0].image} />,
  ]
  const Gallery = () => {
    return (
      <div className="max-w-[375px]">
        <AliceCarousel
          animationType="fadeout"
          mouseTracking
          autoPlay
          infinite
          autoPlayInterval={6000}
          items={items2}
        />
      </div>
    )
  }
  return (
    <div>
      {/* <Heading title="About Us" /> */}
      <Gallery />
    </div>
  )
}

const Subscribe = () => {
  return (
    <div className="w-full py-8">
      <Heading title="Subscribe" />
      <div className="px-3">
        <input type="email" placeholder="Email" className="w-full px-3 py-2" />
      </div>
      <div className="px-3">
        <button className="w-full min-w-xl py-2 uppercase font-semibold bg-red-400 text-white rounded mt-4">
          Sign up
        </button>
      </div>
      <p className="text-center text-xs mt-2">
        Get 10% off your first purchase when you sign up for our newsletter!
      </p>
    </div>
  )
}

const ContactUs = () => {
  return (
    <div className="pb-8">
      <Heading title="Contact" />

      <h4 className=" px-3 opacity-80 -mt-4 mb-4 text-xs">Drop us a line!</h4>
      <div className="px-3 mt-4 flex flex-col gap-4">
        <input type="text" placeholder="Name" className="w-full px-3 py-2" />
        <input type="text" placeholder="Email" className="w-full px-3 py-2" />
        <textarea placeholder="Message" className="w-full px-3 py-2" />
      </div>
      <div className="px-3">
        <button className="w-full min-w-xl py-2 uppercase font-semibold bg-red-400 text-white rounded mt-4">
          Send
        </button>
      </div>
      <p className="text-center text-xs my-2 mb-4">
        This site is protected by reCAPTCHA and the Google Privacy Policy and
        Terms of Service apply.
      </p>
      <div className="py-5  w-full text-center">
        Better yet, come see us in person! We love our customers, so feel free
        to visit during normal business hours.
      </div>
      <div className="px-3 flex items-center justify-center gap-2">
        <HiOutlinePhone size={24} className="text-red-400" />
        <p className="text-sm font-medium">(323) 380-0944</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <h2 className="text-xl mb-2">Hours</h2>
        <ul id="hours" className="w-full">
          <li className="flex max-w-[45%] mx-auto">
            <p className="flex-1">Mon - Fri</p> <p>9AM - 5PM</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

const HelpUs = () => (
  <div className="relative">
    <img src="http://unsplash.it/g/600/600?random&gravity=center" alt="" />
    <div className="absolute top-0 left-0 w-full h-full px-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30"></div>
    <div className="absolute top-0 left-0 w-full h-full px-3 bg-black opacity-20"></div>
    <div className="absolute top-0 left-0 w-full h-full px-3">
      <div className="flex flex-col items-center justify-center h-full gap-6">
        <h2 className="text-center text-3xl font-bold text-white">
          Help Our Cause
        </h2>
        <p className="text-center text-sm leading-5 text-white">
          Your support and contributions will enable us to meet our goals and
          improve conditions. Your generous donation will help fund our mission.
        </p>
        <button className="bg-blue-400 text-white font-bold uppercase px-8 py-4 mt-1 z-20">
          Donate Now
        </button>
        <img src="images/credit.png" className="w-32 -mt-3" alt="" />
      </div>
    </div>
  </div>
)

const Home = () => {
  return (
    <StyledHome>
      <AboutUs />
      <Hero />
      <FeaturedProducts />
      <Subscribe />
      <ContactUs />
      <HelpUs />
    </StyledHome>
  )
}
export default Home
