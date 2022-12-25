export const themeColor = '#23424F'

export const standFor = [
  'Businesses need to add value and obtain a competitive edge in the marketplace. Prometheus IP provides the premiere intellectual property legal services, allowing companies to increase corporate value, obtain marketplace dominance using technological breakthroughs, increase brand recognition, and expand company operations. We collaborate with you to develop strategies to leverage patents, trademarks, copyrights, contracts, and franchise documents to move your business from where it is to where you want to be.',
  'Our namesake, Prometheus, was a Greek god, who defied his deity compatriots and gave humanity fire and technology. He is known as a patron of art and science. Just like the Greek titan, we work with our clients to bring cutting edge technology and art to society. However, we also understand the importance of preserving our clients’ interests in that art and technology, and work to develop a plan that benefits our client as well as society.',
]

export const bio = [
  'I have a Bachelors of Science in Biology with a focus in Genetics and Development from the Pennsylvania State University (Penn State). While there I worked in a populations genetics laboratory under Andrew Clark, studying the co-evolution of glucose-6-phosphate dehydrogenase mutations and malaria prevalence. I subsequently worked at Fox Chase Cancer Center under Dominique Broccoli, studying the effect of telomere and telomere length on cancer potential and platinum-based therapeutics.',
  'Upon leaving research, I obtained by Juris Doctor from Stetson University College of Law and my Masters of Science in Pharmaceutical Sciences with a focus on Pharmaceutical Chemistry from the University of Florida.',
  'When not working, I enjoy ice hockey- which I ironically picked up after moving to Florida- skiing, watching football and hockey, and spending time with my nine year old.',
]

export const providedServices = {
  patents: [
    'Construct patent prosecution strategies',
    'U.S. patent prosecution of biology, chemistry, pharmaceutical, medical device, or mechanical technologies',
    'Assistance with U.S. patent prosecution foreign filed originating patent applications',
    'Preparation and filing of PCT applications and assistance with foreign filing of patent applications',
    'Providing patentability, non-infringement, and validity opinions',
  ],
  trademarks: [
    'U.S. trademark prosecution of word design, trade dress, certification, or collective marks',
    'Filing and prosecution of cancellation or opposition proceedings',
    'Madrid trademark prosecution and assistance with foreign filing of trademarks',
  ],
  copyrights: ['U.S. copyright prosecution'],
  contracts: [
    'Negotiate and prepare material transfer agreements, and sponsored research agreements',
    'Negotiate and prepare licensing agreements for patents or trademarks',
    'Negotiate and prepare employment agreements, consulting agreements, and non-disclosure agreements',
    'Negotiate and prepare trademark consent agreements or concurrent use agreements',
  ],
  franchise: [
    'Prepare franchise disclosure documents, operating manuals',
  ],
}

export const hours = {
  Monday: ['10:00 am – 12:00 pm', '2:00 pm – 4:00 pm'],
  Tuesday: ['9:00 am – 5:00 pm'],
  Wednesday: ['9:00 am – 5:00 pm'],
  Thursday: ['9:00 am – 5:00 pm'],
  Friday: ['9:00 am – 5:00 pm'],
  Saturday: ['Closed'],
  Sunday: ['Closed'],
}

export const form = {
  firstName: {
    size: 6,
    props: {
      required: true,
    },
  },
  lastName: {
    size: 6,
    props: {
      required: true,
    },
  },
  email: {
    size: 12,
    props: {
      required: true,
    },
  },
  phone: {
    size: 6,
    props: {
      required: true,
      InputProps: { inputMode: 'numeric', pattern: '[0-9]*' },
    },
  },
  // date: {
  //   size: 3,
  //   props: { required: true },
  //   component: 'date',
  // },
  // time: {
  //   // size: 4,
  //   props: { required: true },
  //   component: 'radio',
  // },
  additionalInformation: {
    size: 12,
    props: {
      multiline: true,
    },
  }
}
