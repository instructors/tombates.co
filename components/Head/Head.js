import NextHead from 'next/head'
import { string } from 'prop-types'

const GATracking = `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-48905777-1', 'auto');
ga('send', 'pageview');`

export const Head = ({
  description,
  title,
  url,
}) => (
  <NextHead>
    <meta charset="UTF-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/static/favicon.ico" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />

    <script dangerouslySetInnerHTML={{__html: GATracking}}></script>
  </NextHead>
)

Head.defaultProps = {
  title: 'Tom Bates @yoamomonstruos',
  description: "A designer living in São Paulo. One half of mais ou menos. Previously I've made things at places like Palantir, Ustwo and GoCardless. Why not say hello?",
  url: 'https://tombates.co',
}

Head.propTypes = {
  title: string,
  description: string,
  url: string,
}

export default Head
