<?php



// for($i=0;$i < 25;$i++){

//     $numeros[$i] = rand(10,50);
    
//         for($a=0; $a < $i;$a++){
        
//             while($numeros[$i] == $numeros[$a]){
        
//                 $numeros[$i] = rand(10,50);
                
//                 $a = 0;
                
            
//             }
            
        
//         }
        
//     }



$contador=0;
$numeros=array();
do{
  $num = rand(10,50);
  if(in_array($num,$numeros)==false){
      $contador++;
      $numeros[$contador]=$num;
  }
}
while($contador < 25);
sort ($numeros, SORT_NUMERIC);
shuffle($numeros);
echo json_encode($numeros);


  
?>