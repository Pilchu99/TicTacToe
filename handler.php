<?php
namespace WebSocket;
use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

class Handler implements MessageComponentInterface
{
    protected $clients;

    public function __construct()
    {
        $this->clients = new \SplObjectStorage;
    }

    public function onOpen(ConnectionInterface $conn)
    {
        $this->clients->attach($conn);

        echo 'Nowe połączenie: ' . $conn->resourceId . PHP_EOL;
    }

    public function onMessage(ConnectionInterface $from, $msg) {
        $numRecv = count($this->clients) - 1;
        echo sprintf('Connection %d sending message "%s" to %d other connection%s' . "\n"
            , $from->resourceId, $msg, $numRecv, $numRecv == 1 ? '' : 's');
            $x=json_decode($msg);
            

            if(isset($x->namePlayerX)) $playerX=$x->namePlayerX;
            if(isset($x->namePlayerO)) $playerO=$x->namePlayerO;
             
        foreach ($this->clients as $client) {
            if ($from !== $client) {
                // The sender is not the receiver, send to each client connected
                $client->send($msg);
                $client->send(namePlayer)
            }
        }
    }

    public function onClose(ConnectionInterface $conn)
    {
        $this->clients->detach($conn);

        echo 'Zamknięto połączenie: ' . $conn->resourceId . PHP_EOL;
    }

    public function onError(ConnectionInterface $conn, \Exception $e)
    {
        echo 'Wystąpił błąd: ' . $e->getMessage() . PHP_EOL;

        $conn->close();
    }
    
    public function onLoop($options = array())
    {
        foreach($this->clients as $client) {
            $client->send('Cykliczna wiadomość');
    
            echo 'Wysłano komunikat cykliczny' . PHP_EOL;
        }
    }
}