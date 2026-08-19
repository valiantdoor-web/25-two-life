export type Product = {
  slug: string
  name: string
  price: string
  color: string
  category: string
  img: string
  gallery?: string[]
  tag?: string
  details: string[]
}

export const PRODUCTS: Product[] = [
  {
    slug: 'second-chance-jacket', name: 'The Second Chance Jacket', price: 'Concept', color: 'Black / Charcoal Plaid', category: 'Outerwear', img: '/images/merch/sc-jacket-front.jpg', gallery: ['/images/merch/sc-jacket-front.jpg','/images/merch/sc-jacket-back.jpg','/images/merch/sc-jacket-model.jpg','/images/merch/sc-jacket-chest.jpg','/images/merch/sc-jacket-sleeve.jpg','/images/merch/sc-jacket-hem.jpg'], tag: 'Design Concept', details: ['Second Chances circular badge, left chest','Burnt-orange 25 Two Life brush-script down the right sleeve','Vertical 25 Two Life hem tag','Concept garment, production details to be confirmed'],
  },
  {
    slug: 'pain-didnt-break-me-jacket', name: 'The Pain Didn’t Break Me Jacket', price: 'Concept', color: 'Black / Charcoal Plaid', category: 'Outerwear', img: '/images/merch/pd-jacket-back.jpg', gallery: ['/images/merch/pd-jacket-back.jpg','/images/merch/pd-jacket-front.jpg','/images/merch/pd-jacket-model.jpg','/images/merch/pd-jacket-lapel.jpg','/images/merch/pd-jacket-sleeve.jpg'], tag: 'Design Concept', details: ['“Past made me. Pain didn’t break me.” back graphic','25 Two Life chest and sleeve branding','Hidden lapel logo detail','Concept garment, production details to be confirmed'],
  },
  {
    slug: 'artist-collab-concept-jacket', name: 'Future Artist Collaboration Jacket', price: 'Concept', color: 'Black / Charcoal Plaid', category: 'Outerwear', img: '/images/merch/wbr-jacket-front.jpg', gallery: ['/images/merch/wbr-jacket-front.jpg','/images/merch/wbr-jacket-back.jpg','/images/merch/wbr-jacket-model.jpg','/images/merch/wbr-neck.jpg','/images/merch/wbr-tag.jpg'], tag: 'Collaboration Concept', details: ['Reserved for a future confirmed artist collaboration','Second Chances chest badge + orange sleeve script','Final collaborator, artwork and production details not yet published','Concept imagery retained for layout continuity'],
  },
  {
    slug: 'more-than-your-sentence-flannel', name: 'More Than Your Sentence Flannel', price: 'Concept', color: 'Black / Charcoal, Orange Graphic', category: 'Outerwear', img: '/images/merch/og-flannel-back.jpg', gallery: ['/images/merch/og-flannel-back.jpg','/images/merch/og-flannel-front.jpg','/images/merch/og-flannel-detail.jpg'], tag: 'Design Concept', details: ['Oversized 25 Two Life globe graphic on the back','“More than your sentence.” tagline hit','25 Two Life brush-script down the sleeve','Concept garment, production details to be confirmed'],
  },
  {
    slug: 'built-through-it-work-pant', name: 'The Built Through It Work Pant', price: 'Concept', color: 'Washed Black, Structured Twill', category: 'Bottoms', img: '/images/merch/bt-pant-front.jpg', gallery: ['/images/merch/bt-pant-front.jpg','/images/merch/bt-pant-side.jpg','/images/merch/bt-pant-back.jpg','/images/merch/bt-pant-model.jpg','/images/merch/bt-pant-pocket.jpg','/images/merch/bt-pant-legdetail.jpg'], tag: 'Design Concept', details: ['Relaxed straight carpenter concept with utility pockets','“Built Through It!” brush-script down the leg','“Not my past. My purpose.” seam detail','Concept garment, materials and production details to be confirmed'],
  },
  {
    slug: 'built-different-cargo-pant', name: 'The Built Different Cargo Pant', price: 'Concept', color: 'Black, Heavy Canvas', category: 'Bottoms', img: '/images/merch/bd-pant-front.jpg', gallery: ['/images/merch/bd-pant-front.jpg','/images/merch/bd-pant-side.jpg','/images/merch/bd-pant-pocket.jpg'], tag: 'Design Concept', details: ['Utility cargo concept with reinforced side pockets','“Built Different For A Reason” side-pocket graphic','25 Two Life hardware and hem-tag concept','Concept garment, production details to be confirmed'],
  },
  {
    slug: 'more-than-your-sentence-tee', name: 'More Than Your Sentence Tee', price: 'Concept', color: 'Black / Acid Lime Print', category: 'Tops', img: '/images/merch/tee-lime.jpg', gallery: ['/images/merch/tee-lime.jpg'], tag: 'Design Concept', details: ['Oversized 25 Two Life back print concept','“More than your sentence.” tagline hit','Fit and fabric specifications to be confirmed','Concept garment, not presented as available inventory'],
  },
  {
    slug: 'lived-learned-earned-tee', name: 'Lived. Learned. Earned. Tee', price: 'Concept', color: 'Black / Red Print', category: 'Tops', img: '/images/merch/tee-red.jpg', gallery: ['/images/merch/tee-red.jpg'], tag: 'Design Concept', details: ['Oversized 25 Two Life back print concept','“Lived. Learned. Earned.” tagline hit','Fit and fabric specifications to be confirmed','Concept garment, not presented as available inventory'],
  },
  {
    slug: 'second-chances-tee', name: 'Second Chances Tee', price: 'Concept', color: 'Black / Mono Print', category: 'Tops', img: '/images/merch/tee-white.jpg', gallery: ['/images/merch/tee-white.jpg'], tag: 'Design Concept', details: ['Oversized 25 Two Life back print concept','“Second chances change everything.” tagline hit','Fit and fabric specifications to be confirmed','Concept garment, not presented as available inventory'],
  },
]

export function getProduct(slug: string) { return PRODUCTS.find((p) => p.slug === slug) }
