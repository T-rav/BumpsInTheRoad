function Travelator() {
  return { 
    canMakeItHome:function(road){
      let bumpCount = (road.match(/n/g) || []).length;
      if(bumpCount >= 15){
        return "Car Dead";
      }
      return "Whoohoo!";
    }
   };
}
