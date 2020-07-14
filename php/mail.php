<?php

$name = $_POST['user_name'];
$phone = $_POST['phone_number'];


$to = 'Gunger.K@yandex.ru';
$subject = 'PICNIK';
$img = "<img alt=\"\" width=\" 500 \" height=\" 300 \" src=\"http://picnik/assets/catalog/\">";

$message = 
"<div style=\" text-align: center;\">"
."<h1>" ."Новая заявка!" ."</h1>" ."<br>"
."<strong>" ."Категория: "."<strong>" ."Заборы"."<br>"
.$img ."<br>"."<br>"
."<strong>" ."Имя: " ."<strong>" .$name."<br>"."<br>"
."<strong>"."Телефон: "."<strong>" ."$phone"."<br>"."</div>";


//mail('Gunger.K@yandex.ru', $subject, $message, 'From: gungeranton@yandex.ru');

$from = "PICNIK";
$headers  = "From: $from\r\nContent-type: text/html; http-equiv=\"Content-Type\" charset=utf-8\r\n";

    // try to post
    mail($to, $subject, $message, $headers);
    
    
$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'redirect-form.html';
header("Location: $redirect");
exit();


    // // form fields
    // $name = $_POST['name'];
    // $mail = $_POST['mail'];
    // $user_message = $_POST['message'];

    // // message settings
    // $to = 'evnikagk@yandex.ru';
    // $subject = 'Новая заявка с сайта Маяк Авангард';

    // // message text
    // $message = "Здравствуйте!\r\n"
    //     ."На вашем сайте новая заявка!\r\n\n"
    //     .'Имя: '.$name."\r\n\n"
    //     ."Email: "."$mail"."\r\n\n"
    //     ."Сообщение: "."$user_message"."\r\n\n";

    // // headers
    // $from = "MayakAvangard";
    // $headers  = "From: $from\r\nContent-type: text/plain; charset=utf-8\r\n";

    // // try to post
    // if (mail($to, $subject, $message, $headers)) {
    //     echo 1;
    // } else {
    //     echo 0;
    // };

?>


