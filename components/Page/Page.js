export const Page = ({ children }) => (
  <div className="page">
    {children}
    <style jsx>{`
      @font-face {
        font-family: 'PX Grotesk Light';
        font-weight: 100;
        src: url(/static/PxGrotesk-Light.otf);
      }

      :global(html),
      :global(body) {
        background-color: #0E0B1B;
        font-size: 16px;
      }

      :global(body) {
        color: #FFF;
        font-family: "PX Grotesk Light";
        font-weight: 100;
        line-height: 1.5;
      }

      :global(*),
      :global(*::after),
      :global(*::before) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .page {
        padding: 64px;
        transition: padding 300ms ease-in-out;
      }

      :global(a) {
        color: rgb(141, 96, 245);
        text-decoration: none;
      }

      :global(a:hover) {
        text-decoration: underline;
      }

      p {
        margin-bottom: 18px;
      }

      p:last-child {
        margin-bottom: 0;
      }

      @media (max-width: 800px) {
        .page {
          padding: 48px 24px;
        }
      }
    `}</style>
  </div>
)

export default Page;
