// Certificate layout configuration
// Adjust these values to position text on your PDF template

export const CERTIFICATE_LAYOUT = {
  pageSize: {
    width: 842,  // A4 landscape
    height: 595
  },
  
  studentName: {
    size: 36,
    font: 'bold',
    color: { r: 0.1, g: 0.15, b: 0.35 }, // Dark navy blue
    yPercent: 0.48, // 48% from bottom
    centered: true
  },
  
  courseName: {
    size: 18,
    font: 'regular',
    color: { r: 0.1, g: 0.1, b: 0.1 },
    yPercent: 0.38,
    centered: true
  },
  
  centerName: {
    size: 14,
    font: 'italic',
    color: { r: 0.2, g: 0.2, b: 0.2 },
    yPercent: 0.33,
    centered: true
  },
  
  issueDate: {
    size: 12,
    font: 'regular',
    color: { r: 0.1, g: 0.1, b: 0.1 },
    xFromRight: 120,
    y: 85
  },
  
  certificateNumber: {
    size: 10,
    font: 'regular',
    color: { r: 0.3, g: 0.3, b: 0.3 },
    x: 60,
    y: 45
  },
  
  grade: {
    size: 14,
    font: 'bold',
    color: { r: 0, g: 0.45, b: 0.2 }, // Green
    xFromRight: 120,
    y: 110
  }
};

export default CERTIFICATE_LAYOUT;
