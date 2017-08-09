  function citizen(){
   var vCompara = db.catUnidadAdmin.find({idSector:"10",idUnidadAdmin:"80"}).toArray()

   var vBusca = db.citizen.find({idSector:10,idUnidadAdmin:80}).limit(5).forEach(function(doc){

     var a = vCompara.map(function(a) { 
      return a.sector+a.idSector+a.unidadAdmin+a.idUnidadAdmin; 
    })
     .indexOf(doc.sector+doc.idSector+doc.unidadAdmin+doc.idUnidadAdmin);

     doc.idSector,doc.idUnidadAdmin == vCompara.idSector=10?datos.push(vBusca):false;
     vBusca.idSector == vCompara.idSector=10?datos.push(vCompara):false;
   });
 }; 
 
  citizen();




  // db.citizen.update({_id:doc._id}, 
//{ $set:{"sectorCorrecto":vCompara[a].sectorCorrecto,"idSectorCorrecto":vCompara[a].idSectorCorrecto,
  //"unidadAdminCorrecto":vCompara[a].unidadAdminCorrecto,"idUnidadAdminCorrecto":vCompara[a].idUnidadAdminCorrecto}});