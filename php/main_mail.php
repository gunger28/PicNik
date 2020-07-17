<?php

$name = $_POST['name'];
$phone = $_POST['phone_number'];
$mess = $_POST['message'];

$to = 'Gunger.K@yandex.ru';
$subject = 'PICNIK';


$message = 
"<div style=\" text-align: center;\">"
."<h1>" ."Новая заявка!" ."</h1>" ."<br>"
."<strong>" ."Имя: " ."</strong>" .$name."<br>"."<br>"
."<strong>"."Телефон: "."</strong>" ."$phone"."<br>"
."<strong>"."Сообщение: "."</strong>" ."$mess"."<br>"."</div>";


//mail('Gunger.K@yandex.ru', $subject, $message, 'From: gungeranton@yandex.ru');

$from = "PICNIK";
$headers  = "From: $from\r\nContent-type: text/html; http-equiv=\"Content-Type\" charset=utf-8\r\n";

    // try to post
    mail($to, $subject, $message, $headers);
    
    
$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'redirect-form.html';
header("Location: $redirect");
exit();



?>


