use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarLayoutFloatingOverlay
        navItems={[
          { name: 'Hero', id: 'hero' },
          { name: 'About', id: 'about' },
          { name: 'How to Buy', id: 'how-to-buy' },
          { name: 'Tokenomics', id: 'tokenomics' },
          { name: 'FAQ', id: 'faq' },
          { name: 'Footer', id: 'footer' }
        ]}
        logoSrc="/images/logo.svg"
        logoWidth={100}
        logoHeight={100}
        buttonText="Buy Now"
        onButtonClick={() => console.log('CTA clicked')}
      />
      <div id="hero" data-section="hero">
        <SplitHero
          title="Welcome to Memecoin Fiesta"
          subtitle="Join the fun and explore our unique memecoin!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => console.log('Primary CTA')} 
          onSecondaryButtonClick={() => console.log('Secondary CTA')} 
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout description="Memecoin Fiesta is all about having fun with cryptocurrency! Join the community and start trading today!" />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D steps={[
          { title: 'Step 1', description: 'Get your crypto wallet ready!', image: '/images/placeholder1.avif', position: 'left', isCenter: false },
          { title: 'Step 2', description: 'Buy memecoins on our platform!', image: '/images/placeholder2.avif', position: 'center', isCenter: true },
          { title: 'Step 3', description: 'Join our community events!', image: '/images/placeholder3.avif', position: 'right', isCenter: false },
        ]} />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <ExpandingGridTokenomics
          title="Tokenomics Overview"
          description="Discover the unique characteristics of our memecoin."
          cardItems={[
            { id: 1, title: 'Total Supply', description: '1,000,000,000' },
            { id: 2, title: 'Liquidity', description: '40%' },
            { id: 3, title: 'Community Rewards', description: '20%' }
          ]} 
        />
      </div>
      <div id="faq" data-section="faq">
        <ImageFAQ items={[
          { title: 'What is Memecoin Fiesta?', content: 'Memecoin Fiesta is a fun cryptocurrency focused on community engagement.' },
          { title: 'How can I buy memecoins?', content: 'You can buy memecoins through our trading platform, where you can swap other crypto.' }
        ]} />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="Memecoin Fiesta Logo"
          logoText="Memecoin Fiesta"
          className="text-center"
          svgClassName="h-12"
        />
      </div>
    </SiteThemeProvider>
  );
}
