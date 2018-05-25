window.cipher = {
  encode:(offset, string) => encode(offset,string),
  decode: (offset, string) => decode(offset, string),
  createCipherWithOffset : (offset) => createCipherWithOffset(offset)

  // ... 
};

