

import { useState } from "react";

export default function Pricing() {
  const [plan, setPlan] = useState("aylık");
  const [activePlan, setActivePlan] = useState("aylık");

  const handleClick = () => {
    setActivePlan((prevActivePlan) => (prevActivePlan === "aylık" ? "yıllık" : "aylık"));

    setPlan((prevPlan) => (prevPlan === "aylık" ? "yıllık" : "aylık"));
  };

  return (
  <>
    <div className="container">
      <nav>
      <img src="bitmap5.png" alt="" />
        <div className="rectangle">
          <li>
            <h2>FİYATLANDIRMA</h2>
            <p>Hikayelerinizi oluşturun, Photosnap fotoğrafçılar ve görsel hikaye anlatıcıları için bir platformdur. Fotoğraflarınızı oluşturmanın ve paylaşmanın basit yoludur.</p>
          </li>
        </div>
        <img className="bitmap" src="bitmap2.png" alt="" />
        <img src="bitmap7.png" alt="" />
      </nav>  

      <section className="group">
        
        <li className="text">
          <p style={{ opacity: activePlan === "aylık" ? 1 : 0.5 }}>Aylık</p>
          <img src={`group${activePlan === "aylık" ? ".svg" : "2.svg"}`} alt="" onClick={handleClick}/>
          <p style={{ opacity: activePlan === "yıllık" ? 1 : 0.5 }}>Yıllık</p>
        </li>

        <article className="card">
          <ul>
            <li>
              <h2>Temel</h2>
              <p>Platformumuzun temel kullanımını içerir. Yeni ve hevesli fotoğrafçılara önerilir.</p>
              <h3>$19{plan === "aylık" ? ".00" : "0.00"}<span>{plan === "aylık" ? "ayda" : "yılda"}</span></h3>
              
              <button>PLAN SEÇİMİ</button>
            </li>
          </ul>

          <ul>
            <li>
              <h2>Profesyonel</h2>
              <p>Daha gelişmiş özellikler mevcut. Fotoğrafçılık konusunda tecrübeli olanlar ve profesyoneller için önerilir.</p>
              <h3>$39{plan === "aylık" ? ".00" : "0.00"}<span>{plan === "aylık" ? "ayda" : "yılda"}</span></h3>
              <button>PLAN SEÇİMİ</button>
            </li>
          </ul>

          <ul>
            <li>
              <h2>İş</h2>
              <p>Daha ayrıntılı metrikler gibi ek özellikler mevcuttur. İşletme sahiplerine önerilir.</p>
              <h3>$99{plan === "aylık" ? ".00" : "0.00"}<span>{plan === "aylık" ? "ayda" : "yılda"}</span></h3>
              <button>PLAN SEÇİMİ</button>
            </li>
          </ul>
        </article>

      </section>
      
        <h1>KARŞILAŞTIR</h1>
        
        <table className="table" >
          <thead className="thead" >
            <ul>
              <h2>ÖZELLİKLER</h2>
              <h3>TEMEL</h3>
              <h3>PRO</h3>
              <h3>İŞLETME</h3>
            </ul>
          </thead>

          <tbody className="tbody" >
            <ul>
              <h5>SINIRSIZ HİKAYE YAYINLAMA</h5>
              <img src="check.svg" alt="" />
              <img src="check.svg" alt="" />
              <img src="check.svg" alt="" />
            </ul>
            <ul>
              <h5>SINIRSIZ FOTOĞRAF YÜKLEME</h5>
              <img src="check.svg" alt="" />
              <img src="check.svg" alt="" />
              <img src="check.svg" alt="" />
            </ul>
            <ul>
              <h5>ÖZEL İÇERİK YERLEŞTİRME</h5>  
              <img src="" alt="" />
              <img src="check.svg" alt="" />
              <img src="check.svg" alt="" />
            </ul>
            <ul>
              <h5>META VERİLERİ ÖZELLEŞTİRİN</h5>
              <img src="" alt="" />
              <img src="check.svg" alt="" />
              <img src="check.svg" alt="" />
            </ul>
            <ul>
              <h5>GELİŞMİŞ METRİKLER</h5>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="check.svg" alt="" />
            </ul>
            <ul>
              <h5>FOTOĞRAF İNDİRMELERİ</h5>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="check.svg" alt="" />
            </ul>
            <ul>
              <h5>ARAMA MOTORU ENDEKSLEME</h5>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="check.svg" alt="" />
            </ul>
            <ul>
              <h5>ÖZEL ANALİZLER</h5>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="check.svg" alt="" />
            </ul>
          </tbody>
        </table>


        <table className="tableMob" >
          <h2>ÖZELLİKLER</h2>
    
          <tbody className="tbodyMob" >
            <ul>
              <h5>SINIRSIZ HİKAYE YAYINLAMA</h5>
              <li>
                <h3>TEMEL</h3>
                <h3>PRO</h3>
                <h3>İŞLETME</h3>
              </li>
              <img src="check1.svg" alt="" />
              <img src="check1.svg" alt="" />
              <img src="check1.svg" alt="" />
            </ul>
            <ul>
              <h5>SINIRSIZ FOTOĞRAF YÜKLEME</h5>
              <li>
                <h3>TEMEL</h3>
                <h3>PRO</h3>
                <h3>İŞLETME</h3>
              </li>
              <img src="check1.svg" alt="" />
              <img src="check1.svg" alt="" />
              <img src="check1.svg" alt="" />
            </ul>
            <ul>
              <h5>ÖZEL İÇERİK YERLEŞTİRME</h5>  
              <li>
                <h3>TEMEL</h3>
                <h3>PRO</h3>
                <h3>İŞLETME</h3>
              </li>
              <img src="" alt="" />
              <img className="check" src="check1.svg" alt="" />
              <img src="check1.svg" alt="" />
            </ul>
            <ul>
              <h5>META VERİLERİ ÖZELLEŞTİRİN</h5>
              <li>
                <h3>TEMEL</h3>
                <h3>PRO</h3>
                <h3>İŞLETME</h3>
              </li>
              <img src="" alt="" />
              <img className="check" src="check1.svg" alt="" />
              <img src="check1.svg" alt="" />
            </ul>
            <ul>
              <h5>GELİŞMİŞ METRİKLER</h5>
              <li>
                <h3>TEMEL</h3>
                <h3>PRO</h3>
                <h3>İŞLETME</h3>
              </li>
              <img src="" alt="" />
              <img src="" alt="" />
              <img className="checkBox" src="check1.svg" alt="" />
            </ul>
            <ul>
              <h5>FOTOĞRAF İNDİRMELERİ</h5>
              <li>
                <h3>TEMEL</h3>
                <h3>PRO</h3>
                <h3>İŞLETME</h3>
              </li>
              <img src="" alt="" />
              <img src="" alt="" />
              <img className="checkBox" src="check1.svg" alt="" />
            </ul>
            <ul>
              <h5>ARAMA MOTORU ENDEKSLEME</h5>
              <li>
                <h3>TEMEL</h3>
                <h3>PRO</h3>
                <h3>İŞLETME</h3>
              </li>
              <img src="" alt="" />
              <img src="" alt="" />
              <img className="checkBox" src="check1.svg" alt="" />
            </ul>
            <ul>
              <h5>ÖZEL ANALİZLER</h5>
              <li>
                <h3>TEMEL</h3>
                <h3>PRO</h3>
                <h3>İŞLETME</h3>
              </li>
              <img src="" alt="" />
              <img src="" alt="" />
              <img className="checkBox" src="check1.svg" alt="" />
            </ul>
          </tbody>
        </table>
         
      <article className="mask">
        <h2>Beta aşamasındayız. <span></span>Davetiyenizi bugün <span></span>alın!</h2>
        <button>DAVETİYE ALIN<span><img src="arrow.svg" alt="" /></span></button>
      </article>
    </div>
  </>
  )

}

 