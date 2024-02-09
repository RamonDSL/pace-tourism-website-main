import React from 'react';

import { Article, Border, BtnExplore, Container, Section } from './styles';
import PageTitle from '/src/components/PageTitle';
import PageContent from '/src/components/PageContent';

function Home() {
  return (
    <Container>
        <PageTitle pageName="so, you want to travel to"/>

        <Section>
          <Article>
            <PageContent 
              contentTitle="Space" 
              convertToH2={true}
            >
              Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!
            </PageContent>
          </Article>

          <Border>
            <BtnExplore>explore</BtnExplore>
          </Border>
        </Section>
    </Container>
  );
}

export default Home;