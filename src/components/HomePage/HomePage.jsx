import React from 'react'
import './HomePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faBars, faMap } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const cache = {};
const maincache = {};
function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}
importAll(require.context('../../../public/img', false, /\.(jpg|jpeg|png|gif|bmp)$/));
const imageFiles = Object.keys(cache).map((key) => cache[key]);

function importMain(r) {
    r.keys().forEach((key) => (maincache[key] = r(key)));
}
importMain(require.context('../../../public/mainimg', false, /\.(jpg)$/));
const mainImage = Object.keys(maincache).map((key) => maincache[key]);

const HomePage = () => {
    const navigate = useNavigate();
    const handleClick = (param) => {
        alert(param);
    }
    const handleChat = () => {
        console.log('Chat with Bonnie');
        navigate(`/chat`);
    }
    return (
        <div className="container row">
            <div className='column1'>
                <img src={mainImage[0]} alt="1"/>
            </div>
            <div className="image-column column2">
                {imageFiles.map((image,i) => (
                    <img className="image" key={i}  src={image} alt={` ${i + 1}`}/>
                ))}
            </div>
            <div className="text-button-column column3">
                <h2 className='title'>Nobu Hotel Palo Alto</h2>
                <h5 className='subtitle'>Garden Zen Package</h5>
                <span className='stars'>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star unchecked"></span>
                    <span className='startext'>3,446</span>
                </span>
                <hr/>
                <h5 className='subtitle'>
                    Located in the heart of downtown Palo Alto, within walking distance of a variety of dining and shopping, 
                    the Nobu Hotel Palo Alto has recently unveiled all new guest rooms... Read more
                </h5>
                <hr/>
                <div className='buttondiv'>
                    <button onClick={()=>{handleClick('Video Tour')}}><FontAwesomeIcon icon={faVideo} /> Video tour</button>
                    <button onClick={()=>{handleClick('Latest Menu')}}><FontAwesomeIcon icon={faBars} /> Latest Menu</button>
                    <button onClick={()=>{handleClick('Floor Plans')}}><FontAwesomeIcon icon={faMap} /> Floor Plans</button>
                </div>
                <hr/>
                <h4 >Venue Features</h4>
                <div>
                    <table style={{ borderCollapse: 'collapse' }}>
                        <tbody>
                        <tr>
                            <td>Room service</td>
                            <td>Spa</td>
                        </tr>
                        <tr>
                            <td>Beach chairs</td>
                            <td>Fitness Center</td>
                        </tr>
                        <tr>
                            <td>Room service</td>
                            <td>Spa</td>
                        </tr>
                        <tr>
                            <td>Beach chairs</td>
                            <td>Fitness Center</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <hr/>
                <h4>Event spaces</h4>
                <div>
                    <table style={{ borderCollapse: 'collapse' }}>
                        <tbody>
                        <tr>
                            <td>Garden event space</td>
                            <td>Garden dining room</td>
                            <td>Zen meeting</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <hr/>
                <div className='buttondiv'>
                    <button onClick={handleChat}>Customize with Bonnie</button>
                    <button onClick={()=>{handleClick('Book now')}}>Book now</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage