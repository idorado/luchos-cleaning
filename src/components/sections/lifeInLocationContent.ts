export interface LifeInLocationContent {
  title: string;
  paragraph: string;
  mapEmbedUrl: string;
}

export const lifeInLocationContent: Record<string, LifeInLocationContent> = {
  'Denver': {
    title: 'Life in Denver: Urban Living, Clean Living',
    paragraph: 'From Capitol Hill to Sloan\u2019s Lake, Denver combines historic charm with urban energy. Whether you\'re exploring the art scene in RiNo or relaxing in Washington Park, Denver life is full of movement. Kathy Clean brings reliable home cleaning to Denver\u2019s fast-paced households, making sure your home stays fresh—no matter the neighborhood.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12276.368858935113!2d-104.9903!3d39.7392!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78d1c2a21c47%3A0x1e1c7f9c8b5d1d44!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1721391369030!5m2!1sen!2sus&z=11',
  },
  'Centennial': {
    title: 'Life in Centennial: A Suburb Built for Families on the Go',
    paragraph: 'Centennial offers top-rated schools, spacious homes, and safe neighborhoods like Willow Creek and Piney Creek. Residents love the parks, shopping, and easy access to Denver—but all that activity leaves little time for housework.\nKathy Clean helps Centennial families keep their homes spotless with flexible, eco-friendly cleaning solutions.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12410.160307023017!2d-104.8369!3d39.5807!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c86ffde2688e5%3A0x76f141e2688aa91e!2sCentennial%2C%20CO!5e0!3m2!1sen!2sus!4v1721391309019!5m2!1sen!2sus&z=11',
  },
  'Castle Rock': {
    title: 'Life in Castle Rock: Clean Homes for a Growing Community',
    paragraph: 'Castle Rock is one of the fastest-growing cities in Douglas County, known for its scenic beauty, outdoor trails, and family-friendly neighborhoods like The Meadows and Crystal Valley. With new developments and a vibrant historic downtown, residents enjoy an active lifestyle—often too busy for routine cleaning.\nKathy Clean supports Castle Rock’s way of life with trusted house cleaning services tailored for busy families, retirees, and professionals across town.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12415.379992759386!2d-104.8517!3d39.3722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c993d6d88f8f7%3A0x6eb69912de279ce!2sCastle%20Rock%2C%20CO!5e0!3m2!1sen!2sus!4v1721391227853!5m2!1sen!2sus&z=11'
  },
  'Highlands Ranch': {
    title: 'Life in Highlands Ranch: Family Life, Simplified',
    paragraph: 'Highlands Ranch is one of Colorado’s most popular suburbs for growing families. Between school drop-offs and community activities, cleaning can easily fall behind.\nKathy Clean makes home upkeep easier for Highlands Ranch residents with dependable and detailed service.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12409.2961221676!2d-104.9647!3d39.5418!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c93fe349ff42d%3A0x82bfc83c6f5a0f3f!2sHighlands%20Ranch%2C%20CO!5e0!3m2!1sen!2sus!4v1721391651521!5m2!1sen!2sus&z=11',
  },
  'Englewood': {
    title: 'Life in Englewood: Creative Energy, Clean Spaces',
    paragraph: 'Englewood blends artsy vibes, historic streets, and a thriving local business scene. With quick access to Denver and neighborhoods like South Broadway Heights, life moves fast here.\nKathy Clean helps Englewood residents enjoy their homes more with consistent, high-quality cleaning service.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12287.781227857899!2d-104.991!3d39.6478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c8579d6322589%3A0x1c0c8ff671e6f03!2sEnglewood%2C%20CO!5e0!3m2!1sen!2sus!4v1721391503304!5m2!1sen!2sus&z=11',
  },
  'Greenwood Village': {
    title: 'Life in Greenwood Village: Executive Living, Immaculate Homes',
    paragraph: 'Greenwood Village is home to executive estates, luxury townhomes, and the Denver Tech Center. With busy work schedules and beautiful properties, residents expect nothing less than top-tier service.\nKathy Clean provides discreet, high-standard cleaning for Greenwood Village households and offices.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12290.447233137395!2d-104.9027!3d39.6100!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c86f55e86b1a3%3A0xb94c174fa3918912!2sGreenwood%20Village%2C%20CO!5e0!3m2!1sen!2sus!4v1721391590429!5m2!1sen!2sus&z=11',
  },
  'Littleton': {
    title: 'Life in Littleton: Historic Charm Meets Modern Living',
    paragraph: 'Littleton offers walkable streets, mountain views, and a deep sense of community. Whether you’re in Downtown Littleton or near Southmoor Park, homes here deserve care.\nKathy Clean brings personalized cleaning to Littleton’s unique mix of old and new homes.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12290.05431557127!2d-105.0172!3d39.6133!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c86e34770f98d%3A0x347d2c1f3a0e050!2sLittleton%2C%20CO!5e0!3m2!1sen!2sus!4v1721391703670!5m2!1sen!2sus&z=11',
  },
  'Lone Tree': {
    title: 'Life in Lone Tree: Luxury Living, Less Cleaning',
    paragraph: 'Lone Tree is known for its high-end developments, RidgeGate lifestyle, and easy access to Park Meadows and the DTC. For busy professionals and families, time is precious.\nKathy Clean helps Lone Tree households enjoy their space without the stress of cleaning.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12404.245728223207!2d-104.8866!3d39.5362!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c8ff84a2822c7%3A0x3516ea4cce453f1c!2sLone%20Tree%2C%20CO!5e0!3m2!1sen!2sus!4v1721391749829!5m2!1sen!2sus&z=11',
  },
  'Parker': {
    title: 'Life in Parker: Small-Town Vibes, Big Expectations',
    paragraph: 'Parker combines small-town charm with suburban growth. From The Pinery to Stonegate, it’s full of active families and new construction homes.\nKathy Clean keeps Parker homes clean and welcoming, so you can enjoy more and clean less.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12408.423592428275!2d-104.7573!3d39.5186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c9bbee6c123ff%3A0xabe1ac6c593f2f95!2sParker%2C%20CO!5e0!3m2!1sen!2sus!4v1721391810436!5m2!1sen!2sus&z=11',
  }
};
