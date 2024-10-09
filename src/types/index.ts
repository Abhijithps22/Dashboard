export interface RoomType {
    name: string;
    shortName: string;
    tariffs: {
      single: number;
      double: number;
      triple: number;
    };
    activeCount: number; 
    pax: number;
}
  
  export interface Tariff {
    exPerson: number;
    exChild: number;
    exInfant: number;
    extraPersonLimit: number;
  }
  
  export interface Facilities {
    minibar: boolean;
    bathtub: boolean;
  }
  
  export interface TaxSlab {
    key: string;
    name: string;
    slabTaxFrom: number | null; 
    slabTaxTo: number | null; 
    fixedTaxFrom: number | null; 
    fixedTaxTo: number | null;
    aftDisc: boolean; 
    isSlabTax: boolean;
  }
  