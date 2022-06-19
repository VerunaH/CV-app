export default function Work() {
  const renderSkills = (name: string, level: number) => {
    let els = [];
    for (var i = 1; i < 6; i++) {
      els.push(<span className={i <= level ? "filled" : ""}></span>);
    }
    return (
      <div className="skill">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{els.map((e) => e)}</span>
      </div>
    );
  };

  return (
    <>
      <h2>Dovednosti</h2>
      <div className="row row-cols-1 row-cols-md-2 ">
        <div className="col">
          <h3 className="heading-wrapper">Frontend</h3>
          {renderSkills("HTML + CSS", 5)}
          {renderSkills("Bootstrap (5.*)", 5)}
          {renderSkills("ReactJS", 4)}
          {renderSkills("jQuery", 4)}
          {renderSkills("JavaScript", 3)}
          {renderSkills("ReactNative", 2)}
          {renderSkills("SEO", 4)}
          {renderSkills("Přístupnost", 3)}

          <h3 className="heading-wrapper">Programování</h3>
          {renderSkills("Php (7.*) + Nette (3.1)", 4)}
          {renderSkills("VisualBasic", 3)}
          {renderSkills("Python", 2)}
          {renderSkills("Java", 2)}

          <h3 className="heading-wrapper">Databáze</h3>
          {renderSkills("MySQL", 4)}
          {renderSkills("MariaDB", 4)}
          {renderSkills("Potgres", 4)}
          {renderSkills("Oracle", 3)}
          {renderSkills("ElasticSearch", 2)}

          <h3 className="heading-wrapper">IDE a nástroje</h3>
          <div>Visul Studio Code</div>
          <div>NetBeans</div>
          <div>PhpStorm</div>
          <div>Eclipse</div>
          <div>Docker</div>
          <div>git (SourceTree, TortoiseGit)</div>
          <div>SVN (TortoiseSVN)</div>
          <div>npm, yarn, gulp</div>
        </div>
        <div className="col">
          <h3 className="heading-wrapper">Jazyky</h3>
          {renderSkills("Angličtina", 4)}
          {renderSkills("Němčina", 2)}
          {renderSkills("Francouzština", 2)}
          {renderSkills("Španělština", 1)}

          <h3 className="heading-wrapper">Analytické dovednosti</h3>
          {renderSkills("Modeování business procesů", 4)}
          {renderSkills("Datové modelování", 4)}
          {renderSkills("Návrh uživatelského rozhraní", 4)}
          {renderSkills("Wireframes", 4)}

          <h3 className="heading-wrapper">Programy</h3>
          {renderSkills("Enterprice Architect", 4)}
          {renderSkills("MS Office", 4)}
          {renderSkills("Corel Draw", 4)}
          {renderSkills("Adobe Photoshop", 3)}
          {renderSkills("Figma", 3)}
        </div>
      </div>
    </>
  );
}
