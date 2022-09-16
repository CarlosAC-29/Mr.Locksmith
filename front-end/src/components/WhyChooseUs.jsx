import House from '../images/casa.jpg'
import Person from '../images/persona.jpeg'
import Car from '../images/auto.JPG'
import './styles/WhyChooseUs.scss';

const WhyChooseUs = () => {
    return (
        <div className="container">
            <div className="title">
                <h1>Why choose us?</h1>
            </div>
            <div className="all">
            <div className="one">
                <div className="text">
                    <div className="number">
                        <h1>1</h1>
                    </div>
                    <p>We are a hardworking family business
                        that seeks to provide a helping hand
                        to our customers along with excellent
                        service so they can get on with their
                        day</p>
                </div>
                <div className="image">
                    <img src={House} alt="house" />
                </div>
            </div>
            <div className="two">
                <div className="image">
                    <img src={Car} alt="house" />
                </div>
                <div className="text">
                    <div className="number">
                        <h1>2</h1>
                    </div>
                    <p>We understand how frustrating it is
                        to be locked out of your home or car,
                        or to lose your keys or forget the
                        code to your safe, but our outstanding
                        team of professionals have you covered
                        and will solve your problem right away</p>
                </div>
            </div>
            <div className="three">
                <div className="text">
                    <div className="number">
                        <h1>3</h1>
                    </div>
                    <p>When you call you don't have to deal 
                        with machines, menus or customer 
                        service representatives, you will 
                        speak directly with our technician 
                        to get your problem resolved as 
                        quickly as possible</p>
                </div>
                <div className="image">
                    <img src={Person} alt="house" />
                </div>
            </div>
        </div>
        </div>
    )
}
export default WhyChooseUs