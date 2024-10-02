function findHousing(housingToFind, housingList){
    let i = 0  
     while (i<housingList.length) {
       if (housingToFind.toLowerCase() == housingList[i].toLowerCase() ){
               return [i, housingList[i]]
           }
           i++;
     }
     return null;
}
