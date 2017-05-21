import { SVGIcon } from '../'

const socialLinks = [{
  site: 'Dribbble',
  url: 'dribbble.com/yoamomonstruos',
},{
  site: 'Email',
  url: 'hey@tombates.co',
},{
  site: 'Github',
  url: 'github.com/yoamomonstruos',
},{
  site: 'Twitter',
  url: 'twitter.com/yoamomonstruos',
}]

const renderSocialIcon = site => {
  switch (site) {
    case 'Dribbble':
      return <SVGIcon.Dribbble />
    case 'Email':
      return <SVGIcon.Email />
    case 'Github':
      return <SVGIcon.Github />
    case 'Twitter':
      return <SVGIcon.Twitter />
    default:
      return <SVGIcon.Person />
  }
}

export const Social = () => (
  <ul className='social'>
    {socialLinks.map(link => {
      let url = link.site === "Email" ? `mailto:${link.url}` : `https://${link.url}`;

      return (
        <li className='social__link' key={url}>
          <SVGIcon>
            { renderSocialIcon(link.site) }
          </SVGIcon>
          <div>
            <strong>{link.site}</strong>
            <a href={url} target='_blank'>{link.url}</a>
          </div>
        </li>
      )
    })}

    <style jsx>{`
      .social {
        margin-top: 48px;
        max-width: 400px;
        list-style: none;
      }

      .social::before {
        content: "";
        display: block;
        height: 2px;
        width: 60px;
        background-color: #1d192f;
        margin-bottom: 48px;
      }

      .social__link {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
      }

      .social__link :global(.icon) {
        margin-right: 18px;
        color: #524A75;
      }

      .social__link strong {
        display: block;
        font-weight: 100;
      }
    `}</style>
  </ul>
)

export default Social
