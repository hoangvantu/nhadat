<?php

class dbmanager {

 var $hostname = 'localhost';
 var $database = 'nhadat';
 var $username = 'root';
 var $password = '';

 function connect() {
  $conn = mysql_connect($this->hostname, $this->username, $this->password);
  mysql_select_db($this->database);
  mysql_query("SET charactor_set_results=utf8");
  mysql_query("SET NAMES 'utf8'");

//$querry="select * from district";
//$result=  mysql_query($querry, $conn);
//$row = mysql_fetch_array($result);
//$totalrow=  mysql_num_rows($result);
//echo $totalrow;
 }

 function getOne($sql, $limited = false) {
  if ($limited == true) {
   $sql = trim($sql . ' LIMIT 1');
  }

  $res = mysql_query($sql);
  if ($res !== false) {
   $row = mysql_fetch_row($res);

   if ($row !== false) {
    return $row[0];
   } else {
    return '';
   }
  } else {
   return false;
  }
 }

 function getRow($sql, $limited = false) {
  if ($limited == true) {
   $sql = trim($sql . ' LIMIT 1');
  }

  $res = mysql_query($sql);
  if ($res !== false) {
   return mysql_fetch_assoc($res);
  } else {
   return false;
  }
 }

 function getAll($sql) {
  $res = mysql_query($sql);
  if ($res !== false) {
   $arr = array();
   while ($row = mysql_fetch_assoc($res)) {
    $arr[] = $row;
   }

   return $arr;
  } else {
   return false;
  }
 }
 function xoanews($newsid)
 {
    
        $sql="DELETE FROM `nhadat`.`news`WHERE`news`.`NewsID`=$newsid";
        $this->querry($sql);
 }

 /**
  * 
  * @param type $sql
  * @return boolean
  */
 function querry($sql) {
  $result = mysql_query($sql);
  if (mysql_affected_rows() <= 0)
   return false;
  else
   return $result;
 }

 function user_getinfo($userid) {
  $sql = "SELECT * FROM  `user` WHERE userid = $userid ";
  return $this->getRow($sql);
 }

 /**
  * 
  * @param type $userid
  * @param type $oldpass
  * @param type $newpass
  * @return int 1 Neu sai mat khau cu 
  * @return int 2 Neu khong ton tai thanh vien nay
  * @return int 3  Khong ro ly do
  *  @return int 4 Thanh cong
  */
 function user_change_pass($userid, $oldpass, $newpass) {
  if ($user = $this->user_getinfo($userid)) {
   if ($user['Password'] == $oldpass) {
    $sql = "UPDATE  `nhadat`.`user` SET  `Password` =  '$newpass' WHERE  `user`.`UserID` =$userid;";
    if ($this->querry($sql) == false) {
     return 'Mất kết nối đến CSDL hoặc lý do không xác định';
    }
    else
     return TRUE;
   }

   else {
    return 'Bạn điền sai mật khẩu cũ ';
   }
  }


  else
   return 'Không tồn tại thành viên này';
 }
  /**
   * 
   * @param type $userid
   */
 function user_delete($userid)
  {
   $sql="DELETE FROM user where UserID=$userid";
    $this->querry($sql);
  }
  function tindang_dangtin($tieude,$noidung,$districtid)
  {
   
   
    $sql = "INSERT INTO `nhadat`.`news` (`NewsID`, `Title`, `Content`, `TimeAction`, `DistrictID`, `UserID`, `Display`, `ViewCount`, `PhoneNumber`, `loainhaid`, `nhucauid`, `khunggia`, `address`, `GiaNha`, `lat`, `lng`) VALUES (NULL, '$tieude', '$noidung', CURRENT_TIMESTAMP, '1', '1', '1', '1', '1', '1', '1', '1', '1111111111', '11111111111111111111111', '12112.12112', '12112.12112');";
  }
  function province_delete($provinceid)
  {
    $sql="DELETE FROM province where ProvinceID=$provinceid";
    $this->querry($sql);
  }
}

?>
