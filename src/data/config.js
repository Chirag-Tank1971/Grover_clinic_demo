export const config = {
  seo: {
    title: "Grover Dental Clinic | Dentist in Jaipur",
    description:
      "Advanced, pain-managed dental care at Grover Dental Clinic, Jaipur. Book your appointment on WhatsApp or call now."
  },
  brand: {
    clinicName: "Grover Dental Clinic",
    city: "Jaipur",
    tagline: {
      en: "Advanced dental care with modern technology",
      hi: "आधुनिक तकनीक के साथ उन्नत डेंटल केयर"
    }
  },
  doctor: {
    name: "Dr. K D Grover",
    experience: "78 Years in Healthcare",
    qualifications: "BDS (Dentist)",
    specialization: { en: "Dentist", hi: "डेंटिस्ट" },
    languagesSpoken: "English, Hindi",
    consultationFee: "INR 200",
    memberships: [
      "Indian Dental Association",
      "Medical Practitioners Society",
      "Indian Medical Association (IMA)",
      "Academy Of Oral Implantology (AOI)",
      "Indian Academy Of Osseointegration"
    ],
    bio: {
      en: "Dedicated to compassionate, evidence-based dental care using modern techniques and patient-first communication.",
      hi: "आधुनिक तकनीक और रोगी-केंद्रित संचार के साथ संवेदनशील एवं प्रमाण-आधारित डेंटल उपचार।"
    },
    credibility: [
      { label: { en: "Registrations", hi: "पंजीकरण" }, value: "RDC / IDC Verified" },
      { label: { en: "Awards", hi: "पुरस्कार" }, value: "25+ Recognitions" },
      { label: { en: "Conferences", hi: "कॉन्फ्रेंस" }, value: "100+ National Sessions" },
      { label: { en: "Cases Handled", hi: "उपचारित केस" }, value: "10,000+" }
    ]
  },
  contact: {
    phoneDisplay: "090247 17319",
    phoneRaw: "919024717319",
    whatsappRaw: "919024717319",
    email: "groverdentalclinic@gmail.com",
    address:
      "Located in: Moti Doongri Police Station, 633, Acharya Kriplani Marg, Anand Puri, Bees Dukan, Adarsh Nagar, Jaipur, Rajasthan 302004",
    mapEmbedUrl:
      "https://www.google.com/maps?q=633,+Acharya+Kriplani+Marg,+Anand+Puri,+Bees+Dukan,+Adarsh+Nagar,+Jaipur,+Rajasthan+302004&output=embed",
    reviewUrl: "https://g.page/r/your-google-business/review"
  },
  footer: {
    hours: [
      "Mon - Sat: 9:00 AM - 8:00 PM",
      "Sunday: 10:00 AM - 2:00 PM"
    ],
    emergencyNumber: "090247 17319",
    socials: [
      { label: "Instagram", href: "https://instagram.com/" },
      { label: "Facebook", href: "https://facebook.com/" }
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" }
    ]
  },
  leadFlow: {
    googleSheetWebhook: "",
    emailSubject: "New Appointment Request - Grover Dental Clinic"
  },
  images: {
    hero: "/images/gorver-1.webp",
    doctor: "/grover_doctor.png",
    gallery: [
      "/images/gorver-1.webp",
      "/images/grover-2.webp",
      "/images/grover-3.webp",
      "/images/grover-4.webp",
      "/images/grover-5.webp",
      "/images/grover-6.webp",
      "/images/grover-8.jpg",
      "/images/grover-9.jpg",
      "/images/grover-10.jpg",
      "/images/grover-11.jpg"
    ],
    beforeAfter: {
      before: "/before.png",
      after: "/after.png"
    },
    alt: {
      hero: "Dental clinic",
      doctor: "Doctor portrait"
    }
  },
  ui: {
    language: {
      label: { en: "Language", hi: "भाषा" },
      en: "EN",
      hi: "HI"
    }
  },
  navigation: {
    links: [
      { label: { en: "Services", hi: "सेवाएं" }, href: "#services" },
      { label: { en: "Doctor", hi: "डॉक्टर" }, href: "#doctor" },
      { label: { en: "Gallery", hi: "गैलरी" }, href: "#gallery" },
      { label: { en: "Staff", hi: "स्टाफ" }, href: "#staff" },
      { label: { en: "Reviews", hi: "रिव्यू" }, href: "#reviews" },
      { label: { en: "Contact", hi: "संपर्क" }, href: "#contact" }
    ],
    callCta: { en: "Call Now", hi: "अभी कॉल करें" }
  },
  emergencyCta: {
    text: {
      en: "Severe tooth pain? Call now for emergency support.",
      hi: "दांत में तेज दर्द? आपातकालीन सहायता के लिए अभी कॉल करें।"
    },
    button: { en: "Emergency Call", hi: "इमरजेंसी कॉल" }
  },
  hero: {
    trustBadge: { en: "Trusted by local families", hi: "स्थानीय परिवारों का भरोसा" },
    headlinePrefix: { en: "Best Dental Clinic in", hi: "सर्वश्रेष्ठ डेंटल क्लिनिक" },
    primaryCta: { en: "Book Appointment", hi: "अपॉइंटमेंट बुक करें" },
    secondaryCta: { en: "Call Now", hi: "अभी कॉल करें" }
  },
  services: {
    sectionTitle: { en: "Our Services", hi: "हमारी सेवाएं" },
    sectionSubtitle: {
      en: "Comprehensive dental care designed for every age and need.",
      hi: "हर उम्र और आवश्यकता के लिए समग्र डेंटल केयर।"
    },
    items: [
      {
        title: { en: "Teeth Cleaning", hi: "दांतों की सफाई" },
        description: {
          en: "Gentle plaque removal and polishing for a brighter, healthier smile.",
          hi: "चमकदार और स्वस्थ मुस्कान के लिए सौम्य सफाई और पॉलिशिंग।"
        }
      },
      {
        title: { en: "Root Canal Treatment", hi: "रूट कैनाल ट्रीटमेंट" },
        description: {
          en: "Advanced pain-managed procedures designed to save your natural teeth.",
          hi: "प्राकृतिक दांत बचाने के लिए आधुनिक दर्द-नियंत्रित उपचार।"
        }
      },
      {
        title: { en: "Braces & Aligners", hi: "ब्रेसेस और अलाइनर्स" },
        description: {
          en: "Modern orthodontic options for straighter teeth and improved confidence.",
          hi: "सीधे दांत और बेहतर आत्मविश्वास के लिए आधुनिक विकल्प।"
        }
      },
      {
        title: { en: "Dental Implants", hi: "डेंटल इम्प्लांट्स" },
        description: {
          en: "Permanent, natural-looking replacements for missing teeth.",
          hi: "खोए हुए दांतों के लिए स्थायी और प्राकृतिक विकल्प।"
        }
      }
    ]
  },
  treatmentHighlights: {
    sectionTitle: { en: "Treatment Highlights", hi: "उपचार विशेषताएं" },
    sectionSubtitle: {
      en: "Quick guidance to help patients choose the right treatment.",
      hi: "सही उपचार चुनने के लिए त्वरित जानकारी।"
    },
    items: [
      {
        name: "Root Canal Treatment",
        who: "Tooth pain, sensitivity, deep cavity",
        time: "1-2 sittings",
        cost: "INR 3,000 - 8,000",
        pain: "Low (local anesthesia)"
      },
      {
        name: "Aligners",
        who: "Crowded / misaligned teeth",
        time: "6-18 months",
        cost: "INR 45,000+",
        pain: "Mild pressure initially"
      },
      {
        name: "Dental Implants",
        who: "Missing teeth replacement",
        time: "3-6 months total",
        cost: "INR 25,000+ per implant",
        pain: "Mild to moderate, controlled"
      }
    ]
  },
  aboutDoctor: {
    sectionTitle: { en: "About Doctor", hi: "डॉक्टर के बारे में" },
    sectionSubtitle: { en: "Meet your trusted dental expert.", hi: "अपने विश्वसनीय डेंटल विशेषज्ञ से मिलें।" },
    quickInfoTitle: { en: "Quick Information", hi: "त्वरित जानकारी" },
    experienceLabel: { en: "Experience:", hi: "अनुभव:" },
    qualificationsLabel: { en: "Qualification:", hi: "योग्यता:" },
    specializationLabel: { en: "Specialization", hi: "विशेषज्ञता" },
    languagesLabel: { en: "Languages Spoken", hi: "भाषाएं" },
    consultationFeeLabel: { en: "Consultation Fee", hi: "परामर्श शुल्क" },
    membershipsLabel: { en: "Membership", hi: "सदस्यता" }
  },
  policies: {
    sectionTitle: { en: "Clinic Policies & Facilities", hi: "क्लिनिक नीतियां और सुविधाएं" },
    cards: [
      { title: "Sterilization Protocol", text: "Autoclave-based sterilization for all critical instruments." },
      { title: "Payment Options", text: "UPI, cards, and cash accepted." },
      { title: "Insurance Support", text: "Guidance for claim documents and billing." },
      { title: "Parking Availability", text: "Nearby parking available for patients." }
    ]
  },
  staff: {
    sectionTitle: { en: "Our Friendly Staff", hi: "हमारा सहायक स्टाफ" },
    sectionSubtitle: {
      en: "Meet the caring team that supports your treatment journey.",
      hi: "आपकी उपचार यात्रा में साथ देने वाली टीम से मिलें।"
    },
    members: [
      {
        name: "Dr. Bhavika Grover",
        role: "Endodontist Doctors",
        bio: "Specializes in root canal therapy and advanced endodontic procedures.",
        image: "/staff/staff-1.webp",
        alt: "Clinic staff member 1"
      },
      {
        name: "Dr. Mihir Grover",
        role: "Prosthodontist Doctors",
        bio: "Specializes in smile restoration, crowns, bridges, and implant prosthetics.",
        image: "/staff/staff-2.webp",
        alt: "Clinic staff member 2"
      }
    ]
  },
  whyChooseUs: {
    sectionTitle: { en: "Why Choose Us", hi: "हम क्यों" },
    sectionSubtitle: {
      en: "Your comfort, safety, and results are our highest priorities.",
      hi: "आपका आराम, सुरक्षा और परिणाम हमारी प्राथमिकता हैं।"
    },
    items: [
      { en: "Experienced doctor", hi: "अनुभवी डॉक्टर" },
      { en: "Modern equipment", hi: "आधुनिक उपकरण" },
      { en: "Pain-free treatment", hi: "दर्द-नियंत्रित उपचार" },
      { en: "Affordable pricing", hi: "किफायती कीमत" },
      { en: "Hygienic environment", hi: "स्वच्छ वातावरण" }
    ]
  },
  reviews: {
    sectionTitle: { en: "Google Reviews", hi: "गूगल रिव्यू" },
    rating: "4.9",
    totalReviews: "Google reviews",
    cta: { en: "Review us on Google", hi: "Google पर रिव्यू दें" },
    items: [
      {
        name: "Dr. Surbhi Agarwal",
        date: "11 Apr, 2025",
        review:
          "Best dental clinic in Jaipur since 1948, located in Bees Dukan, Raja Park. People who work here are super cool and have great communication with patients."
      },
      {
        name: "Mr Kuldeep",
        date: "08 Nov, 2025",
        review:
          "My experience at Grover Dental Clinic and Smile Improvement Centre was excellent! The accurate diagnosis by the attentive staff impressed me."
      },
      {
        name: "Sushmeet Kaur",
        date: "05 Apr, 2025",
        review:
          "Grover Dental Clinic is truly a gem in the realm of dental care. The organised system they have in place ensures smooth appointments and minimal waiting."
      },
      {
        name: "Yash Pahwa",
        date: "04 Apr, 2025",
        review:
          "Grover Dental Clinic and Smile Improvement Centre are excellent places for dental care! The staff is very friendly and always ready to help."
      },
      {
        name: "ARJUN",
        date: "03 Nov, 2025",
        review:
          "I recently visited Grover Dental Clinic and Smile Improvement Centre, and I couldn't be more impressed! The gentle care provided by the staff made the visit comfortable."
      },
      {
        name: "Nishant",
        date: "08 Apr, 2025",
        review:
          "It's the best dental clinic — doctors and staff have very good behaviour and a very polite nature. They understand the patient's problem very well."
      }
    ]
  },
  testimonials: {
    sectionTitle: { en: "Patient Experiences", hi: "मरीजों का अनुभव" },
    sectionSubtitle: {
      en: "Stories from patients who trusted us with their smile.",
      hi: "अपनी मुस्कान के लिए हम पर भरोसा करने वाले मरीजों की कहानियां।"
    },
    items: [
      {
        name: "Aman Verma",
        review: "Very professional and caring staff. The treatment was painless and clearly explained."
      },
      {
        name: "Neha Kapoor",
        review: "The clinic is super clean and modern. Booking on WhatsApp was quick and easy."
      },
      {
        name: "Rohan Mehta",
        review: "Dr. Grover made me feel comfortable throughout my treatment. Highly recommended."
      }
    ]
  },
  appointment: {
    sectionTitle: { en: "Book Your Appointment", hi: "अपॉइंटमेंट बुक करें" },
    sectionSubtitle: {
      en: "Share your details and we will confirm your slot quickly.",
      hi: "अपनी जानकारी साझा करें, हम जल्दी स्लॉट कन्फर्म करेंगे।"
    },
    whatsappTemplate: "Appointment Request",
    labels: {
      name: { en: "Name", hi: "नाम" },
      phone: { en: "Phone", hi: "फोन" },
      date: { en: "Preferred Date", hi: "पसंदीदा तारीख" },
      slot: { en: "Preferred Slot", hi: "पसंदीदा समय" }
    },
    slotOptions: [
      { value: "morning", label: { en: "Morning", hi: "सुबह" } },
      { value: "afternoon", label: { en: "Afternoon", hi: "दोपहर" } },
      { value: "evening", label: { en: "Evening", hi: "शाम" } }
    ],
    placeholders: {
      name: { en: "Your full name", hi: "पूरा नाम" },
      phone: { en: "Your phone number", hi: "फोन नंबर" }
    },
    submitText: { en: "Send Request", hi: "रिक्वेस्ट भेजें" }
  },
  beforeAfter: {
    sectionTitle: { en: "Before / After Smiles", hi: "पहले / बाद की मुस्कान" },
    sectionSubtitle: {
      en: "Real smile transformations with patient consent.",
      hi: "मरीज की अनुमति से वास्तविक परिवर्तन।"
    }
  },
  gallery: {
    sectionTitle: { en: "Clinic Interiors", hi: "क्लिनिक इंटीरियर" },
    sectionSubtitle: { en: "Take a look at our clean, modern setup.", hi: "हमारे स्वच्छ और आधुनिक सेटअप की झलक।" },
    imageAltPrefix: { en: "Clinic gallery", hi: "क्लिनिक गैलरी" }
  },
  faq: {
    sectionTitle: { en: "Frequently Asked Questions", hi: "अक्सर पूछे जाने वाले सवाल" },
    items: [
      {
        q: "Is RCT painful?",
        a: "Root canal is done under local anesthesia and is usually comfortable."
      },
      {
        q: "How long do braces or aligners take?",
        a: "Most cases take 6 to 18 months depending on alignment complexity."
      },
      {
        q: "Do you handle emergency pain cases?",
        a: "Yes, please call immediately for severe pain or swelling."
      }
    ]
  },
  contactSection: {
    sectionTitle: { en: "Contact Us", hi: "संपर्क करें" },
    sectionSubtitle: { en: "Visit our clinic or call us for quick assistance.", hi: "क्लिनिक आएं या तुरंत सहायता के लिए कॉल करें।" },
    addressLabel: { en: "Address", hi: "पता" },
    phoneLabel: { en: "Phone", hi: "फोन" },
    mapTitle: "Clinic Location Map"
  },
  stickyCta: {
    whatsappAriaLabel: "Chat on WhatsApp",
    mobileCallText: { en: "Call", hi: "कॉल" }
  }
};
