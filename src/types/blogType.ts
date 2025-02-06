export interface blogType{
    _id: string;
    _TYPE:"product";
    title: string;
     description: string;
     image?: {
        asset:{
            _ref: string;
            _type:"image"
        }
     };
    
     date: number;
    
      author: string;
   
    slug:{
        _type:"slug"
        current: string;
    } ;
   

}
