<?php


/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function mysqlQuery($query,$connection) {
   // Gets the results from the query
   $results = mysql_query($query, $connection);
  if(mysql_num_rows($results))
  {
   // Loops through the queried results as an multi-dimensional array
  // while($rows = mysql_fetch_array($results, MYSQL_ASSOC)) 
   while($rows = mysql_fetch_array($results)) 
          {
      // Push results to single array
      $rs[] = $rows;
           }

   // Return results as array
   return $rs;
  };
  return false;
}


function querry2OneArray($query,$connection) {
   // Gets the results from the query
   $results = mysql_query($query, $connection);
  if(mysql_num_rows($results))
  {
   // Loops through the queried results as an multi-dimensional array
  // while($rows = mysql_fetch_array($results, MYSQL_ASSOC)) 
   while($rows = mysql_fetch_array($results)) 
          {
      // Push results to single array
      $rs = $rows;
           }

   // Return results as array
   return $rs;
  };
  return false;
}


?>
