// Array of states in India
const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];
  
  // Function to check if a string starts with a vowel
  const startsWithVowel = (str) => /^[aeiou]/i.test(str);
  
  // Filter out the names starting with vowels
  const statesWithoutVowels = states.filter(state => !startsWithVowel(state));
  
  console.log("States without names starting with vowels:");
  console.log(statesWithoutVowels);