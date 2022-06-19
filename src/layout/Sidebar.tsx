import Photo from "../assets/photo.jpg";

import { BsGeoAlt, BsTelephone, BsAt } from "react-icons/bs";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar-photo">
        <img src={Photo} alt="Profilové foto" />
      </div>
      <h1 className="sidebar-name">Ing. Veronika Hladká</h1>
      <div className="sidebar-profession">Web developer, analytik</div>
      <div className="sidebar-separator" />
      <div className="sidebar-contacts">
        <div className="sidebar-contacts-item">
          <BsGeoAlt /> Brno
        </div>
        <div className="sidebar-contacts-item">
          <BsTelephone /> +420 777 570 369
        </div>
        <div className="sidebar-contacts-item">
          <BsAt /> <a href="mailto:santara@seznam.cz">santara@seznam.cz</a>
        </div>
      </div>
      <div className="sidebar-separator" />
      <div className="sidebar-profession">Co dělám?</div>
      <div className="sidebar-sw">Frontend</div>
      <div className="sidebar-sw">Backend</div>
      <div className="sidebar-sw">Business analýza</div>

      <div className="sidebar-separator" />
      <div className="sidebar-profession">V čem dělám?</div>
      <div className="sidebar-sw">Nette</div>
      <div className="sidebar-sw">ReactJS</div>
      <div className="sidebar-sw">Bootstrap</div>
    </>
  );
}
