import React from 'react'
import './styles/Locations.scss';
import { IoLocationSharp } from 'react-icons/io5';

export default function Locations() {

  const SaltLakeMap = () => {
    var mapG = document.getElementById("MapG");
    mapG.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162668.36187046726!2d-111.97062286315197!3d40.74883555230188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87523d9488d131ed%3A0x5b53b7a0484d31ca!2sSalt%20Lake%20City%2C%20Utah%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1663532981760!5m2!1ses!2sco";
  }

  const ProvoMap = () => {
    var mapG = document.getElementById("MapG");
    mapG.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97434.36480619403!2d-111.70894822042386!3d40.257444794607906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d9271930bf1bf%3A0x1d90f12600b556ef!2sProvo%2C%20Utah%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1663533106008!5m2!1ses!2sco"
  }

  const OgdenMap = () => {
    var mapG = document.getElementById("MapG");
    mapG.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96030.43938474295!2d-112.04271354849199!3d41.22283325006059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87530e94da9c4d7b%3A0x61dcd77b34b32c!2sOgden%2C%20Utah%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1663533168921!5m2!1ses!2sco"
  }

  const TooeleMap = () => {
    var mapG = document.getElementById("MapG");
    mapG.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48512.01076087682!2d-112.34852236452713!3d40.54157429021526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752a6083e8433bb%3A0xba03bffbc79018b0!2sTooele%2C%20Utah%2084074%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1663533280031!5m2!1ses!2sco"
  }

  const ParkCityMap = () => {
    var mapG = document.getElementById("MapG");
    mapG.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48434.6917529038!2d-111.53498086393559!3d40.6482217832045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87520f632c6303fd%3A0xd871c4df25375794!2sPark%20City%2C%20Utah%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1663533339960!5m2!1ses!2sco"
  }

  return (
    <div className="allC">
      <div className="row">

        <div className="cityBorder">
          <div className="title">
            <h2><IoLocationSharp />Locations</h2>
          </div>
          <div className="cityButtons">
            <ul>
              <li><button type="button" className="btn" onClick={SaltLakeMap}><b>Salt Lake City</b></button></li>
              <li><button type="button" className="btn" onClick={ProvoMap}><b>Provo</b></button></li>
              <li><button type="button" className="btn" onClick={OgdenMap}><b>Odgen</b></button></li>
              <li><button type="button" className="btn" onClick={TooeleMap}><b>Tooele</b></button></li>
              <li><button type="button" className="btn" onClick={ParkCityMap}><b>Park City</b></button></li>
            </ul>
          </div>
        </div>
        <div>
          <iframe id="MapG" title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146786.1122428654!2d-113.75700310965728!3d39.62645376692855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874c6bc78f13f9cd%3A0xbddf4aa56cd7463f!2sUtah%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1663532469591!5m2!1ses!2sco" width="800" height="600"></iframe>
        </div>

      </div>
    </div>
  )
}
