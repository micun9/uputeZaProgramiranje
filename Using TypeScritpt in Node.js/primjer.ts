// koristi za objekte
interface Params {
    a: number;
    b: number;
  }
  
  // koristi za sve ostalo
  // (sve osim objekata)
  type Params2 = {
    a: number;
    b: number;
  };
  
  // takes params x, and returns number
  type Add = (x: Params) => number;
  
  const add: Add = (x) => {
    return x.a + x.b;
  };
  //