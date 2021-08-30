#include "SocketCliente.h"

SocketCliente* cliente;

void * clienteRun(void *){
    try{
        cliente->conectar();
    } catch(string ex){
        cout << ex << endl;
    }
    pthread_exit(NULL);
}
int main() {
    cliente = new SocketCliente;
    pthread_t hiloC;
    pthread_create(&hiloC, 0, clienteRun, NULL);
    pthread_detach(hiloC);

    string json = "Hola desde el cliente";

    while(1){
        string msn;
        cin >> msn;
        if(msn == "salir")
            break;
        cliente->setMensaje(json.c_str());
    }

    delete cliente;
    return 0;
}
