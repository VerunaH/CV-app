import { BsWater } from "react-icons/bs";
import {
  GiMeal,
  GiRiceCooker,
  GiSewingMachine,
  GiCampingTent,
  GiDigDug,
  GiDutchBike,
  GiCanoe,
  GiFilmSpool,
} from "react-icons/gi";
import { MdTravelExplore, MdOutlineFestival } from "react-icons/md";
import { IoBeerOutline } from "react-icons/io5";

export default function About() {
  return (
    <>
      <h2>O mě</h2>

      <h3>
        Jsem zkušená Nette a frontend vývojářka a analytička se širokým
        rozhledem v oblasti tvorby webových aplikací. Ráda se pouštím do nových
        technologií, jsem pečlivá a odhodlaná věci dotahovat do zdárného konce.
        <br />
        Hledám práci v přátelském kolektivu, kde je chuť a prostor pro předávání
        zkušeností, rozvíjení znalostí i mimopracovní aktivity.
      </h3>

      <div className="separator" />

      <p>
        Od roku 2008 dělám jako OSVČ souběžně se zaměstnáním webové stránky v
        PHP, převážně eshopy a rezervační systémy. S Nette jsem začala o 4 roky
        později.
      </p>

      <h3 className="heading-wrapper">Volný čas</h3>
      <div
        className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4"
        id="free-time"
      >
        <div className="col">
          <GiCampingTent />
          Stanování
        </div>
        <div className="col">
          <GiDutchBike /> Jízda na kole
        </div>
        <div className="col">
          <GiCanoe /> Sjíždění řek
        </div>
        <div className="col">
          <MdOutlineFestival />
          Hudební festivaly
        </div>
        <div className="col">
          <MdTravelExplore />
          Cestování
        </div>
        <div className="col">
          <GiFilmSpool />
          Filmy
        </div>
        <div className="col">
          <IoBeerOutline />
          Klábosení u piva
        </div>
        <div className="col">
          <BsWater />
          Koupání
        </div>
        <div className="col">
          <GiMeal />
          Dobré jídlo
        </div>
        <div className="col">
          <GiRiceCooker />
          Vaření
        </div>
        <div className="col">
          <GiSewingMachine />
          Šití
        </div>
        <div className="col">
          <GiDigDug />
          Rytí a kopání
        </div>
      </div>
    </>
  );
}
