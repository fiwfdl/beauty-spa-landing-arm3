const rituals = [
  { number: '01', name: 'The Stillness Facial', time: '75 min', copy: 'A sculpting facial, warm compresses, and quiet time for skin that feels deeply rested.' },
  { number: '02', name: 'Moonlit Massage', time: '90 min', copy: 'Slow, intuitive bodywork with aromatic oils to soften the places you hold the day.' },
  { number: '03', name: 'The Full Exhale', time: '120 min', copy: 'Our signature pairing of facial and massage, finished with tea in the sanctuary lounge.' },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top">Serenity <span>Spa</span></a>
        <div className="nav-links"><a href="#rituals">Rituals</a><a href="#about">Our philosophy</a><a href="#visit">Visit us</a></div>
        <a className="nav-cta" href="#booking" aria-label="Book an appointment">Book a ritual <span>↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">A slower kind of beauty <span>✦</span> Est. 2014</p>
          <h1>Come back<br /><em>to yourself.</em></h1>
          <p className="lede">A quiet space for considered treatments, thoughtful touch, and the simple luxury of feeling present in your own skin.</p>
          <a className="button" href="#booking">Book your ritual <span>↗</span></a>
        </div>
        <div className="hero-art" aria-label="Abstract botanical illustration" role="img">
          <div className="sun"></div><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <svg viewBox="0 0 500 610" aria-hidden="true"><path d="M247 588C217 472 239 355 274 257C305 169 374 111 442 65"/><path d="M265 293C203 265 143 270 77 235C127 199 197 211 265 293Z"/><path d="M287 231C298 156 350 106 419 87C418 157 375 210 287 231Z"/><path d="M235 381C165 386 112 358 68 310C141 297 197 322 235 381Z"/><path d="M249 450C306 386 363 370 429 386C388 437 327 458 249 450Z"/></svg>
          <span className="art-caption">The art of<br />unhurried care</span>
        </div>
      </section>

      <section className="marquee" aria-label="Serenity Spa values"><div>REST <span>✦</span> RENEW <span>✦</span> RETURN <span>✦</span> REST <span>✦</span> RENEW <span>✦</span></div></section>

      <section className="rituals shell" id="rituals">
        <div className="section-intro"><p className="eyebrow">The menu</p><h2>Rituals for<br /><em>every season.</em></h2><p>Nothing here is rushed. Choose a treatment that meets you where you are, then let us take care of the rest.</p></div>
        <div className="ritual-list">{rituals.map((ritual) => <article className="ritual" key={ritual.number}><span className="ritual-number">{ritual.number}</span><div><h3>{ritual.name}</h3><p>{ritual.copy}</p></div><span className="ritual-time">{ritual.time}</span></article>)}</div>
      </section>

      <section className="quote shell" id="about"><div className="quote-mark">“</div><blockquote>Beauty is not something to chase.<br /><em>It is a way of being here.</em></blockquote><p>— Elian Voss, founder</p></section>

      <section className="visit shell" id="visit"><div className="visit-panel"><p className="eyebrow">Find your way here</p><h2>Your little<br /><em>pause in the city.</em></h2><p>Tuesday–Saturday, 9am–7pm<br />Sunday, 10am–4pm</p><address>18 Willow Lane<br />Brooklyn, NY 11201</address><a className="text-link" href="#booking">Get directions <span>↗</span></a></div><div className="map-art" aria-label="Illustrated map of Serenity Spa location" role="img"><span>18<br /><small>Willow Lane</small></span><div className="map-line"></div><div className="map-line second"></div></div></section>

      <section className="booking shell" id="booking"><div><p className="eyebrow">Make space for you</p><h2>Ready to<br /><em>feel lighter?</em></h2></div><div><p>Leave the details to us. Book online or call our front desk and we’ll find the right ritual for your day.</p><a className="button light" href="mailto:hello@serenityspa.example">Begin your booking <span>↗</span></a></div></section>
      <footer className="footer shell"><a className="wordmark" href="#top">Serenity <span>Spa</span></a><p>© 2024 Serenity Spa. Made for slower days.</p><div><a href="#top">Instagram</a><a href="mailto:hello@serenityspa.example">Contact</a></div></footer>
    </main>
  );
}
