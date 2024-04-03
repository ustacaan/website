
export default function Features() {

  
  const revealOnScroll = () => {
    const features = Array.from(document.getElementsByClassName('feature')[0].getElementsByTagName('ul'));
    features.forEach(feature => {
      if (feature.getBoundingClientRect().top < window.innerHeight - 50) {
        feature.classList.add('animate');
      }
    });
  };
  
  window.onscroll = revealOnScroll;
  
 

  return (
  <>
  <nav>
    <img src="bitmap4.png" alt="" />
    <div className="rectangle">
      <li>
        <h2>ÖZELLİKLER</h2>
        <p>Tüm özelliklerimizin, hikayelerini paylaşmak isteyen <span></span> hevesli ve hatta profesyonel fotoğrafçılar tarafından<span></span> sevilecek şekilde tasarlandığından emin oluyoruz.</p>
      </li>
    </div>
    <img className="bitmap" src="bitmap.png" alt="" />
    <img src="bitmap6.png" alt="" />
    
  </nav>

  <main>
    <article className="feature">
      <ul>
        <img src="1.svg" alt="" />
        <h4>%100 Duyarlı</h4>
        <p>Hangi cihazı kullanırsanız kullanın, sitemiz <span></span> tamamen duyarlıdır ve hikayeler her ekranda <span></span> harika görünür.</p>
      </ul>
      <ul>
        <img src="2.svg" alt="" />
        <h4>Fotoğraf Yükleme Sınırı Yok</h4>
        <p className="car">Aracımızın yükleme veya bant genişliği konusunda herhangi bir sınırı yoktur. Ücretsiz olarak toplu olarak yükleyin ve tüm hikayelerinizi tek seferde paylaşın.</p>
      </ul>
      <ul>
        <img src="3.svg" alt="" />
        <h4>Yerleştirilebilir</h4>
        <p>Gömülü Tweetler, Facebook gönderileri, Instagram medyası, Vimeo veya YouTube videoları, Google Haritalar ve daha fazlası. </p>
      </ul>
      <ul>
        <img src="4.svg" alt="" />
        <h4>Özel Alan Adı</h4>
        <p>Photosnap abonelikleriyle hikayelerinizi kendi alanınızda barındırabilirsiniz. Ayrıca markamızı da kaldırabilirsiniz!</p>
      </ul>
      <ul>
        <img src="5.svg" alt="" />
        <h4>Pozlanmanızı Arttırın</h4>
        <p>Hikayenizi veya galerinizi görüntüleyen kullanıcılar, yerleşik posta listemiz sayesinde yeni ve öne çıkan hikayelerden kolayca haberdar olabilir.</p>
      </ul>
      <ul>
        <img src="6.svg" alt="" />
        <h4>Resmi Sürükleyip Bırakın</h4>
        <p>Görüntünüzü kolayca sürükleyip bırakın ve her seferinde güzel çekimler yapın. Hikaye oluşturmaya zorluk katacak olağanüstü araçlara gerek yok.</p>
      </ul>
    </article>
  </main>

    <article className="mask">
      <h2>Beta aşamasındayız. <span></span>Davetiyenizi bugün <span></span>alın!</h2>
      <button>DAVETİYE ALIN<span><img src="arrow.svg" alt="" /></span></button>
    </article>
  </>
  )

}

 