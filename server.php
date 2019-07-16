<?php
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use WebSocket\Handler;

require 'vendor/autoload.php';
require 'handler.php';

// utworzenie obiektu klasy obsługującej
$handler = new Handler();

// stworzenie instancji serwera websocketów
$server = IoServer::factory(
    new HttpServer(
        new WsServer($handler)
    ),
    8080    // port
);

// ustawienie pętli
$server->loop->addPeriodicTimer(10, function() use ($server, $handler) {
    // uruchomienie metody obrotu pętli
    $handler->onLoop(array(
        'server' => $server,
    ));
});

echo 'Serwer uruchomiony' . PHP_EOL;

// uruchomienie serwera
$server->run();