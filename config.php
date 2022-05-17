<?php

// CREATE TABLE `involveasiaassessment`.`RevenueGroup` ( `ID` INT NOT NULL AUTO_INCREMENT , `GroupName` VARCHAR(300) NOT NULL , `GroupDescription` VARCHAR(300) NOT NULL , `isSpecialGroup` BOOLEAN NOT NULL DEFAULT FALSE , PRIMARY KEY (`ID`) ENGINE = InnoDB;
// CREATE TABLE `involveasiaassessment`.`RevenueRule` ( `ID` INT NOT NULL AUTO_INCREMENT , `Field` VARCHAR(300) NOT NULL , `Operator` VARCHAR(20) NOT NULL , `Amount` INT(3) NOT NULL DEFAULT '0' , `ParentRevenueID` INT(5) NOT NULL , PRIMARY KEY (`ID`)) ENGINE = InnoDB;
// CREATE TABLE `involveasiaassessment`.`RevenueParameter` ( `ID` INT NOT NULL AUTO_INCREMENT , `ParentRuleID` INT(5) NOT NULL, PRIMARY KEY (`ID`)) ENGINE = InnoDB;
  
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "involveasiaassessment";
    
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    
    // Check connection
    if($conn === false){
        die("ERROR: Could not connect. " 
            . mysqli_connect_error());
    }
    
    $sqlquery = "INSERT INTO revenuegroup VALUES 
        ('Test', 'Just to test connection', '0')"
    
    if ($conn->query($sql) === TRUE) {
        echo "record inserted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
?>