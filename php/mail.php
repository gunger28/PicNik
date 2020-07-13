<?php


&name = $_POST['user_name'];
&phone = $_POST['phone_number'];


$to = 'Gunger.K@yandex.ru';
$subject = 'Новая заявка с сайта Маяк Авангард';

$message = "Новая заявка!\r\n"
."На вашем сайте новая заявка!\r\n\n"
.'Имя: '.$name."\r\n\n"
."Email: "."$mail"."\r\n\n"
."Сообщение: "."$user_message"."\r\n\n";



?>