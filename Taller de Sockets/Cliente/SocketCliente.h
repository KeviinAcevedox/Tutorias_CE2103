//
// Created by kevin on 30/8/21.
//

#ifndef CLIENTE_SOCKETCLIENTE_H
#define CLIENTE_SOCKETCLIENTE_H

#include <sys/socket.h>
#include <sys/types.h>
#include <netdb.h>
#include <string.h>
#include <string>
#include <iostream>
#include <pthread.h>
#include <vector>
#include <unistd.h>
#include <arpa/inet.h>
using namespace std;

class SocketCliente{
public:
    SocketCliente();
    void conectar();
    void setMensaje(const char* msn);
private:
    int descriptor;
    sockaddr_in info;
    static void* Controlador(void* obj);
};

#endif //CLIENTE_SOCKETCLIENTE_H
