// import parseStrongliftsData from '../utils/parseStrongliftsData';
// import data from '../data/stronglifts.csv'
// const parsed = parseStrongliftsData(data);

import {
  Availability,
  Head,
  Intro,
  Page,
  Social,
} from '../components';

import {fetchAvailability} from '../utils/availability';

export const Index = ({ availability }) => (
  <div>
    <Availability
      availability={availability}
    />
    <Page>
      <Head />
      <Intro />
      <Social />
    </Page>
  </div>
)

Index.getInitialProps = async () => {
  return await fetchAvailability()
}

export default Index;
