## DOM-events demo

Repozytorium zawiera proste „demo” obsługi zdarzeń w DOM, wykorzystujące *jQuery*.

### Wymagane narzędzia
Demo wykorzystuje następujące narzędzia:

* [Node.js](http://nodejs.org)
* [Bower](http://bower.io/)

Narzędziem podstawowym jest tutaj *Node.js*. Wybierając odpowiedni pakiet ze [strony głównej *Node.js*](http://nodejs.org),
można je bezproblemowo zainstalować na dowolnej platformie systemowej. Następnie, aby zainstalować *Bower-a*
należy wydać polecenie:

    sudo npm install -g bower

Oczywiście pod *Windows* pomijamy przedrostek `sudo`. Opcja `-g` powoduje, że *Bower*
zostanie zainstalowany „globalnie” – jest to zdecydowanie dobry wybór.

Korzystając z *Bower-a* wydajemy polecenie

    bower install

które spowoduje pobranie aktualnej wersji biblioteki *jQuery*.

Poszczególne przykłady zawarte są w plikach `ev_0n.html`.
