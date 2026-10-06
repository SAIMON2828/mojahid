export const profile = {
  name: 'Md Mojahidul Islam',
  firstName: 'Mojahid',
  roles: ['Data Science Student', 'Cybersecurity Analyst', 'ML Researcher'],
  tagline:
    'Master’s student in Data Science at TU Wien, working where machine learning meets cybersecurity — from AI-driven security training to deep-learning malware detection.',
  location: 'Vienna, Austria',
  email: 'e12533560@student.tuwien.ac.at',
  phone: '+4367763065690',
  phoneDisplay: '+43 677 630 656 90',
  linkedin: 'https://www.linkedin.com/in/md-mojahidul-islam-a263131b4/',
  linkedinDisplay: 'linkedin.com/in/md-mojahidul-islam',
}

export const about = {
  paragraphs: [
    'I am currently pursuing a Master’s programme in Data Science at the Vienna University of Technology (TU Wien). Before that, I completed my B.Tech in Computer Science and Engineering at Vel Tech, Chennai, graduating with First Class with Distinction as a Study in India (SII) scholar.',
    'My work sits at the intersection of machine learning and security. As a Research Intern at La Trobe University, I explored how ChatGPT can make cybersecurity training more interactive and effective. I have published research on malware detection, deep learning and ML-based real-estate appraisal, and I enjoy building practical, data-driven solutions to real problems.',
  ],
  stats: [
    { value: '4', label: 'Publications' },
    { value: '7', label: 'Certifications' },
    { value: '85.8%', label: 'B.Tech Score' },
    { value: '2', label: 'National Awards' },
  ],
}

export const education = [
  {
    degree: 'Master Programme in Data Science',
    school: 'Vienna University of Technology (TU Wien)',
    place: 'Vienna, Austria',
    period: 'Sep 2025 — Ongoing',
    current: true,
  },
  {
    degree: 'B.Tech in Computer Science and Engineering',
    school: 'Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology',
    place: 'Chennai, India',
    period: 'Jul 2020 — May 2024',
    details: [
      'Final grade: 8.58/10 CGPA — 85.8% — 1st Class with Distinction',
      'Thesis: Exploring ChatGPT for Cybersecurity Training',
    ],
  },
]

export const experience = [
  {
    role: 'Research Intern',
    company: 'La Trobe University',
    place: 'Australia',
    period: 'Oct 2023 — Apr 2024',
    description:
      'Worked with Dr. Jabed Chowdhury on using ChatGPT for cybersecurity training. Developed interactive training modules that use ChatGPT to simulate real-world cyber threats, created engaging content to educate users on security best practices, and researched the effectiveness of AI-based training in improving cybersecurity awareness and skills.',
    tags: ['ChatGPT', 'Security Training', 'Research', 'AI in Education'],
  },
  {
    role: 'Cybersecurity Analyst',
    company: 'Senselearner Technologies Pvt. Ltd.',
    place: 'Remote',
    period: 'Aug 2024 — Oct 2024',
    description:
      'Monitored and analysed network security, identified vulnerabilities, and helped implement security measures to protect digital assets. Conducted risk assessments and contributed to security policy development.',
    tags: ['Network Security', 'Vulnerability Assessment', 'Risk Analysis'],
  },
]

export const projects = [
  {
    title: 'Deep Learning for Dermoscopic Skin Lesion Diagnosis',
    type: 'Research Project',
    period: 'Jan 2024 — May 2024',
    description:
      'Identifies skin lesions with deep learning, specifically convolutional neural networks (CNNs), trained on the HAM10000 image dataset. Carried out under the supervision of Prof. Dr. N. R. Rajalakshmi.',
    tags: ['CNN', 'TensorFlow', 'HAM10000', 'Medical Imaging'],
  },
  {
    title: 'IoT-Based Smart Saline Monitoring System',
    type: 'Healthcare IoT',
    award: '1st Place — National Level Competition',
    description:
      'Monitors a patient’s saline level and automatically sends an alert to the doctor. Fully automated and built on IoT.',
    tags: ['IoT', 'Healthcare', 'Automation'],
  },
  {
    title: 'Cost-Effective Non-Invasive Glucometer',
    type: 'Healthcare Device',
    award: '5th Place — National Level Competition',
    description:
      'Measures glucose without drawing blood, and does so more efficiently than existing products.',
    tags: ['Embedded Systems', 'Healthcare', 'Sensors'],
  },
]

export const skills = [
  { category: 'Programming Languages', items: ['Python'] },
  { category: 'Software Packages', items: ['MySQL', 'TensorFlow 2.0'] },
  { category: 'Security Tools', items: ['Metasploit', 'Burp Suite', 'OWASP ZAP'] },
  { category: 'Operating Systems', items: ['Linux', 'Windows', 'macOS'] },
  { category: 'Documentation', items: ['MS Office', 'LibreOffice', 'LaTeX'] },
]

export const certifications = [
  { name: 'CCNAv7: Introduction to Networks', issuer: 'Cisco Networking Academy' },
  { name: 'Machine Learning with Python', issuer: 'IBM · Coursera' },
  { name: 'Ethical Hacking Essentials', issuer: 'EC-Council' },
  { name: 'Network Support and Security', issuer: 'EC-Council' },
  { name: 'Digital Forensics Essentials', issuer: 'EC-Council' },
  { name: 'Networking Basics', issuer: 'Cisco Networking Academy' },
  { name: 'Intermediate SQL', issuer: 'DataCamp' },
]

export const awards = [
  {
    title: 'Study in India (SII) Scholarship',
    issuer: 'Ministry of Education, Government of India',
    period: '2020 — 2021',
    description:
      'A flagship programme of the Ministry of Education (MoE), Government of India, that supports international students to study at premier Indian institutes.',
  },
]

export const publications = [
  {
    title: 'Image Based Appraisal of Real Estate Properties Using Machine Learning Algorithm',
    doi: '10.1063/5.0241770',
  },
  {
    title: 'Malware Detection and Classification with Machine Learning Algorithms',
    doi: '10.1007/978-981-97-1313-4_3',
  },
  {
    title: 'Analysis and Identification of Malware Using Machine Learning with Optimized Features Selections',
    doi: '10.1109/ISCS61804.2024.10581170',
  },
  {
    title: 'Enhancing Malware Detection Using Deep Learning: A Study on MalNet Plus Architecture',
    doi: '10.1109/INCET61516.2024.10593638',
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact', label: 'Contact' },
]
