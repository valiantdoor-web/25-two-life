import { Reveal } from '@/components/reveal'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Manifesto } from '@/components/manifesto'
import { FounderStory } from '@/components/founder-story'
import { SecondChances } from '@/components/second-chances'
import { Journal } from '@/components/journal'
import { ApparelDrop } from '@/components/apparel-drop'
import { DetailStrip } from '@/components/detail-strip'
import { ArtistCollab } from '@/components/artist-collab'
import { ArtSection } from '@/components/art-section'
import { Podcast } from '@/components/podcast'
import { Community } from '@/components/community'
import { SocialFeed } from '@/components/social-feed'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <Reveal />
      <SiteHeader />
      <main>
        <Hero />
        <Manifesto />
        <FounderStory />
        <SecondChances />
        <Journal />
        <ApparelDrop />
        <DetailStrip />
        <ArtistCollab />
        <ArtSection />
        <Podcast />
        <Community />
        <SocialFeed />
      </main>
      <SiteFooter />
    </>
  )
}
