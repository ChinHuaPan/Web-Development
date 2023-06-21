<?php
    ////// connect to MySQL
    $con = mysqli_connect('localhost', 'root', 'mysql','DiaryData');
    if($con){
        echo "db success";
    }else{
        die('Failed: ' . mysqli_error($con));
    }

    //open database
    mysqli_select_db($con,"DiaryData");

    $sql_catch = "SELECT * FROM diary_fields";
    $catched_data = mysqli_query($con, $sql_catch);

    $html = file_get_contents("index.html");
    libxml_use_internal_errors(true);
    $doc = new DOMDocument(); 
    $doc->loadHTML($html);
    $p = $doc->getElementById("diary-content");
    $table = $p->appendChild($doc->createElement("table"));
    $th1 = $table->appendChild($doc->createElement("th", "Date"));
    $th2 = $table->appendChild($doc->createElement("th", "Mood"));
    $th3 = $table->appendChild($doc->createElement("th", "A sentence for today"));
    $th4 = $table->appendChild($doc->createElement("th", "Today's Sotry"));
    $th5 = $table->appendChild($doc->createElement("th", "Location"));
    $th6 = $table->appendChild($doc->createElement("th", "Tag"));

    while($row = mysqli_fetch_array($catched_data)) {
		$tr = $table->appendChild($doc->createElement("tr"));
		$td1 = $tr->appendChild($doc->createElement("td", $row['date']));
		$td2 = $tr->appendChild($doc->createElement("td", $row['mood_emoji'] .$row['mood_rating']));
		$td3 = $tr->appendChild($doc->createElement("td", $row['summary']));
		$td4 = $tr->appendChild($doc->createElement("td", $row['note']));
		$td5 = $tr->appendChild($doc->createElement("td", $row['location']));
		$td6 = $tr->appendChild($doc->createElement("td", $row['tag']));
	}

    echo $doc->saveHTML();

    //close database
    $con->close();
?>

<!------ get value -------->
<?php 
if ($_SERVER['REQUEST_METHOD'] =="GET") {


    ////// get value from the form, process and avoid errors
    if(isset($_GET['date'])){
        $dateTemp = explode("-", $_GET['date']);
        $date = $dateTemp[1]."/".$dateTemp[2]."/".$dateTemp[0];
    }else{
        $date = "";
    };

    if(isset($_GET['emoji'])){
        $emoji = $_GET['emoji'];
    }else{
        $emoji = "";
    };
    
    if(isset($_GET['rating'])){
        $rating = $_GET['rating'];
    }else{
        $rating = "";
    };
    
    if(isset($_GET['summary'])){
        $summary = $_GET['summary'];
    }else{
        $summary = "";
    };

    if(isset($_GET['note'])){
        $note = $_GET['note'];
    }else{
        $note = "";
    };

    if(isset($_GET['location'])){
        $location = $_GET['location'];
    }else{
        $location = "";
    };

    if(isset($_GET['tag'])){
        $tag = $_GET['tag'];
    }else{
        $tag = "";
    };

    ////// connect to MySQL
    $con = mysqli_connect('localhost', 'root', 'mysql','DiaryData');
    if($con){
        echo "db success";
    }else{
        die('Failed: ' . mysqli_error($con));
    }

    //open database
    mysqli_select_db($con,"DiaryData");

    // if any data is empty, it won't move forward
    if(!empty($date) && !empty($emoji)&& !empty($rating)&& !empty($summary)&& !empty($note)&& !empty($location)&& !empty($tag)){
        //////// insert into database
        $sql = "INSERT INTO diary_fields (`Id`, `date`, `mood_emoji`, `mood_rating`, `summary`, `note`, `location`, `tag`) VALUES ('0', '$date', '$emoji', '$rating', '$summary', '$note', '$location', '$tag')";

        //check if it inserts successfully
        if(mysqli_query($con, $sql))
        {
            echo "Diary saved successfully for $date.";
        }else{
            echo "data failed: $sql";
        }
    }
    //close database
    $con->close();
   


    function convertToEmoji($num){
        switch($num){
            case "0":
                return "0️⃣";
                break;
            case "1":
                return "1️⃣";
                break;
            case "2":
                return "2️⃣";
                 break;
            case "3":
                return "3️⃣";
                 break;
            case "4":
                return "4️⃣";
                break;
            case "5":
                return "5️⃣";
                break;
            case "6":
                return "6️⃣";
                break;
            case "7":
                return "7️⃣";
                break;
            case "8":
                return "8️⃣";
                break;
            case "9":
                return "9️⃣";
                break;
            case "10":
                return "🔟";
                break;
        }
    }


	// create a new "diary" and pass all values we get from the form
    // $diary = new diary();
	// $diary->date = $date;
	// $diary->mood_emoji = $emoji;
	// $diary->mood_rating = convertToEmoji($rating);
	// $diary->summary = $summary;
	// $diary->note = $note;
	// $diary->location = $location;
	// $diary->tag = $tag;



}
?>



<style>
body {
  max-width: 1200px;
  margin: 0 auto;
}

/* table */
table{
        text-align: left;
    }

    th, td{
        border-bottom: double;
    }

    .note-section{
        padding: 20px;
    }

    .emoji-section{
        font-size: 30px;
    }
</style>



<!--
    Reference:
    > insert data into table in MySQL
    https://www.tutorialrepublic.com/php-tutorial/php-mysql-insert-query.php

    > set default value for the date
    https://stackoverflow.com/questions/14212527/how-to-set-default-value-to-the-inputtype-date
    > emoji tutorial
    https://www.youtube.com/watch?v=Xfv6kPfmero
    > emoji library
    https://cdnjs.com/libraries/emojionearea
    > append data to JSON
    https://stackoverflow.com/questions/7895335/append-data-to-a-json-file-with-php
    > array_push
    https://www.php.net/manual/en/function.array-push.php
    > array_unshift
    https://www.php.net/manual/en/function.array-unshift.php
    > fix undefined errors with isset
    https://www.simplilearn.com/tutorials/php-tutorial/undefined-index-in-php
    > isset
    https://www.php.net/manual/en/function.isset.php
-->

