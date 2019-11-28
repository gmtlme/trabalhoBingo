<?php 

for($i=0;$i < 25;$i++){

    $array[$i] = rand(10,50);
    
        for($a=0;$a < $i;$a++){
        
            while($array[$i] == $array[$a]){
        
                $array[$i] = rand(10,50);
                
                $a = 0;
            
            }	
        }
        
    }

    echo json_encode($array);


?>