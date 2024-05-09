function countWords(paragraph) {
    const words = paragraph.trim().split(/\s+/);
    return words.length;
  }

  const paragraph1 = "Hello, world! This is a sample paragraph.";
  const paragraph2 = "This  is  another  paragraph  with  extra  spaces.";
  
  console.log(countWords(paragraph1));
  console.log(countWords(paragraph2));

