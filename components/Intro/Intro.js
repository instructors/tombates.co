export const Intro = () => (
  <div className='intro'>
    <h1 className='intro__title'>Tom Bates</h1>
    <p className='intro__desc'>
      A designer living in São Paulo. One half of <a href='http://maisoumenos.co' target='_blank'>mais ou menos</a>. Previously I've made things at places like <a href='https://palantir.com' target='_blank'>Palantir</a>, <a href='https://ustwo.com' target='_blank'>Ustwo</a> and <a href='https://gocardless.com' target='_blank'>GoCardless</a>. Why not <a href='mailto:hey@tombates.co'>say hello</a>?
    </p>

    <style jsx>{`
      .intro { max-width: 400px; }

      .intro__title {
        font-size: 1rem;
        font-weight: 100;
        line-height: 1.5;
        margin-bottom: 18px;
      }
    `}</style>
  </div>
)

export default Intro
